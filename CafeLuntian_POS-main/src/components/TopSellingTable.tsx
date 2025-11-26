import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TopSellingTable = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Selling Today</Text>
      <View style={styles.rowHeader}>
        <Text style={[styles.cell, styles.cellHeader]}>ID</Text>
        <Text style={[styles.cell, styles.cellHeader]}>Product</Text>
        <Text style={[styles.cell, styles.cellHeader]}>Sold</Text>
        <Text style={[styles.cell, styles.cellHeader]}>Revenue</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {[1, 2, 3, 4, 5].map((_, i) => (  
          <View key={i} style={[styles.row, i % 2 === 0 ? styles.evenRow : styles.oddRow]}>
            <Text style={styles.cell}>000{i + 1}</Text>
            <Text style={styles.cell}>Caramel Machiatto</Text>
            <Text style={styles.cell}>{i === 0 ? '10' : '50'}</Text>
            <Text style={styles.cell}>{i === 0 ? '₱990.00' : '₱4950.00'}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TopSellingTable;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#13602A',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    height: 210, 
  },
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#13602A',
    marginBottom: 10,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 6,
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  evenRow: {
    backgroundColor: '#fafafa', 
  },
  oddRow: {
    backgroundColor: '#ffffff', 
  },
  cellHeader: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#13602A',
  },
  cell: {
    width: '24%',
    fontSize: 12,
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  scrollContainer: {
    maxHeight: 150, 
  },
});
