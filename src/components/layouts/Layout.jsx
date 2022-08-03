import React from 'react';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import DefaultHeader from './Header';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <main>
        <DefaultHeader />
        <div className='container'>
          <Breadcrumb />
        </div>
        <div className='layout'>{children}</div>
      </main>
    );
  }
}

export default Layout;
