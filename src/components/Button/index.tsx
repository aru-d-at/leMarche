import React from "react";
import { View, Text, Pressable } from "react-native"
import styles from "./styles"

interface ButtonProps {
    type: string;
    text: string;
    onPress: () => void;
}

const Button = ({ type, text , onPress }: ButtonProps) => {
    return (
        <View style={styles.root}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text} >{text}</Text>
            </Pressable>
        </View>
    )
}

export default Button