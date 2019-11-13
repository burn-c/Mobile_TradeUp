import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import ListUser from './pages/ListUser';
import UserDetails from './pages/UserDetails';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      ListUser,
      UserDetails,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#712',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
