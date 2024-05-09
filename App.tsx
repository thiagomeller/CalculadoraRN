import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Calculadora from "./screens/Calculator";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" translucent />
      <Calculadora />
    </View>
  );
}
