import React from 'react';
import { View, Button, Text } from 'react-native';

const CategoryList = ({ categories, onSelectCategory }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Categorias</Text>
      {categories.map((category) => (
        <Button
          key={category}
          title={category}
          onPress={() => onSelectCategory(category)}
        />
      ))}
    </View>
  );
};

export default CategoryList;
