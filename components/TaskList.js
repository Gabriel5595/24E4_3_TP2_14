import React from 'react';
import { View, Text, Button } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onRemoveTask }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Tarefas</Text>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onRemoveTask={() => onRemoveTask(index)}
        />
      ))}
    </View>
  );
};

export default TaskList;
