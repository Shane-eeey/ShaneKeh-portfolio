import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const InventoryTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy data 
  const data = [
    { id: 'P001', name: 'Caramel Macchiato', category: 'Hot Drinks', price: '₱100', quantity: 20, status: 'Available' },
    { id: 'P002', name: 'Latte', category: 'Hot Drinks', price: '₱120', quantity: 0, status: 'Out of Stock' },
    { id: 'P003', name: 'Espresso', category: 'Hot Drinks', price: '₱90', quantity: 15, status: 'Available' },
    { id: 'P001', name: 'Caramel Macchiato', category: 'Hot Drinks', price: '₱100', quantity: 20, status: 'Available' },
    { id: 'P002', name: 'Latte', category: 'Hot Drinks', price: '₱120', quantity: 0, status: 'Out of Stock' },
    { id: 'P003', name: 'Espresso', category: 'Hot Drinks', price: '₱90', quantity: 15, status: 'Available' },
  ];

  // Filter
  const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.productTitle}>Products</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by Product Name"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.buttonText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Table Header */}
      <View style={styles.rowHeader}>
        <Text style={[styles.cell, styles.cellHeader]}>No</Text>
        <Text style={[styles.cell, styles.cellHeader]}>Product ID</Text>
        <Text style={[styles.cell, styles.cellHeader]}>Product Name</Text>
        <Text style={[styles.cell, styles.cellHeader]}>Price</Text>
        <Text style={[styles.cell, styles.cellHeader]}>Category</Text>
        <Text style={[styles.cell, styles.cellHeader]}>Items</Text>
        <Text style={[styles.cell, styles.cellHeader]}>Status</Text>
        <Text style={[styles.cell, styles.manageHeader]}>Manage</Text>
      </View>

      {/* Table Rows - Loop through filtered data */}
      {filteredData.map((item, i) => (
        <View key={i} style={[styles.row, i % 2 === 0 ? styles.evenRow : styles.oddRow]}>
          <Text style={styles.cell}>{i + 1}</Text>
          <Text style={styles.cell}>{item.id}</Text>
          <Text style={styles.cell}>{item.name}</Text>
          <Text style={styles.cell}>{item.price}</Text>
          <Text style={styles.cell}>{item.category}</Text>
          <Text style={styles.cell}>{item.quantity}</Text>
          <Text style={[styles.cell, { color: item.status === 'Out of Stock' ? 'red' : 'green' }]}>
            {item.status}
          </Text>

          {/* Manage Buttons */}
          <View style={styles.manageButtons}>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default InventoryTable;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#13602A',
    padding: 16,
    borderRadius: 8,
    marginBottom: 32,
    marginTop: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#13602A',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    fontSize: 14,
    width: 200,
  },

  filterButton: {
    backgroundColor: '#13602A',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
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
    alignItems: 'center',
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
    textAlign: 'center',
  },

  manageHeader: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#13602A',
    textAlign: 'left',
    marginLeft: 23,
  },

  cell: {
    width: '13%', 
    textAlign: 'center',
    fontSize: 12,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  manageButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1, 
    paddingHorizontal: 8,
  },

  editButton: {
    backgroundColor: '#13602A',
    padding: 6,
    borderRadius: 5,
    marginRight: 4,
  },

  deleteButton: {
    backgroundColor: '#FF6347',
    padding: 6,
    borderRadius: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
});

