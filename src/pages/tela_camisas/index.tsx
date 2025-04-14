import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { style } from "./styles";

const allCardImages = [
  require('../../assets/camisa_arsenal.png'),
  require('../../assets/camisa_liverpool.png'),
  require('../../assets/camisa_real.png'),
  require('../../assets/camisa_barcelona.png'),
  require('../../assets/camisa_milan.png'),
  require('../../assets/camisa_inter.png'),
  require('../../assets/camisa_bayern.png'),
  require('../../assets/camisa_borussia.png'),
  require('../../assets/camisa_psg.png'),
  require('../../assets/camisa_om.png'),
  require('../../assets/camisa_cruzeiro.png'),
  require('../../assets/camisa_flamengo.png'),
  require('../../assets/camisa_brasil.png'),
  require('../../assets/camisa_argentina.png'),
  require('../../assets/camisa_minas.png'),
  require('../../assets/camisa_brasilvolei.png'),
  require('../../assets/camisa_messi.png'),
  require('../../assets/camisa_retro.png'),
];

const allCardTexts = [
  { title: 'Arsenal 2024/25', price: 'R$289,99' },
  { title: 'Liverpool 2024/25', price: 'R$289,99' },
  { title: 'Real Madrid 2024/25', price: 'R$289,99' },
  { title: 'Barcelona 2024/25', price: 'R$289,99' },
  { title: 'Milan 2024/25', price: 'R$289,99' },
  { title: 'Inter Milan 2024/25', price: 'R$289,99' },
  { title: 'Bayern 2024/25', price: 'R$289,99' },
  { title: 'BVB 2024/25', price: 'R$289,99' },
  { title: 'PSG 2024/25', price: 'R$289,99' },
  { title: 'OM 2024/25', price: 'R$289,99' },
  { title: 'Cruzeiro 2024', price: 'R$289,99' },
  { title: 'Flamengo 2024', price: 'R$289,99' },
  { title: 'Brasil 2024', price: 'R$289,99' },
  { title: 'Argentina 2024', price: 'R$289,99' },
  { title: 'Minas 2023/24', price: 'R$289,99' },
  { title: 'CBV Paris 2024', price: 'R$289,99' },
  { title: 'Inter Miami 2024/25', price: 'R$289,99' },
  { title: 'Cruzeiro Retrô', price: 'R$289,99' },
];

type Props = {
  route: any;
  navigation: StackNavigationProp<any>;
};

const Tela_Camisas: React.FC<Props> = ({ route, navigation }) => {
  const { filter } = route.params;

  let filteredCardImages = allCardImages;
  let filteredCardTexts = allCardTexts;

  if (filter === 'arsenal-liverpool') {
    filteredCardImages = allCardImages.filter((_, index) => index === 0 || index === 1);
    filteredCardTexts = allCardTexts.filter((_, index) => index === 0 || index === 1);
  }
  if (filter === 'real-barcelona') {
    filteredCardImages = allCardImages.filter((_, index) => index === 2 || index === 3);
    filteredCardTexts = allCardTexts.filter((_, index) => index === 2 || index === 3);
  }
  if (filter === 'milan-inter') {
    filteredCardImages = allCardImages.filter((_, index) => index === 4 || index === 5);
    filteredCardTexts = allCardTexts.filter((_, index) => index === 4 || index === 5);
  }
  if (filter === 'bayern-borussia') {
    filteredCardImages = allCardImages.filter((_, index) => index === 6 || index === 7);
    filteredCardTexts = allCardTexts.filter((_, index) => index === 6 || index === 7);
  }
  if (filter === 'psg-om') {
    filteredCardImages = allCardImages.filter((_, index) => index === 8 || index === 9);
    filteredCardTexts = allCardTexts.filter((_, index) => index === 8 || index === 9);
  }
  if (filter === 'cruzeiro-flamengo') {
    filteredCardImages = allCardImages.filter((_, index) => index === 10 || index === 11);
    filteredCardTexts = allCardTexts.filter((_, index) => index === 10 || index === 11);
  }
  if (filter === 'brasil-argentina') {
    filteredCardImages = allCardImages.filter((_, index) => index === 12 || index === 13);
    filteredCardTexts = allCardTexts.filter((_, index) => index === 12 || index === 13);
  }
  if (filter === 'minas-brasilvolei') {
    filteredCardImages = allCardImages.filter((_, index) => index === 14 || index === 15);
    filteredCardTexts = allCardTexts.filter((_, index) => index === 14 || index === 15);
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const openModal = (image: any, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setSelectedSize(null);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.boxTop}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/logo.png')} style={styles.smallImageLeft} />
        </TouchableOpacity>
      </View>
      <View style={style.boxMid}>
        <View style={styles.cardContainer}>
          {filteredCardImages.map((image, index) => (
            <View key={index} style={styles.card}>
              <TouchableOpacity onPress={() => openModal(image, filteredCardTexts[index].title)}>
                <Image source={image} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{filteredCardTexts[index].title}</Text>
                <Text style={styles.cardPrice}>{filteredCardTexts[index].price}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      <View style={style.boxBottom}>
        <Text style={styles.boxText}>SOBRE NOSSA LOJA</Text>
        <Text style={styles.boxText}>Para garantir a confiança da nossa loja, Ponto do Atleta, focamos em oferecer produtos de qualidade e transparência nas informações.</Text>
        <Text style={styles.boxText}>ATENDIMENTO AO CLIENTE</Text>
        <Text style={styles.boxText}>E-mail: pontodoatleta@gmail.com</Text>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Image source={selectedImage} style={styles.modalImage} />
            <Text style={styles.modalTitle}>{selectedTitle}</Text>
            <Text style={styles.modalText}>Escolha o tamanho:</Text>
            <View style={styles.sizeOptions}>
              {['P', 'M', 'G', 'GG'].map((size) => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.sizeButton,
                    selectedSize === size && styles.sizeButtonSelected,
                  ]}
                  onPress={() => handleSizeSelect(size)}
                >
                  <Text style={styles.sizeButtonText}>{size}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => {
                navigation.navigate('Tela_Login', {
                  cardTitle: selectedTitle,
                  cardImage: selectedImage,
                  size: selectedSize,
                });
              }}
            >
              <Text style={styles.buyButtonText}>COMPRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.modalText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#B8860B',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    width: '40%',
    height: 200,
    marginBottom: 10,
    margin: 20,
  },
  cardImage: {
    width: 140,
    height: 140,
    marginBottom: 5,
  },
  cardTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardPrice: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  boxText: {
    fontSize: 14,
    marginVertical: 10,
    marginHorizontal: 20,
    color: '#B8860B',
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  modalImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  sizeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sizeButton: {
    backgroundColor: '#B8860B',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  sizeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sizeButtonSelected: {
    backgroundColor: '#28a745',
  },
  buyButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Tela_Camisas;