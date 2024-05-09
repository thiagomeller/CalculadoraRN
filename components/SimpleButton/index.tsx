import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface SimpleButtonProps {
  title: string;
}

const SimpleButton = ({ title }: SimpleButtonProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SimpleButton;
