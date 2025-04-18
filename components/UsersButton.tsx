// components/UsersButton.tsx
import React from 'react';
import { View, Button } from 'react-native';
import { fetchUsers } from '../services/api';

const UsersButton: React.FC = () => {
  const page = 1;
  const per_page = 10;

  return (
    <View>
      <Button title="Afișează utilizatori (pag. 1)" onPress={() => fetchUsers(page, per_page)} />
    </View>
  );
};

export default UsersButton;
