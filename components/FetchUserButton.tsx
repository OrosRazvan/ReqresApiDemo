// components/FetchUserButton.tsx
import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { fetchUserById } from '../services/api';

const FetchUserButton: React.FC = () => {
  const [userId, setUserId] = useState<string>('');

  const handleFetchUser = () => {
    const id = parseInt(userId);
    if (isNaN(id)) {
      console.warn('Please enter a valid user ID');
    } else {
      fetchUserById(id);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter User ID"
        value={userId}
        onChangeText={setUserId}
        keyboardType="numeric"
      />
      <Button title="Fetch User" onPress={handleFetchUser} />
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

export default FetchUserButton;
