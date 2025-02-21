import React, { useCallback, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Button from "./Button";

type AddTodoInputProps = {
  onAddTodo: (title: string) => void;
};

const AddTodoInput: React.FC<AddTodoInputProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAdd = useCallback(() => {
    if (inputValue.trim() !== "") {
      onAddTodo(inputValue);
      setInputValue("");
    }
  }, [inputValue, onAddTodo]);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add new to-do..."
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginRight: 10,
  },
});

export default React.memo(AddTodoInput);
