import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface CalcButtonProps {
  title: string;
  onPress: (calculus: (prevState: string) => string) => void;
}

const CalcButton = ({ title, onPress }: CalcButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress((prevState: string) => prevState + title)}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CalcButton;
