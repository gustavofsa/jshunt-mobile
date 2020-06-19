import React from 'react';
import { WebView } from 'react-native-webview'

const Product = ({ route }) => (
  <WebView source={{ uri: route.params.url }} />
);

export default Product;