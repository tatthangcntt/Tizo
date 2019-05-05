// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { StackNavigator } from 'react-navigation';

// import { addListener } from '../utils/redux';
// import {AppNavigator} from '../screens/RegisterScreenRouter'

// class AppWithNavigationState extends React.Component {
//     static propTypes = {
//         dispatch: PropTypes.func.isRequired,
//         nav: PropTypes.object.isRequired,
//     };

//     render() {
//         const { dispatch, nav } = this.props;
//         return (
//             <AppNavigator
//                 navigation={{
//                     dispatch,
//                     state: nav,
//                     addListener,
//                 }}
//             />
//         );
//     }
// }

// const mapStateToProps = state => ({
//     nav: state.nav,
// });

// export default connect(mapStateToProps)(AppWithNavigationState);
