// AddTodoInput.tsx
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Button from "@/components/BBL_Test/Button";

type AddTodoInputProps = {
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: () => void;
};

const AddTodoInput: React.FC<AddTodoInputProps> = ({
  newTodo,
  setNewTodo,
  handleAddTodo,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add new to-do..."
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginRight: 10,
    borderRadius: 4,
  },
});

export default AddTodoInput;
