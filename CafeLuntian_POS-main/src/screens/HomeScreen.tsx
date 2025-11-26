import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar.tsx';
import SearchBar from '../components/SearchBar.tsx';
import ItemStatus from '../components/ItemStatus.tsx';
import ProductList from '../components/ProductList.tsx';
import OrderSummary from '../components/OrderSummary.tsx';
import { Product } from '../components/ProductList.tsx'; // Import the Product type

const HomeScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('HotDrinks');
  const [orderList, setOrderList] = useState<{ item: string; price: number; category: string; quantity: number; }[]>([]);

  // Update the addItemToOrder function to match the expected signature
  const addItemToOrder = (product: Product, quantity: number) => {
    setOrderList((prevList) => [
      ...prevList,
      { item: product.name, price: product.price, category: product.category, quantity }, 
    ]);
  };

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.mainContent}>
        <View style={styles.leftSection}>
          <SearchBar />
          <ItemStatus setSelectedCategory={setSelectedCategory} />
          <View style={styles.productListContainer}>
            <ProductList selectedCategory={selectedCategory} onAddToOrder={addItemToOrder} />
          </View>
        </View>

        <View style={styles.rightSection}>
           <OrderSummary orderList={orderList} setOrderList={setOrderList} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF3',
    padding: 10,
  },

  mainContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },

  leftSection: {
    flex: 1,
    paddingRight: 15,
  },

  productListContainer: {
    flex: 1, 
    marginTop: 10,
  },

  rightSection: {
    flex: 1,
    paddingLeft: 10,
  },
});

export default HomeScreen;
