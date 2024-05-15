import React,  { useState } from 'react';
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View} from 'react-native';

interface LoginProps {
  onSubmit: (email: string, password: string) => void;
}

interface ButtonProps {
    onPress: () => void;
    title: string;
  }

const Button: React.FC<ButtonProps> = ({ onPress, title }) => {
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onSubmit(email, password);
  };

  return (
    
    <View style={{width: '100%',
     height: '100%', 
     backgroundColor: '#ff3300', 
     justifyContent: 'center', 
     flex: 1, 
     alignItems: 'center'}}>
        <Image style={{width: '40%', height: '20%'}} source={require('../assets/emi-logo.png')} />
      <TextInput
      style={{width: '80%',
      marginBottom: 10,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      color: '#ffffff',
      borderColor: '#ccc',
      borderRadius: 5
      }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        />
      <TextInput
    style={{width: '80%',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    color: '#ffffff',
    borderColor: '#ccc',
    borderRadius: 5
    }}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {/* <Button title="Login" onPress={handleLogin} style={styles.button}/> */}
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}

  const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: '#ff5c33',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default Login;
