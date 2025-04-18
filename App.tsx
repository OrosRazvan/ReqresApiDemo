import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import UpdateUserButton from './components/UpdateUserButton';
import UpdateUserFieldsButton from './components/UpdateUserFieldsButton';
import DeleteUserButton from './components/DeleteUserButton';  // Importăm noua componentă

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Reqres API Demo</Text>  {/* Folosește Text pentru text */}
      <UpdateUserButton />
      <UpdateUserFieldsButton />
      <DeleteUserButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
});
