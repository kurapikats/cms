import React from 'react';

const AdminLayout = ({content = () => null }) => (
  <div className="container">
    <div>
      {content()}
    </div>
  </div>
);

export default AdminLayout;
