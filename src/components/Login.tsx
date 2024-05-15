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
     paddingTop: '40%',
     backgroundColor: '#ff3300', 
     flex: 1, 
     alignItems: 'center'}}>
        <Image style={{width: 200, height: 200}} source={require('../assets/emi-logo.png')} />
        <Text style={{color: '#ffffff', fontSize: 26, fontWeight: 'bold', padding: 10}}>Login</Text>
        <View style={{width: '80%'}}>
        <Text style={{paddingLeft: 10, paddingBottom: 8, color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>Email:</Text>
      <TextInput
      style={{width: '100%',
      backgroundColor: '#ffffff',
      marginBottom: 10,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      color: '#0000000',
      borderColor: '#ccc',
      borderRadius: 10
    }}
    placeholder="Email"
    value={email}
    onChangeText={setEmail}
    />
    <Text style={{paddingLeft: 10, paddingBottom: 8, color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>Senha: </Text>
      <TextInput
    style={{width: '100%',
    backgroundColor: '#ffffff',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    color: '#0000000',
    borderColor: '#ccc',
    borderRadius: 10
    }}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
        </View>
        
      {/* <Button title="Login" onPress={handleLogin} style={styles.button}/> */}
      <Button title="Login" onPress={handleLogin} />
      <Text style={{color: '#ffffff', fontSize: 16, padding: 10, textDecorationLine: 'underline'}}>Cadastre-se</Text>
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
