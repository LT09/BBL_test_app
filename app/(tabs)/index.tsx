import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { useCallback, useState } from "react";
import TodoListItem from "@/components/TodoListItem";
import AddTodoInput from "@/components/AddTodoInput";

type Todo = {
  id: string;
  title: string;
};

export default function HomeScreen() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Todo 1" },
    { id: "2", title: "Todo 2" },
    { id: "3", title: "Todo 3" },
    { id: "4", title: "Todo 4" },
  ]);

  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = useCallback(() => {
    if (newTodo.trim() !== "") {
      const newTodoItem: Todo = {
        id: Date.now().toString(),
        title: newTodo,
      };
      setTodos((prevTodos) => [...prevTodos, newTodoItem]);
      setNewTodo("");
    }
  }, [newTodo]);

  const handleDeleteTodo = useCallback((id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const renderItem = ({ item }: { item: { id: string; title: string } }) => {
    return (
      <TodoListItem
        id={item.id}
        title={item.title}
        onPress={() => {}}
        onDelete={() => handleDeleteTodo(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={styles.pageContainer}>
        <AddTodoInput
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          handleAddTodo={handleAddTodo}
        />

        <FlatList
          keyExtractor={(item) => item.id}
          data={todos}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 32,
    gap: 8,
  },
});
