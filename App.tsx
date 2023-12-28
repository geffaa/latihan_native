import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { tw } from 'react-native-tailwindcss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    if (email === '' || password === '') {
      setErrorMessage('Username and password cannot be empty');
    } else {
      console.log(`Username: ${email}, Password: ${password}`);
      setErrorMessage('');
    }
  };

  return (
    <View style={[tw.flex1, tw.bgGray100, tw.p5]}>
      <View style={[tw.flex1, tw.itemsCenter]}>
        <Image
          style={{ width: 250, height: 250 }}
          source={require('./assets/finnovate_logo_white.png')}
        />
      </View>
      <View style={[tw.flex1, tw.justifyCenter, tw.itemsCenter]}>
        {errorMessage ? <Text style={{ color: 'red', textAlign: 'center', marginBottom: 16 }}>{errorMessage}</Text> : null}
        <TextInput
          style={[tw.border, tw.borderGray500, tw.mB4, tw.pX4, tw.p3, { width: 330, height: 44, borderRadius: 5, fontFamily: 'Inter-Regular' }]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[tw.border, tw.borderGray500, tw.mB4, tw.pX4, tw.p3, { width: 330, height: 44, borderRadius: 5, fontFamily: 'Inter-Regular' }]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity 
          onPress={handleLogin} 
          style={[tw.justifyCenter, tw.itemsCenter, tw.shadowMd, { backgroundColor: '#2D3648', width: 330, height: 54, borderRadius: 30 }]}
        >
          <Text style={[tw.textWhite, { fontFamily: 'Inter-SemiBold', fontSize: 14 }]}>Sign in</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
            <Text style={{ color: 'black' }}>Forgot Password? </Text>
          <TouchableOpacity onPress={() => console.log('Register')}>
            <Text style={{ color: 'black' }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
  );
};

export default Login;