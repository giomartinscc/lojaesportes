import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { style } from "./styles";

const { width } = Dimensions.get('window');

const images = [
  require('../../assets/banner_saka.png'),
  require('../../assets/banner_fabio.png'),
  require('../../assets/banner_messi.png'),
];

const smallImageLeft = require('../../assets/logo.png');

const extraImageLeft = require('../../assets/odegaard.png');
const extraImageRight = require('../../assets/vini.png');
const extraImageLeftBottom = require('../../assets/leao.png');
const extraImageRightBottom = require('../../assets/musi.png');
const extraImageLeftBottom2 = require('../../assets/dembele.png');
const extraImageRightBottom2 = require('../../assets/mp.png');
const extraImageLeftBottom3 = require('../../assets/neymar.png');
const extraImageRightBottom3 = require('../../assets/thaisa.png');

type Props = {
  navigation: StackNavigationProp<any>;
};

const Tela_Inicial: React.FC<Props> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: currentIndex * width, animated: true });
    }
  }, [currentIndex]);

  return (
    <ScrollView style={style.container}>
      <View style={style.boxTop}>
        <Image source={smallImageLeft} style={styles.smallImageLeft} />
      </View>
      <View style={style.boxMid}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
        >
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.image} />
          ))}
        </ScrollView>

        <View style={styles.indicators}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[styles.indicator, currentIndex === index ? styles.activeIndicator : styles.inactiveIndicator]}
            />
          ))}
        </View>
      </View>

      <View style={style.boxExtra}>
        <View style={styles.extraImagesContainer}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Tela_Camisas', { filter: 'arsenal-liverpool' });
          }}>
            <Image source={extraImageLeft} style={styles.extraImage} />
            <Text style={styles.imageText}>Premier League</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            navigation.navigate('Tela_Camisas', { filter: 'real-barcelona' });
          }}>
            <Image source={extraImageRight} style={styles.extraImage} />
            <Text style={styles.imageText}>La Liga</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.extraImagesContainer}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Tela_Camisas', { filter: 'milan-inter' });
          }}>
            <Image source={extraImageLeftBottom} style={styles.extraImage} />
            <Text style={styles.imageText}>Série A</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            navigation.navigate('Tela_Camisas', { filter: 'bayern-borussia' });
          }}>
            <Image source={extraImageRightBottom} style={styles.extraImage} />
            <Text style={styles.imageText}>Bundesliga</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.extraImagesContainer}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Tela_Camisas', { filter: 'psg-om' });
          }}>
            <Image source={extraImageLeftBottom2} style={styles.extraImage} />
            <Text style={styles.imageText}>Ligue 1</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            navigation.navigate('Tela_Camisas', { filter: 'cruzeiro-flamengo' });
          }}>
            <Image source={extraImageRightBottom2} style={styles.extraImage} />
            <Text style={styles.imageText}>Brasileirão</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.extraImagesContainer}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Tela_Camisas', { filter: 'brasil-argentina' });
          }}>
            <Image source={extraImageLeftBottom3} style={styles.extraImage} />
            <Text style={styles.imageText}>Seleções</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            navigation.navigate('Tela_Camisas', { filter: 'minas-brasilvolei' });
          }}>
            <Image source={extraImageRightBottom3} style={styles.extraImage} />
            <Text style={styles.imageText}>Vôlei</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{ flex: 1 }}></View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tela_Camisas', { filter: 'all' })}
        >
          <Text style={styles.buttonText}>VER TODAS AS CAMISAS</Text>
        </TouchableOpacity>
      </View>

      <View style={style.boxBottom}>
        <Text style={styles.boxText}>SOBRE NOSSA LOJA</Text>
        <Text style={styles.boxText}>Para garantir a confiança da nossa loja, Ponto do Atleta, focamos em oferecer produtos de qualidade e transparência nas informações.</Text>
        <Text style={styles.boxText}>ATENDIMENTO AO CLIENTE</Text>
        <Text style={styles.boxText}>E-mail: pontodoatleta@gmail.com</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carousel: {
    width: '100%',
    height: 200,
  },
  image: {
    width: width,
    height: '100%',
    resizeMode: 'contain',
  },
  smallImageLeft: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 110,
    height: 40,
  },
  extraImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  extraImage: {
    width: 100,
    height: 100,
  },
  imageWrapper: {
    alignItems: 'center',
  },
  imageText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  boxText: {
    fontSize: 14,
    marginVertical: 10,
    marginHorizontal: 20,
    color: '#B8860B',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#B8860B',
    padding: 10,
    alignItems: 'center',
    marginBottom: 25,
    borderRadius: 25,
    marginHorizontal: 30,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  indicators: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: 'lightgray',
  },
  activeIndicator: {
    backgroundColor: 'black',
  },
  inactiveIndicator: {
    backgroundColor: 'lightgray',
  },
});

export default Tela_Inicial;