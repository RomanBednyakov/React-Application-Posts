import React from 'react';

class Loader extends React.Component {
  render() {
    const { text } = this.props;
    const loader = (
      <div className="loader component" style={{ height: 100 }} key="loader">{text}</div>
    );
    return loader;
  }
}

export default Loader;
