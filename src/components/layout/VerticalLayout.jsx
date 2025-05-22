import FallbackLoading from '@/components/FallbackLoading';
import Footer from '@/components/layout/Footer';
// import TopBar from '@/components/layout/TopBar'
import Preloader from '@/components/Preloader';
import { lazy, Suspense } from 'react';
const VerticalNavigationBar = lazy(() => import('@/components/layout/LeftSideBar/index'));
const TopBar = lazy(() => import('@/components/layout/TopBar/index'));
const VerticalLayout = ({
  children
}) => {
  return <>
      <div className="wrapper">

        <Suspense fallback={<FallbackLoading />}>
          <TopBar />
        </Suspense>

        <Suspense fallback={<FallbackLoading />}>
          <VerticalNavigationBar />
        </Suspense>

        <div className="page-content">
          <div className="container-fluid">
            <Suspense fallback={<Preloader />}>{children}</Suspense>
          </div>
          <Footer />
        </div>
      </div>
    </>;
};
export default VerticalLayout;