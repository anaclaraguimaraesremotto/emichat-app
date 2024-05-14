import { Button, View } from "native-base";
import { useState } from "react";
import { TextInput } from "react-native";


const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        console.log('Email: ', email);
        console.log('Senha: ', senha);
    }


return (
    <View style={{backgroundColor: '#ff3300', flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput placeholder="email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={{ width: '80%', height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingHorizontal: 10 }}/>
        <TextInput placeholder="senha" 
        value={senha} 
        onChangeText={setSenha} secureTextEntry 
        style={{ width: '80%', height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingHorizontal: 10 }}/>
        {/* <Button title="Login" onPress={handleLogin}/> */}
    </View>
);}

export default Login;