import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface SimpleButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
}

const SimpleButton = ({
  title,
  onPress,
  backgroundColor = "#383838",
}: SimpleButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backgroundColor }]}
      onPress={() => onPress()}
    >
      <Text style={[styles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SimpleButton;
