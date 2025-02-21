import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import Header from "@/components/BBL_Test/Header";
import { useCallback, useState } from "react";
import TodoListItem from "@/components/BBL_Test/TodoListItem";
import AddTodoInput from "@/components/BBL_Test/AddTodoInput";

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

  const handleAddTodo = useCallback((title: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now().toString(), title },
    ]);
  }, []);

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
        <AddTodoInput onAddTodo={handleAddTodo} />

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
