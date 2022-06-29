import { getRequest } from '@service/http';
import React, { useEffect } from 'react';

function Dashboard() {
  useEffect(() => {
    getRequest('transaction/sync').then(() => {
      console.log('this is in response');
    });
  }, []);
  return <div>Dashboard</div>;
}

export default Dashboard;
