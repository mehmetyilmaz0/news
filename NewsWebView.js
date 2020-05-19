
import React from 'react';
import {SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';

const NewsWebView = ({navigation}) => {

  const url = navigation.state.params && navigation.state.params.url;
  const title = navigation.state.params && navigation.state.params.title;

    return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: url }} />
    </SafeAreaView>
  );

};


  NewsWebView.navigationOptions = ({navigation}) => ({
    title: navigation.state.params && navigation.state.params.title
  });

export default NewsWebView;