import { createStackNavigator, createAppContainer } from "react-navigation";
import AuthHome from "../App";
import ModuleInsert from './ModuleInsert';
import ModuleList from './ModuleList';

const AuthNavigation = createStackNavigator(
  {
    AuthHome,
    ModuleInsert,
    ModuleList
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AuthNavigation);