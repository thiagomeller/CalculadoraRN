import * as React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import ViewCalculus from "../../components/ViewCalculus";
import SimpleButton from "../../components/SimpleButton";

interface CalculadoraProps {}

const Calculadora = (props: CalculadoraProps) => {
  return (
    <View style={styles.container}>
      <ViewCalculus calculus="0" />
      <ViewCalculus calculus="0" />
      <View style={{ flex: 1, flexDirection: "row", gap: 8 }}>
        <SimpleButton title="0" />
        <SimpleButton title="0" />
        <SimpleButton title="0" />
        <SimpleButton title="0" />
      </View>
      <View style={{ flex: 1, flexDirection: "row", gap: 8 }}>
        <SimpleButton title="6" />
        <SimpleButton title="7" />
        <SimpleButton title="8" />
        <SimpleButton title="9" />
      </View>
      <View style={{ flex: 1, flexDirection: "row", gap: 8 }}>
        <SimpleButton title="3" />
        <SimpleButton title="4" />
        <SimpleButton title="5" />
        <SimpleButton title="0" />
      </View>
      <View style={{ flex: 1, flexDirection: "row", gap: 8 }}>
        <SimpleButton title="0" />
        <SimpleButton title="1" />
        <SimpleButton title="2" />
        <SimpleButton title="0" />
      </View>
    </View>
  );
};

export default Calculadora;
