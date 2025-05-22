import React from 'react';
import AllNotifications from './components/AllNotifications';
import PageBreadcrumb from '@/components/PageBreadcrumb';
const Notifications = () => {
  return <>
      <PageBreadcrumb title='Notificações' />
      <AllNotifications />
    </>;
};
export default Notifications;