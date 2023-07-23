import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, View, Text, Image } from "react-native";

import { mainLogo, profile } from "../constants/images";
import styles from "./stylehome";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerBackVisible: false,
          headerTitle: "",
          headerShadowVisible: true,
          headerLeft: () => (
            <Image
              source={mainLogo}
              resizeMode="cover"
              style={styles.headerLogo(45)}
            />
          ),
          headerRight: () => (
            <Image
              source={profile}
              resizeMode="cover"
              style={styles.headerLogo(45)}
            />
          ),
        }}
      />
      <ScrollView>
        <View>
          <Text>deneme</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
