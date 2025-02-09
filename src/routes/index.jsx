// src/routes/routeConfig.js
import MaintenancePlans from '../pages/maintenance/MaintenancePlans';
// import AddOperationChecks from '../pages/operations/AddOperationChecks';
// import Login from '../pages/auth/Login';
// ... other imports

export const routes = [
  {
    // path: 'auth',
    // redirectIfAuth: true, // These routes redirect to home if user is logged in
    // children: [
    //   {
    //     path: 'login',
    //     element: Login,
    //     breadcrumb: 'Login'
    //   }
    // ]
  },
  {
    path: '/maintenance',
    protected: false, // These routes need authentication
    children: [
      {
        path: 'plans',
        element: MaintenancePlans,
        breadcrumb: 'Maintenance Plans'
      }
    ]
  },
  {
    path: '/operations',
    protected: false,
    children: [
      {
        path: 'add-checks',
        // element: AddOperationChecks,
        breadcrumb: 'Add Operation Checks'
      }
    ]
  }
];