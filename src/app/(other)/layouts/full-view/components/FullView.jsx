import DashboardPage from '@/app/(admin)/dashboard/page';
import VerticalLayout from '@/components/layout/VerticalLayout';
import { useLayoutContext } from '@/context/useLayoutContext';
import { useEffect } from 'react';
const FullView = () => {
  const {
    changeMainMenuSize
  } = useLayoutContext();
  useEffect(() => {
    changeMainMenuSize('full');
  }, []);
  return <>
  <VerticalLayout>
    <DashboardPage />
  </VerticalLayout>
  </>;
};
export default FullView;