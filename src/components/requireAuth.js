// convention is to name components that export a function with lower case
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import requireAuth from 'components/requireAuth'; // this is a function

export default ChildComponent => {
  class ComposedComponent extends Component {
    // the functions below are executed (if necessary) before the child component is (re)rendered

    // just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // just got updated
    componentDidUpdate = (prevProps, prevState) => {
      this.shouldNavigateAway();
    };

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    // passes along any props that are received from the parent
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};

// import React from 'react';
// import PropTypes from 'prop-types';

// export default (WrappedComponent) => {
//   const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

//   hocComponent.propTypes = {
//   };

//   return hocComponent;
// };
