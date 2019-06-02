import { createStackNavigator, createAppContainer } from "react-navigation";
import LogInScreen from "../screens/presenter";

const RootStack = createStackNavigator({
  LogIn: {
    screen: LogInScreen
  }
});

const LoggedOutNavigation = createAppContainer(RootStack);



export default LoggedOutNavigation;
