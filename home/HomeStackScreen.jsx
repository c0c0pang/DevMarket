import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./HomeScreen";
import { ProductDetailScreen } from "./ProductDetailScreen";
import { HomeIconView } from "../style/navigationStyle";
import { WithLocalSvg } from "react-native-svg";
import SearchIcon from '../assets/SearchIcon.svg';
import MenuIcon from '../assets/MenuIcon.svg';
import LeftArrowIcon from '../assets/LeftArrowIcon.svg';
import ShareIcon from '../assets/ShareIcon.svg';
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
export const HomeStackScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerRight: () => {
          if (route.name === "Home") {
            return (
              <HomeIconView>
                <WithLocalSvg asset={SearchIcon} />
                <WithLocalSvg asset={MenuIcon} />
              </HomeIconView>
            )
          }
          else if (route.name === "ProductDetail") {
            return (
              <WithLocalSvg asset={ShareIcon} width={35} height={35} />
            )
          }
        },
        headerLeft: () => {
          if (route.name === "ProductDetail") {
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <WithLocalSvg asset={LeftArrowIcon} width={30} height={30} />
              </TouchableOpacity>
            )
          }
        },
        headerTitle: () => {
          return <Text></Text>
        },
        headerBackVisible: false,
        headerStyle: {
          backgroundColor: '#181a20',
          borderBottomWidth: 0,
        },
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}
