import DashboardPage from '@/app/(admin)/dashboard/page';
import VerticalLayout from '@/components/layout/VerticalLayout';
import { useLayoutContext } from '@/context/useLayoutContext';
import { useEffect } from 'react';
const Compact = () => {
  const {
    changeMainMenuSize
  } = useLayoutContext();
  useEffect(() => {
    changeMainMenuSize('compact');
  }, []);
  return <>
    <VerticalLayout>
      <DashboardPage />
    </VerticalLayout>
  </>;
};
export default Compact;