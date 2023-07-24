import { Linking, Platform, Text } from "react-native";
import { ProfileCard } from "./components/ProfileCard";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  function goToSocialMedia(socialMedia) {
    let url;
    switch (socialMedia) {
      case "instagram":
        url = "https://www.instagram.com/alliesoldau/";
        break;
      case "github":
        url = "http://github.com/alliesoldau";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/allie-soldau/";
        break;
    }
    Linking.openURL(url);
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <ProfileCard
          onPressSocialMedia={goToSocialMedia}
          firstName={"Rando"}
          lastName={"McGee"}
          age={28}
        />
        {Platform.OS === "android" && <Text>Hi on Android</Text>}
        {Platform.OS === "ios" && <Text>Hi from iOS</Text>}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
