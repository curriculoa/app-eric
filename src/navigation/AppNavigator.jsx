import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SobreScreen from "../screens/SobreScreen";
import ProdutosScreen from "../screens/ProdutosScreen";
import TempoScreen from "../screens/TempoScreen";
import { NavigationContainer } from "@react-navigation/native";
import TempoScreenAula from "../screens/TempoScreenAula";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator" // funciona como uma ID da tela, vamos usa-la para chamar esta tela depois
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen" 
        component={HomeScreen} 
        options={{
          title: "Home",
          tabBarIcon: "home",
        }}
      />
      <Tab.Screen
        name="ProdutosScreen"
        component={ProdutosScreen}
        options={{
          title: "Produtos",
          tabBarIcon: "cart",
        }}
      />

      <Tab.Screen
        name="TempoScreenAula"
        component={TempoScreenAula}
        options={{
          title: "Tempo",
          tabBarIcon: "weather-sunny",
        }}
      />
        <Tab.Screen
        name="SobreScreen"
        component={SobreScreen}
        options={{
          title: "Sobre",
          tabBarIcon: "information",
        }}
      />
    </Tab.Navigator>
  );
}
