import { Stack } from "expo-router";
import { useFonts } from "expo-font";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    NunitoBold: require("../assets/fonts/Nunito-Bold.ttf"),
    NunitoItalic: require("../assets/fonts/Nunito-Italic.ttf"),
    NunitoRegular: require("../assets/fonts/Nunito-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default Layout;
