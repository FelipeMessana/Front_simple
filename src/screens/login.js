import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Platform,
  Image,
  Alert,
} from "react-native";
import { Button } from "react-native-paper";
import Input from "../components/input";
import PassInput from "../components/passinput";
import { loginApi } from "../apis/login";
import { save } from "../utils/storage";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [dni, setDni] = useState();
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!dni || !password) {
      Alert.alert(
        "Error",
        "Por favor, ingresa el nombre de usuario y la contraseña."
      );
      return;
    }

    try {
      const data = await loginApi(dni, password);
      console.log("Data:", data);
      if (data.success) {
        Alert.alert("Perfecto", "Iniciaste sesión correctamente.");
        await save("token", data.token);
        navigation.navigate("tabs");
      } else {
        Alert.alert(
          "Error",
          "Usuario o contraseña incorrecta. Verifica tus credenciales e intenta nuevamente."
        );
      }
    } catch (error) {
      console.error("Error logging in:", error);
      Alert.alert(
        "Error",
        "No se pudo iniciar sesión. Verifica tu conexión a internet e intenta nuevamente."
      );
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/bgprincipal.jpg")}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.overlay} />
        <View style={styles.container}>
          <View style={styles.topSpace} />
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/logo.jpg")}
              style={styles.logo}
            />
            <Text style={styles.greetingText}>Hola soy russel!</Text>
          </View>
          <View style={styles.inputContainer}>
            <Input
              label="nombre de usuario"
              icon="account"
              value={dni}
              onChange={setDni}
            />
            <PassInput
              label="ingrese su contraseña"
              value={password}
              onChange={setPassword}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.loginButton}
            >
              ingresar
            </Button>
            <Button
              mode="outlined"
              onPress={() => {
                navigation.navigate("crearCuenta");
              }}
              style={styles.createAccountButton}
            >
              Crear Cuenta
            </Button>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" && 25,

    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro semi-transparente
  },
  topSpace: {
    flex: 0.1, // Espacio superior ajustable
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.4, // Espacio para el logo ajustable
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white", // Texto blanco sobre fondo oscuro
    marginBottom: 20,
  },
  inputContainer: {
    flex: 0.3, // Espacio para los inputs ajustable
    padding: 10,
  },
  buttonContainer: {
    flex: 0.2, // Espacio para los botones ajustable
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    width: "80%",
  },
  createAccountButton: {
    marginTop: 10, // Margen superior ajustable
  },
});

export default Login;
