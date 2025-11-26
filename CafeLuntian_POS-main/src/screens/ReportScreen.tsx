import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import ReportHeader from '../components/ReportHeader.tsx';
import StatsCards from '../components/StatsCards.tsx';
import RecentOrder from '../components/RecentOrder.tsx';
import ProductPerformance from '../components/ProductPerformance.tsx';
import TopSellingTable from '../components/TopSellingTable.tsx';
import InventoryTable from '../components/InventoryTable.tsx';

const ReportScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stickyHeader}>
        <ReportHeader />
      </View>

      <ScrollView style={styles.scrollContent}>
        <View style={styles.rowContainer}>
          <View style={styles.leftSection}>
            <StatsCards />
          </View>
          <View style={styles.rightSection}>
            <ScrollView>
            <RecentOrder />
            </ScrollView>
           
          </View>
        </View>

        <Text style={styles.title}>Product Performance</Text>
        <View style={styles.rowContainer}>
          <View style={styles.leftSection}>
            <ProductPerformance />
          </View>
          <View style={styles.rightSection}>
            <TopSellingTable />
          </View>
        </View>

        <Text style={styles.title}>Inventory Management</Text>
        <InventoryTable />
      </ScrollView>
    </View>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFDF3',
  },

  stickyHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: '#FFFDF3', 
  },

  scrollContent: {
    marginTop: 80, 
  },

  rowContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20,
  },

  leftSection: {
    flex: 1,
    paddingRight: 10,
  },

  rightSection: {
    flex: 1,
    paddingLeft: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#13602A',
  },
});
