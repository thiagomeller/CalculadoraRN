import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import ViewCalculus from "../../components/ViewCalculus";
import CalcButton from "../../components/CalcButton";
import SimpleButton from "../../components/SimpleButton";

interface CalculadoraProps {}

const Calculadora = (props: CalculadoraProps) => {
  const [calculus, setCalculus] = useState<string>("");
  const [result, setResult] = useState<string>("");

  return (
    <View style={styles.container}>
      <ViewCalculus calculus={calculus} />
      <ViewCalculus calculus={result} />
      <View style={{ flex: 1, gap: 8, padding: 16 }}>
        <View style={styles.wrapper}>
          <SimpleButton
            title="C"
            onPress={() => {
              setCalculus("");
              setResult("");
            }}
            backgroundColor="#FFA500"
          />
          <View style={styles.wrapper}>
            <SimpleButton
              title="DEL"
              onPress={() =>
                setCalculus(calculus.substring(0, calculus.length - 1))
              }
            />
            <CalcButton title="/" onPress={setCalculus} />
          </View>
        </View>
        <View style={styles.wrapper}>
          <CalcButton title="7" onPress={setCalculus} />
          <CalcButton title="8" onPress={setCalculus} />
          <CalcButton title="9" onPress={setCalculus} />
          <CalcButton title="*" onPress={setCalculus} />
        </View>
        <View style={styles.wrapper}>
          <CalcButton title="4" onPress={setCalculus} />
          <CalcButton title="5" onPress={setCalculus} />
          <CalcButton title="6" onPress={setCalculus} />
          <CalcButton title="-" onPress={setCalculus} />
        </View>
        <View style={styles.wrapper}>
          <CalcButton title="1" onPress={setCalculus} />
          <CalcButton title="2" onPress={setCalculus} />
          <CalcButton title="3" onPress={setCalculus} />
          <CalcButton title="+" onPress={setCalculus} />
        </View>
        <View style={styles.wrapper}>
          <CalcButton title="0" onPress={setCalculus} />
          <View style={styles.wrapper}>
            <CalcButton title="." onPress={setCalculus} />
            <SimpleButton
              title="="
              backgroundColor="#FFA500"
              onPress={() => setResult(String(eval(calculus)))}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Calculadora;
