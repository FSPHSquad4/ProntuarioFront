import React from 'react';
import AllRating from './components/AllRating';
import PageBreadcrumb from '@/components/PageBreadcrumb';
const Ratings = () => {
  return <>
    <PageBreadcrumb title='Estrela' />
      <AllRating />
    </>;
};
export default Ratings;