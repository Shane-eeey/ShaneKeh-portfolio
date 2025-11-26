import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatsCards = () => {
  const stats = [
    { title: 'Sales Today', value: '₱99.00' },
    { title: 'Total Sales', value: '₱1000.00' },
    { title: 'Orders Today', value: '20' },
    { title: 'Total Orders', value: '100' },
  ];

  return (
    <View style={styles.container}>
      {stats.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

export default StatsCards;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  card: {
    width: '49.4%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#13602A',
    padding: 16,
    borderRadius: 8,
    marginBottom: 5,
  },

  title: {
    fontWeight: 'bold',
    color: '#13602A',
    fontSize: 16,
  },

  value: {
    fontSize: 35,
    color: '#13602A',
    fontWeight: 'bold',
  },
});
