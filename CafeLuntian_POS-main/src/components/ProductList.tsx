import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export type Product = {
  id: number;
  name: string;
  price: number;
  image: any;
  category: string;
};

type Props = {
  selectedCategory: string;
  onAddToOrder: (product: Product, quantity: number) => void; 
};


const productData: Record<string, Product[]> = {
  'Hot Coffee': [
    { id: 1, name: 'Caramel Machiatto', price: 99, image: require('../img/cappuccino.png'), category: 'Hot Coffee' },
    { id: 2, name: 'Mocha', price: 99, image: require('../img/cappuccino.png'), category: 'Hot Coffee' },
    { id: 3, name: 'Spanish Latte', price: 99, image: require('../img/cappuccino.png'), category: 'Hot Coffee' },
    { id: 4, name: 'Salted Caramel', price: 99, image: require('../img/cappuccino.png'), category: 'Hot Coffee' },
    { id: 5, name: 'Americano', price: 99, image: require('../img/cappuccino.png'), category: 'Hot Coffee' },
    { id: 6, name: 'Cafe Latte', price: 99, image: require('../img/cappuccino.png'), category: 'Hot Coffee' },
  ],
  'Hot Non-Coffee': [
    { id: 7, name: 'Caramel', price: 99, image: require('../img/cappuccino.png'), category: 'Hot Non-Coffee' },
    { id: 8, name: 'Chocolate', price: 99, image: require('../img/cappuccino.png'), category: 'Hot Non-Coffee' },
    { id: 9, name: 'Hazel Nut', price: 99, image: require('../img/cappuccino.png'), category: 'Hot Non-Coffee' },
    { id: 10, name: 'Salted Caramel', price: 99, image: require('../img/cappuccino.png'), category: 'Hot Non-Coffee' },
  ],
  'Iced Coffee': [
    { id: 11, name: 'Caramel Machiatto', price: 129, image: require('../img/cappuccino.png'), category: 'Iced Coffee' },
    { id: 12, name: 'Mocha', price: 129, image: require('../img/cappuccino.png'), category: 'Iced Coffee' },
    { id: 13, name: 'Spanish Latte', price: 129, image: require('../img/cappuccino.png'), category: 'Iced Coffee' },
    { id: 14, name: 'Salted Caramel', price: 129, image: require('../img/cappuccino.png'), category: 'Iced Coffee' },
    { id: 15, name: 'Americano', price: 129, image: require('../img/cappuccino.png'), category: 'Iced Coffee' },
  ],
  'Iced Non-Coffee': [
    { id: 16, name: 'Caramel', price: 129, image: require('../img/cappuccino.png'), category: 'Iced Non-Coffee' },
    { id: 17, name: 'Chocolate', price: 129, image: require('../img/cappuccino.png'), category: 'Iced Non-Coffee' },
    { id: 18, name: 'Hazel Nut', price: 129, image: require('../img/cappuccino.png'), category: 'Iced Non-Coffee' },
    { id: 19, name: 'Salted Caramel', price: 129, image: require('../img/cappuccino.png'), category: 'Iced Non-Coffee' },
  ],
  'Frappe': [
    { id: 20, name: 'Dark Chocolate', price: 149, image: require('../img/cappuccino.png'), category: 'Frappe' },
    { id: 21, name: 'Salted Caramel', price: 149, image: require('../img/cappuccino.png'), category: 'Frappe' },
    { id: 22, name: 'Java Chip', price: 149, image: require('../img/cappuccino.png'), category: 'Frappe' },
  ],
};

const ProductList: React.FC<Props> = ({ selectedCategory, onAddToOrder}) => {
  const products = productData[selectedCategory] || [];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.productGrid}>
        {products.map((product) => (
          <View key={product.id} style={styles.productBox}>
            <Image source={product.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <View style={styles.textContainer}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>₱{product.price}.00</Text>
              </View>
              <TouchableOpacity style={styles.addButton} onPress={() => onAddToOrder(product, 1)}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '120%',
  },

  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginLeft: 35,
  },

  productBox: {
    width: '24%',
    marginBottom: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 8,
    borderWidth: 1.2,
    borderColor: '#13602A',
    position: 'relative',
  },

  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },

  productDetails: {
    padding: 10,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center', 
  },

  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#13602A',
  },

  productPrice: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },

  addButton: {
    backgroundColor: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 11,
    borderRadius: 25,
    borderWidth: 1.2,
    borderColor: '#13602A',
    alignSelf: 'center', 
  },

  addButtonText: {
    color: '#13602A',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ProductList;
