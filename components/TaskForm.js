import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: '#ccc',
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 10,
        }}
        placeholder="Nova Tarefa"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Adicionar Tarefa" onPress={handleSubmit} />
    </View>
  );
};

export default TaskForm;
