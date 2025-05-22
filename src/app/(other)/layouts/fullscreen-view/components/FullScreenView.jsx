import DashboardPage from '@/app/(admin)/dashboard/page';
import VerticalLayout from '@/components/layout/VerticalLayout';
import { useLayoutContext } from '@/context/useLayoutContext';
import { useEffect } from 'react';
const FullScreenView = () => {
  const {
    changeMainMenuSize
  } = useLayoutContext();
  useEffect(() => {
    changeMainMenuSize('fullscreen');
  }, []);
  return <>
  <VerticalLayout>
    <DashboardPage />
  </VerticalLayout>
  </>;
};
export default FullScreenView;