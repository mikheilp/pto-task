import React from 'react';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <main>
        <div className='layout'>{children}</div>
      </main>
    );
  }
}

export default Layout;
