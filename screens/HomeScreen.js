import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CategoryList from '../components/CategoryList';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [tasks, setTasks] = useState({
    mercado: ['Comprar leite', 'Comprar pão'],
    farmacia: ['Comprar remédio'],
    estudos: ['Estudar matemática', 'Ler livro'],
  });

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleAddTask = (task) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [selectedCategory]: [...prevTasks[selectedCategory], task],
    }));
  };

  const handleRemoveTask = (index) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks[selectedCategory]];
      newTasks.splice(index, 1);
      return {
        ...prevTasks,
        [selectedCategory]: newTasks,
      };
    });
  };

  return (
    <ScrollView style={styles.container}>
      <CategoryList
        categories={['mercado', 'farmacia', 'estudos']}
        onSelectCategory={handleSelectCategory}
      />
      {selectedCategory && (
        <>
          <TaskForm onAddTask={handleAddTask} />
          <TaskList tasks={tasks[selectedCategory]} onRemoveTask={handleRemoveTask} />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default HomeScreen;
