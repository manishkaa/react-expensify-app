import React from 'react';

import ReactDOM from 'react-dom';
const Info =(props) =>(
<div>
  <h1>Info</h1>
</div>
);
const withAdminWarning = (WrappedComponent) =>{
return (props) =>{
  <div>
    <p>this is private info</p>
    <WrappedComponent />
  </div>
};
};
const AdminInfo = withAdminWarning(Info);
ReactDOM.render(<AdminInfo info="Hey" />, document.getElementById('app'));
