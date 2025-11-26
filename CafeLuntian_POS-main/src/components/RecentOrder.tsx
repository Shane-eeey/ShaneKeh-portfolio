import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const RecentOrder = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Orders</Text>
      <View style={styles.rowHeader}>
        <Text style={[styles.cell, styles.cellHeader]}>Order ID</Text>
        <Text style={[styles.cell, styles.cellHeader]}>Customer</Text>
        <Text style={[styles.cell, styles.cellHeader]}>Price</Text>
        <Text style={[styles.cell, styles.cellHeader]}>Date / Time</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <View key={i} style={[styles.row, i % 2 === 0 ? styles.evenRow : styles.oddRow]}>
            <Text style={styles.cell}>000{i + 1}</Text>
            <Text style={styles.cell}>Sirius Orion</Text>
            <Text style={styles.cell}>₱99.00</Text>
            <Text style={styles.cell}>Mar 30, 2025 - 9:00AM</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RecentOrder;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#13602A',
    marginBottom: 16,
    height: 213, 
  },

  title: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#13602A',
    marginBottom: 5,
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
    maxHeight: 270, 
  },
});
