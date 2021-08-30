import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreeen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List:ListScreen,
    Component:ComponentsScreen,
    Image:ImageScreen,
    Counter:CounterScreen,
    Color:ColorScreeen,
    Square:SquareScreen,
    Text:TextScreen,
    Box:BoxScreen,
    Search:SearchScreen,
    ResultsShow:ResultShowScreen

  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
