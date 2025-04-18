// components/DeleteUserButton.tsx
import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { deleteUser } from '../services/api';

const DeleteUserButton: React.FC = () => {
  const [id, setId] = useState<string>('');

  const handleDeleteUser = () => {
    if (!id) {
      console.warn('Please provide a user ID');
      return;
    }

    deleteUser(parseInt(id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="User ID"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />
      <Button title="Delete User" onPress={handleDeleteUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingLeft: 10,
    marginBottom: 10,
  },
});

export default DeleteUserButton;
