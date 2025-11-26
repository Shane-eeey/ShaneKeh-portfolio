import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

type OrderItem = {
  item: string;
  price: number;
  category: string;
  quantity: number;
};

type OrderSummaryProps = {
  orderList: OrderItem[];
  setOrderList: React.Dispatch<React.SetStateAction<OrderItem[]>>;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ orderList, setOrderList }) => {
  const [customerName, setCustomerName] = useState('');
  const [isPWD, setIsPWD] = useState(false);
  const [isSenior, setIsSenior] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    totalAmount: 0,
    paidAmount: 0,
    balance: 0,
  });
  const [orderType, setOrderType] = useState('Dine In');

  useEffect(() => {
    const total = orderList.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountRate = (isPWD ? 0.2 : 0) + (isSenior ? 0.15 : 0);
    const discountedTotal = total * (1 - discountRate);

    setPaymentDetails((prev) => ({
      ...prev,
      totalAmount: discountedTotal,
      balance: discountedTotal,
    }));
  }, [orderList, isPWD, isSenior]);

  const handlePayment = () => {
    const balance = paymentDetails.totalAmount - paymentDetails.paidAmount;
    setPaymentDetails({ ...paymentDetails, balance });
  };

  const handleQuantityChange = (index: number, action: 'increase' | 'decrease') => {
    setOrderList((prevList) => {
      const newList = [...prevList];
      const updated = { ...newList[index] };

      if (action === 'increase') updated.quantity += 1;
      else if (action === 'decrease' && updated.quantity > 0) updated.quantity -= 1;

      if (updated.quantity === 0) newList.splice(index, 1);
      else newList[index] = updated;

      return newList;
    });
  };

  const discountAmount = orderList.reduce((sum, item) => sum + item.price * item.quantity, 0) - paymentDetails.totalAmount;

  return (
    <View style={styles.container}>
      <View style={styles.receiptContainer}>
        <Text style={styles.receiptTitle}>Purchase Receipt</Text>
        <Text style={styles.receiptNumber}>#12345</Text>
      </View>

      {/* Order Type */}
      <View style={styles.orderTypeContainer}>
        {['Dine In', 'Takeout', 'Delivery'].map((type) => (
          <TouchableOpacity
            key={type}
            style={[styles.orderTypeButton, orderType === type && styles.selectedOrderTypeButton]}
            onPress={() => setOrderType(type)}
          >
            <Text style={[styles.orderTypeText, orderType === type && styles.selectedOrderTypeText]}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Customer Name & Discount */}
      <View style={styles.customerDiscountContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.sectionTitle}>Customer Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Customer Name"
            value={customerName}
            onChangeText={setCustomerName}
          />
        </View>

        <View style={styles.discountContainer}>
          <Text style={styles.sectionTitle}>Discount</Text>
          <View style={styles.discountOptionsContainer}>
            <TouchableOpacity
              style={[styles.discountButton, isPWD && styles.selectedDiscountButton]}
              onPress={() => setIsPWD(!isPWD)}
            >
              <Text style={[styles.discountText, isPWD && styles.selectedDiscountText]}>PWD</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.discountButton, isSenior && styles.selectedDiscountButton]}
              onPress={() => setIsSenior(!isSenior)}
            >
              <Text style={[styles.discountText, isSenior && styles.selectedDiscountText]}>Senior</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Order List */}
      <Text style={styles.sectionTitle}>Order List:</Text>
      <ScrollView style={styles.orderListContainer}>
        {orderList.map((order, index) => (
          <View key={index} style={styles.orderItem}>
            <View style={styles.itemDetailsContainer}>
              <Text style={styles.itemDetails}>{order.item} ({order.category})</Text>
            </View>

            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => handleQuantityChange(index, 'decrease')} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{order.quantity}</Text>
              <TouchableOpacity onPress={() => handleQuantityChange(index, 'increase')} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>₱{(order.price * order.quantity).toLocaleString()}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Payment Details */}
      <View style={styles.paymentDetailsContainer}>
        <Text style={styles.paymentTitle}>Payment Details:</Text>

        <View style={styles.rowContainer}>
          <Text style={styles.leftText}>Subtotal:</Text>
          <Text style={styles.rightText}>
            ₱{orderList.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
          </Text>
        </View>

        <View style={[styles.rowContainer, styles.discountRow]}>
          <Text style={styles.leftText}>Discount:</Text>
          <Text style={styles.rightText}>₱{discountAmount.toFixed(2)}</Text>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.leftText}>Total:</Text>
          <Text style={styles.rightText}>₱{paymentDetails.totalAmount.toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.placeOrderButton} onPress={handlePayment}>
        <Text style={styles.buttonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1.2,
    borderColor: '#13602A',
    width: '77%',
    height: 545,
    marginLeft: 100,
  },

  receiptContainer: {
    marginBottom: 5,
  },

  receiptTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: '#13602A',
    textAlign: 'center',
  },

  receiptNumber: {
    fontWeight: 'bold',
    color: '#13602A',
    textAlign: 'center',
  },

  orderTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
    borderRadius: 30,
    borderWidth: 1.2,
    borderColor: '#13602A',
  },

  orderTypeButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
  },

  selectedOrderTypeButton: {
    backgroundColor: '#13602A',
    paddingHorizontal: 30,
  },

  selectedOrderTypeText: {
    color: '#fff',
  },

  orderTypeText: {
    color: '#13602A',
    fontSize: 15,
    fontWeight: 'bold',
  },

  customerDiscountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  inputContainer: {
    width: '60%',
  },

  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderRadius: 25,
    borderWidth: 1.2,
    borderColor: '#13602A',
    padding: 5,
    fontSize: 13,
  },

  discountContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  
  discountOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 5,
    marginLeft: 10,
  },
  
  discountButton: {
    paddingVertical: 5,
    paddingHorizontal: 13,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1.2,
    borderColor: '#13602A',
    alignItems: 'center',
  },
  
  selectedDiscountButton: {
    backgroundColor: '#13602A',
    borderColor: '#13602A', 
  },
  
  discountText: {
    color: '#13602A',
    fontSize: 14,
    fontWeight: 'bold',
  },
  
  selectedDiscountText: {
    color: '#fff', 
  },
  
  discountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd', 
  },  

  orderListContainer: {
    marginBottom: 10,
    maxHeight: 400,
    borderRadius: 30,
    borderWidth: 1.2,
    borderColor: '#13602A',
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontWeight: 500,
    marginBottom: 10,
    color: '#8a8888',
    fontSize: 12.5,
  },

  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  itemDetailsContainer: {
    flex: 3,
  },

  itemDetails: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#13602A',
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },

  quantityButton: {
    padding: 10,
    margin: 5,
  },

  quantityButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#13602A',
  },

  quantityText: {
    fontSize: 13,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: '#13602A',
  },

  priceContainer: {
    flex: 2,
    alignItems: 'flex-end',
  },

  priceText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#13602A',
  },

  paymentTitle: {
    fontWeight: 500,
    color: '#13602A',
    marginBottom: 5,
  },

  paymentDetailsContainer: {
    marginBottom: 10,
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leftText: {
    color: '#595959',
    fontWeight: 500,
    fontSize: 13,
  },

  rightText: {
    color: '#13602A',
    fontWeight: 'bold',
    fontSize: 13,
  },

  placeOrderButton: {
    backgroundColor: '#13602A',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default OrderSummary;
