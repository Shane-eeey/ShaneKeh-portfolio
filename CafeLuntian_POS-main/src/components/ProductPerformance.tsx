import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const ProductPerformance = () => {
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'],
    datasets: [
      {
        data: [20, 45, 28, 80, 60],
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(19, 96, 42, ${opacity})`, 
    labelColor: (opacity = 1) => `rgba(18, 54, 28, ${opacity})`, 
    style: {
      borderRadius: 8,
    },
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: '#ccc',
      strokeDasharray: '0',
    },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Selling Product</Text>
      <BarChart
        data={data}
        width={screenWidth * 0.45}
        height={220}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        fromZero
        yAxisLabel=""       
        yAxisSuffix=""      
        style={styles.chart}
      />
    </View>
  );
};

export default ProductPerformance;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#13602A',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#13602A',
    textAlign: 'center',
  },

  chart: {
    marginTop: 10,
    borderRadius: 8,
  },
});
