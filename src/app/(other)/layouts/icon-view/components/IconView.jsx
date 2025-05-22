import DashboardPage from '@/app/(admin)/dashboard/page';
import VerticalLayout from '@/components/layout/VerticalLayout';
import { useLayoutContext } from '@/context/useLayoutContext';
import { useEffect } from 'react';
const IconView = () => {
  const {
    changeMainMenuSize
  } = useLayoutContext();
  useEffect(() => {
    changeMainMenuSize('condensed');
  }, []);
  return <>
    <VerticalLayout>
      <DashboardPage />
    </VerticalLayout>
  </>;
};
export default IconView;