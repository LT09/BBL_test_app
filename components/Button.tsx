import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  isDelete?: boolean;
};
const Button: React.FC<ButtonProps> = ({ title, onPress, isDelete }) => {
  return (
    <Pressable
      style={isDelete ? styles.deleteuttonContainer : styles.buttonContainer}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#3386ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 4,
  },
  deleteuttonContainer: {
    backgroundColor: "#ff3333",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#fff",
  },
});

export default React.memo(Button);
