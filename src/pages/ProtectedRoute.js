// import React, { useContext } from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import ThemeContext from './SynchedData';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { isAuthenticated } = useContext(ThemeContext);

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component key={props.location.key} {...props} />
//         ) : (
//           <Navigate to="/Signin" replace/>
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;