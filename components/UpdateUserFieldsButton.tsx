// components/UpdateUserFieldsButton.tsx
import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { updateUserFields } from '../services/api';

const UpdateUserFieldsButton: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleUpdateUserFields = () => {
    if (!id || !email) {
      console.warn('Please fill in all fields');
      return;
    }

    const fields = { email };
    updateUserFields(parseInt(id), fields);
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
      <TextInput
        style={styles.input}
        placeholder="New Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Update User Fields" onPress={handleUpdateUserFields} />
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

export default UpdateUserFieldsButton;
