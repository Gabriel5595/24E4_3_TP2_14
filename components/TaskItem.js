import React from 'react';
import { View, Text, Button } from 'react-native';

const TaskItem = ({ task, onRemoveTask }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f8f9fa',
        marginBottom: 10,
        borderRadius: 4,
      }}
    >
      <Text>{task}</Text>
      <Button title="Remover" onPress={onRemoveTask} color="#dc3545" />
    </View>
  );
};

export default TaskItem;
