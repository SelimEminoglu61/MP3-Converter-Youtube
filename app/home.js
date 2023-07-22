import { Stack } from "expo-router";
import { SafeAreaView, ScrollView, View, Text } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerBackVisible: false,
          headerTitle: "",
          headerShadowVisible: true,
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
