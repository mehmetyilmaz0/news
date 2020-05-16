/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, ImageBackground, TouchableHighlight, Alert} from 'react-native';

const App: () => React$Node = () => {

  const imageBaseUrl = 'https://images.unsplash.com/photo-';
  const imageId = '';
  const imageParameters = '?auto=format&fit=crop&w=375&q=80';

  const dataCategory = [
    { category: 'Dunya', imageId: '1531266752426-aad472b7bbf4'},
    { category: 'Egitim', imageId: '1523050854058-8df90110c9f1'},
    { category: 'Ekonomi', imageId: '1518458028785-8fbcd101ebb9'},
    { category: 'Kultur-Sanat', imageId: '1513364776144-60967b0f800f'},
    { category: 'Seyahat', imageId: '1469854523086-cc02fe5d8800'},
    { category: 'Teknoloji', imageId: '1518770660439-4636190af475'},
    { category: 'Saglik', imageId: '1532938911079-1b06ac7ceec7'},
    { category: 'Hava-Yol', imageId: '1531324442324-909f6c0394e4'},
    { category: 'Magazin', imageId: '1516179257071-71a54dbb4853'},
    { category: 'Otomobil', imageId: '1549064233-e0345fce1f19'},
    { category: 'Yemek', imageId: '1482049016688-2d3e1b311543'},
    { category: 'Astroloji', imageId: '1533294455009-a77b7557d2d1'},
    { category: 'Tatil', imageId: '1487349384428-12b47aca925e'},

  ];

  renderItem = ({ item }) => {
    return (
      <TouchableHighlight onPress={() => {Alert.alert(item.category)}}>
        <ImageBackground
          source={{uri: imageBaseUrl + item.imageId + imageParameters}}
          style={{
            width: '100%', 
            height: 100, 
            justifyContent: 'center'}} 
        > 
          <Text style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold'}}> {item.category} </Text>
        </ImageBackground>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView>
      
      <FlatList 
        data={dataCategory}
        renderItem={this.renderItem} 
        keyExtractor={ (item) => item.category } > 
      </FlatList>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bodyView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

});

export default App;
