import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, Alert, Linking, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { style } from "./styles";

const smallImageLeft = require('../../assets/logo.png');

type Props = {
  route: any;
  navigation: StackNavigationProp<any>;
};

const Tela_Login: React.FC<Props> = ({ route, navigation }) => {
  const { cardTitle, cardImage, size } = route.params;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost/banco_projeto/index.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}&senha=${encodeURIComponent(password)}`,
      });

      const data = await response.json();

      if (data.status === 'success') {
        Linking.openURL('http://biolivre.com.br/pontodoatleta');
      } else {
        Alert.alert('Erro', data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Falha ao conectar com o servidor.');
    }
  };

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost/banco_projeto/cadastrar.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}&senha=${encodeURIComponent(password)}`,
      });

      const data = await response.json();

      if (data.status === 'success') {
        Linking.openURL('http://biolivre.com.br/pontodoatleta');
      } else {
        Alert.alert('Erro', data.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Falha ao conectar com o servidor.');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={style.container}>
        {/* Box Top */}
        <View style={style.boxTop}>
          <TouchableOpacity onPress={() => navigation.navigate('Tela_Inicial')}>
            <Image source={smallImageLeft} style={styles.smallImageLeft} />
          </TouchableOpacity>
        </View>

        <View style={style.boxMid}>
          <View style={styles.infoContainer}>
            <Text style={styles.text}>Você selecionou a camisa: {cardTitle}</Text>
            <Text style={styles.text}>Tamanho: {size}</Text>
            <View style={styles.cardContainer}>
              <Image source={cardImage} style={styles.cardImage} />
            </View>
          </View>

          <View style={styles.loginContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Entrar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerButtonText}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={style.boxBottom}>
          <Text style={styles.boxText}>SOBRE NOSSA LOJA</Text>
          <Text style={styles.boxText}>
            Para garantir a confiança da nossa loja, Ponto do Atleta, focamos em oferecer produtos de qualidade e transparência nas informações.
          </Text>
          <Text style={styles.boxText}>ATENDIMENTO AO CLIENTE</Text>
          <Text style={styles.boxText}>E-mail: pontodoatleta@gmail.com</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  smallImageLeft: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 110,
    height: 40,
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  boxText: {
    fontSize: 14,
    marginVertical: 10,
    marginHorizontal: 20,
    color: '#B8860B',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: '#B8860B',
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    width: 170,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  loginContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 30,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  loginButton: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#B8860B',
    paddingVertical: 15,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Tela_Login;