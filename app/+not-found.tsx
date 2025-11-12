import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: "Oops! Not found" }}/>
      <View style={styles.container}>
        <Text style={styles.text}>oops! Page Not Found</Text>
        <Link href={"../"} style={styles.button}>Go back to Home Screen</Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
    button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
