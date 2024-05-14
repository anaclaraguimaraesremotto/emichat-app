import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './src/components/Login';

const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    // Aqui você pode implementar a lógica de autenticação
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Login onSubmit={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
