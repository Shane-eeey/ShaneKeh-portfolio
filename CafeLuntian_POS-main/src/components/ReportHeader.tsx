import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navtypes';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ReportHeader = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image source={require('../img/logo2.png')} style={styles.logo} />
        <Text style={styles.title}>Cafe Luntian</Text>
      </View>

      <View style={styles.rightSection}>
        <TouchableOpacity
          style={styles.posButton}
          onPress={() => navigation.navigate('Home')} 
        >
          <Text style={styles.posText}>POS</Text>
          <Image
            source={require('../img/shopbag.png')}
            style={styles.shopbag}
          />
        </TouchableOpacity>

        <View style={styles.profileContainer}>
          <View style={styles.avatar}>
            <Image
              source={require('../img/profile.png')}
              style={styles.profile}
            />
          </View>
          <View style={styles.profileText}>
            <Text style={styles.name}>Sirius Black</Text>
            <Text style={styles.role}>Admin</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1b4d1f',
    paddingHorizontal: 25,
    paddingVertical: 16,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  posButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 40,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1.2,
    borderColor: '#13602A',
    marginRight: 10,
  },

  posText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#13602A',
    marginRight: 6,
  },
  
  shopbag: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1.2,
    borderColor: '#13602A',
    paddingHorizontal: 12,
    paddingVertical: 2,
  },

  avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileText: {
    justifyContent: 'center',
  },

  profile: {
    width: 30,
    height: 30,
    marginLeft: -10,
    resizeMode: 'cover',
  },

  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#13602A',
  },

  role: {
    fontSize: 13,
    color: '#888',
  },
});

export default ReportHeader;
