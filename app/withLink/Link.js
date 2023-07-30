import { Stack, useRouter } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";

import { images } from "../../constants";
import styles from "../stylehome";

const Link = () => {
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
              source={images.mainLogo}
              resizeMode="cover"
              style={styles.headerLogo(45)}
            />
          ),
          headerRight: () => (
            <View style={styles.headerView}>
              <Text
                style={styles.headerText}
                onPress={() =>
                  Linking.openURL("https://www.linkedin.com/in/selim-eminoglu/")
                }
              >
                Selim Eminoğlu
              </Text>
              <Image
                source={images.profile}
                resizeMode="cover"
                style={styles.headerLogo(45)}
              />
            </View>
          ),
        }}
      />
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default Link;
