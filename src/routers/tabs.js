import React, { useState } from "react";
import Home from "../screens/home";
import NewSubjet from "../screens/newsubjet";
import { BottomNavigation } from "react-native-paper";
import { primaryColor } from "../config/colors";

const TabsScreens = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "Home",
      title: "inicio",
      focusedIcon: "heart",
      unfocusedIcon: "orange",
    },
    {
      key: "NewSubject",
      title: "Nueva Materia",
      focusedIcon: "heart",
      unfocusedIcon: "yellow",
    },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    Home: Home,
    NewSubjet: NewSubjet,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default TabsScreens;
