import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginUser from './pages/LoginUser';
import ListUser from './pages/ListUser';
import UserDetails from './pages/UserDetails';

const Routes = createAppContainer(
  createStackNavigator(
    {
      LoginUser,
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
