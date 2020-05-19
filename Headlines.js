
import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View, Image, TouchableHighlight, Alert} from 'react-native';
import timerConverter from './TimerConverter';

const Headlines = ({ navigation }) => {

    const query = navigation.state.params && navigation.state.params.category;

    const API_KEY = '4710f424e374445e8f96a956ffac5e94'
    const country = 'tr';
    const apiUrl = `https://newsapi.org/v2/everything?language=${country}&q=${query}&apiKey=${API_KEY}`;

    const [headlines, setHeadlines] = useState({});

    useEffect ( () => {
       fetchData();
    }, []);

    async function fetchData() {
        (await fetch(apiUrl))
            .json()
            .then(res => setHeadlines(res));
    }

    renderItem = ({ item }) => {
        return (
          <TouchableHighlight onPress={() => {navigation.navigate('NewsWebView', {url: item.url, title: item.title} )}}>
            <View style={{ flex: 1, flexDirection: 'row', padding: 10, borderBottom: 1, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: (item.urlToImage == null) ? '' : item.urlToImage }} />
                <View style={{ flex: 1, paddingLeft: 10 }}>
                    <Text style={{ flexWrap: 'wrap' }}>{item.title}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <Text>{item.source.name}</Text>
                    <Text>{timerConverter(item.publishedAt)}</Text>
                    </View>
                </View>
            </View>
            </TouchableHighlight>
        );
    };

    return (
    <SafeAreaView>
      
      <FlatList
        data = {headlines.articles}
        renderItem = { this.renderItem}
        keyExtractor = { (item) => item.title}
      />
      
    </SafeAreaView>
  );
};

Headlines.navigationOptions = ({navigation}) => ({
  title: `${navigation.state.params && navigation.state.params.category} News`
});

const styles = StyleSheet.create({
  bodyView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

});

export default Headlines;