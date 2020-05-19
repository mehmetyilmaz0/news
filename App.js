/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, ImageBackground, TouchableHighlight, Alert} from 'react-native';



const App = ({ navigation }) => {

  const imageBaseUrl = 'https://images.unsplash.com/photo-';
  const imageId = '';
  const imageParameters = '?auto=format&fit=crop&w=375&q=80';

  const dataCategory = [
    { category: 'world', imageId: '1531266752426-aad472b7bbf4'},
    { category: 'sport', imageId: '1521412644187-c49fa049e84d'},
    { category: 'education', imageId: '1523050854058-8df90110c9f1'},
    { category: 'economy', imageId: '1518458028785-8fbcd101ebb9'},
    { category: 'art', imageId: '1513364776144-60967b0f800f'},
    { category: 'travel', imageId: '1469854523086-cc02fe5d8800'},
    { category: 'technology', imageId: '1518770660439-4636190af475'},
    { category: 'health', imageId: '1532938911079-1b06ac7ceec7'},
    { category: 'air', imageId: '1531324442324-909f6c0394e4'},
    { category: 'magazine', imageId: '1516179257071-71a54dbb4853'},
    { category: 'car', imageId: '1549064233-e0345fce1f19'},
    { category: 'food', imageId: '1482049016688-2d3e1b311543'},
    { category: 'astrology', imageId: '1533294455009-a77b7557d2d1'},
    { category: 'holiday', imageId: '1487349384428-12b47aca925e'},

  ];

  renderItem = ({ item }) => {
    return (
      <TouchableHighlight onPress={() => navigation.navigate('Headlines', { category: item.category })}>
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

App.navigationOptions = ({navigation}) => ({
  title : 'Haber Kategorileri',
  headerStyle : {
    backgroundColor : '#2471A3'
  },
  headerTintColor : '#fff'
});

const styles = StyleSheet.create({
  bodyView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

});

export default App;
