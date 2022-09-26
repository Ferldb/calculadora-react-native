import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";



const Button = ({ onPress, value }) => {

    function checkDigit(value) {
        if (value == 0) return styles.touchableButtonZero;
        else return isNaN(value) == false ? styles.touchableButtonNumber : styles.touchableButtonSimbol;
    }

    return (
        <TouchableOpacity onPress={() =>onPress()} style={checkDigit(value)}>
            <Text style={styles.numbers}>{value}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchableButtonNumber: {
        alignItems: "center",
        height: 80,
        margin: 10,
        width: '20%',
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#593F62",
    },
    touchableButtonSimbol:{
        alignItems: "center",
        height: 80,
        margin: 10,
        width: '20%',
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
    },
    touchableButtonZero: {
        alignItems: "center",
        height: 80,
        margin: 10,
        width: "45%",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#593F62",
    },
    numbers: {
        fontWeight: "600",
        fontSize: 30,
        color: "#fff",
        textAlign: "center",
        fontFamily: "Roboto",
    },
});

export default Button;