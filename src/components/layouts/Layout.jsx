import React from 'react';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <main className="pt-40px">
        {children}
      </main>
    );
  }
}

export default Layout;
