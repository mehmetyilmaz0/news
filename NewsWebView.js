
import React from 'react';
import {SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';

const NewsWebView = () => {

    return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://github.com/mehmetyilmaz0' }} />
    </SafeAreaView>
  );
};


export default NewsWebView;