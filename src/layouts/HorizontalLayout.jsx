import FallbackLoading from '@/components/FallbackLoading';
import Footer from '@/components/layout/Footer';
import { useLayoutContext } from '@/context/useLayoutContext';
// import HorizontalNavBar from '@/components/layout/HorizontalNav/page'
import { getHorizontalMenuItems } from '@/helpers/Manu';
import { toggleDocumentAttribute } from '@/utils/layout';
import { lazy, Suspense, useEffect } from 'react';
const HorizontalNavBar = lazy(() => import('@/components/layout/HorizontalNav/page'));
const TopBar = lazy(() => import('@/components/layout/TopBar/index'));
const HorizontalLayout = ({
  children
}) => {
  const menuItems = getHorizontalMenuItems();
  const {
    orientation
  } = useLayoutContext();
  useEffect(() => {
    toggleDocumentAttribute('data-layout', orientation === 'vertical' ? '' : 'topnav');
    return () => {
      toggleDocumentAttribute('data-layout', orientation === 'vertical' ? '' : 'topnav', true);
    };
  });
  return <>
      <div className="wrapper">
        <Suspense fallback={<FallbackLoading />}>
          <TopBar />
        </Suspense>

        <Suspense fallback={<FallbackLoading />}>
          <HorizontalNavBar menuItems={menuItems} />
        </Suspense>

        <div className="page-content">
          <div className="page-container">{children}</div>
          <Footer />
        </div>
      </div>
    </>;
};
export default HorizontalLayout;