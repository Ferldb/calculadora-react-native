import React, { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import Button from "../components/Button";

const HomeScreen = ({ navigation }) => {

  const [result, setResult] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [operation, setOperation] = useState("");

  function deleteDigit(){
    return result.length > 1 ? setResult(result.slice(0, -1)) : setResult(0);
  }

  function operationPressed(op){
    setOperation(op);
    setFirstNumber(result);
    setResult("0");
    if(op == "%"){
      calculate(op);
    }
  }

  function eraseAll () {
    setResult("0");
    setFirstNumber("");
    setOperation("");
  }

  function calculate(operation){
    switch(operation){
      case "+":
        setResult((Number(firstNumber) + Number(result)).toString());
        break;
      case "-":
        setResult((Number(firstNumber) - Number(result)).toString());
        break;
      case "*":
        setResult((Number(firstNumber) * Number(result)).toString());
        break;
      case "/":
        setResult((Number(firstNumber) / Number(result)).toString());
        break;
      case "%":
        setResult((Number(result) / 100).toString());
        break;
      default:
        setResult("aaaa");
    }
    setFirstNumber("");
    setOperation("");
  }

  useEffect(() => {
    setResult(0);
    setFirstNumber("");
    setOperation("");
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor:"white" }}>
      <Text style={styles.historic}>{firstNumber} {operation} {result}</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent:"space-around"}}>
        <Button onPress={() => eraseAll()} value="AC" />
        <Button onPress={() => operationPressed("%")} value="%" />
        <Button onPress={() => deleteDigit()} value={<Ionicons name="backspace" size={30}></Ionicons>} />
        <Button onPress={() => operationPressed("/")} value="÷" />
        <Button onPress={() => setResult(result == "0" ? "7" : result + "7")} value="7" />
        <Button onPress={() => setResult(result == "0" ? "8" : result + "8")} value="8" />
        <Button onPress={() => setResult(result == "0" ? "9" : result + "9")} value="9" />
        <Button onPress={() => operationPressed("*")} value="x" /> 
        <Button onPress={() => setResult(result == "0" ? "4" : result + "4")} value="4" />
        <Button onPress={() => setResult(result =="0" ? "5" : result + "5")} value="5" />
        <Button onPress={() => setResult(result == "0" ? "6" : result + "6")} value="6" />
        <Button onPress={() => operationPressed("-")}value="-" /> 
        <Button onPress={() => setResult(result == "0" ? "1" : result + "1")} value="1" />
        <Button onPress={() => setResult(result == "0" ? "2" : result + "2")} value="2" />
        <Button onPress={() => setResult(result == "0" ? "3" : result + "3")} value="3" />
        <Button onPress={() => operationPressed("+")} value="+"/> 
        <Button onPress={() => setResult(result == "0" ? "0" : result + "0")} value="0" />
        <Button onPress={() => setResult(result == "0" ? "0,": result + ".")} value="." />
        <Button onPress={() => calculate(operation)} value="=" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  result: {
    height: 100,
    color: "#000000",
    fontSize: 50,
    textAlign: "right",
    padding: 10,
  },
  historic:{
    fontSize: 20,
    textAlign: "right",
  }
});

export default HomeScreen;
