import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.replace('IPOList & Currency Rates');
  };

  return (
    <View style={[styles.card, styles.shadowProp]}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Username" onChangeText={text => setUsername(text)} value={username}
      />
      <TextInput style={styles.input} placeholder="Password" onChangeText={text => setPassword(text)} value={password}
        secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  title: {
    fontSize: windowWidth * 0.1,
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.05,
    color: 'navy',
  },
  input: {
    width: '100%',
    height: windowHeight * 0.06,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: windowHeight * 0.02,
    paddingHorizontal: windowWidth * 0.03,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default LoginScreen;