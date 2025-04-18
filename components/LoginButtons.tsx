// components/LoginButtons.tsx
import React from 'react';
import { View, Button } from 'react-native';
import { loginUser } from '../services/api';

const LoginButtons: React.FC = () => {
  const userNoPass = {
    email: 'eve.holt@reqres.in',
  };

  const userOk = {
    email: 'emma.wong@reqres.in',
    password: '1234',
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Button title="Login fără parolă" onPress={() => loginUser(userNoPass)} />
      <View style={{ height: 10 }} />
      <Button title="Login cu parolă" onPress={() => loginUser(userOk)} />
    </View>
  );
};

export default LoginButtons;
