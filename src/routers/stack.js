import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/singup";
import Login from "../screens/login";
import tabs from "./tabs";
import Home from "../screens/home";

const Stack = createNativeStackNavigator();

const StackScren = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name="Login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Signup}
        name="crearCuenta"
        options={{ headerShown: false }}
      />
      {/* importar tabs*/}
      <Stack.Screen
        component={tabs}
        name="tabs"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Home}
        name="Home" // Asegúrate de que el nombre sea "Home"
      />
    </Stack.Navigator>
  );
};
