import React from 'react';
import {connect} from 'react-redux';

class Pane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Pane</div>
    );
  }
}

export default connect((state, ownProps) => {
  return {
    
  }
})(Pane);
