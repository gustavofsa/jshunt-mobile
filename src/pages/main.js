import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import api from '../services/api';

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const { docs } = response.data;

      setProducts(docs);
    };

    loadProducts();

    console.log(products);
  }, [])



  return (
    <View>
      {products.map(product => (
        <View key={product.id}>
          <Text>{product.title}</Text>
          <Text>{product.description}</Text>
          <Text>{product.url}</Text>
        </View>
      ))}
    </View>
  );
}

export default Main;