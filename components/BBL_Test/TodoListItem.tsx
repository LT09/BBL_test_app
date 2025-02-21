import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Button from "./Button";

type TodoItemProps = {
  id: string;
  title: string;
  onPress: () => void;
  onDelete: () => void;
};

const TodoListItem: React.FC<TodoItemProps> = ({
  id,
  title,
  onPress,
  onDelete,
}) => {
  return (
    <Pressable key={id} style={styles.todoContainer} onPress={onPress}>
      <Text style={styles.todoText}>{title}</Text>
      <Button title="Delete" onPress={onDelete} isDelete={true} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  todoText: {
    fontSize: 16,
    fontWeight: "medium",
    color: "#000",
  },
});

export default React.memo(TodoListItem);
