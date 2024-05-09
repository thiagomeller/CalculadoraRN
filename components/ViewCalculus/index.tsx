import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";

interface ViewCalculusProps {
  calculus: string;
}

const ViewCalculus = ({ calculus }: ViewCalculusProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textCalculus}>{calculus ? calculus : "0"}</Text>
    </View>
  );
};

export default ViewCalculus;
