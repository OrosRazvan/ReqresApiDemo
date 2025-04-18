// components/UpdateUserButton.tsx
import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { updateUser } from '../services/api';

const UpdateUserButton: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [job, setJob] = useState<string>('');

  const handleUpdateUser = () => {
    if (!id || !name || !email || !password || !job) {
      console.warn('Please fill in all fields');
      return;
    }

    const user = { id: parseInt(id), name, email, password, job };
    updateUser(user);
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
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Job"
        value={job}
        onChangeText={setJob}
      />
      <Button title="Update User" onPress={handleUpdateUser} />
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

export default UpdateUserButton;
