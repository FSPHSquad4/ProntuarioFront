import DashboardPage from '@/app/(admin)/dashboard/page';
import VerticalLayout from '@/components/layout/VerticalLayout';
import { useLayoutContext } from '@/context/useLayoutContext';
import { useEffect } from 'react';
const HoverMenu = () => {
  const {
    changeMainMenuSize
  } = useLayoutContext();
  useEffect(() => {
    changeMainMenuSize('sm-hover');
  }, []);
  return <>
    <VerticalLayout>
      <DashboardPage />
    </VerticalLayout>
  </>;
};
export default HoverMenu;