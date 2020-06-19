import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

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
  }, [])

  function renderProduct({ item }) {
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderProduct}
      />
    </View>
  );
}

export default Main;