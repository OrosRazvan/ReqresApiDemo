// components/CreateUserButton.tsx
import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { createUser } from '../services/api';

const CreateUserButton: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [job, setJob] = useState<string>('');

  const handleCreateUser = () => {
    if (!name || !email || !password || !job) {
      console.warn('Please fill in all fields');
      return;
    }

    const user = { name, email, password, job };
    createUser(user);
  };

  return (
    <View style={styles.container}>
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
      <Button title="Create User" onPress={handleCreateUser} />
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

export default CreateUserButton;
