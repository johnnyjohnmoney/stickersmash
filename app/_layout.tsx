import { Stack } from "expo-router";
import { LogBox, StatusBar } from "react-native";


LogBox.ignoreAllLogs(true); // Ignore all log notifications

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#25292e" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false, headerLeft: () => <> </> }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}

