import React, { useEffect, useState } from 'react';
import { Center, Container, Image, Heading, HStack, Button, View, Text, Divider } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

export default function Product() {

  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    const res = await axios.get("http://192.168.1.74:8000/api/producto_index")
    console.log(res.data);
    setListProduct(res.data);
  };


  const styles = StyleSheet.create({
    contain: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    button: {
      backgroundColor: '#023047',
      width: 150,
      marginVertical: 10,
    },
    buttonText: {
      fontSize: 16,
      paddingTop: 10,
      color: '#F8F9FA',
    },
    listItem: {
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 2,
      width: 350,
      borderBottomColor: '#ffb703',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#023047',
    },
    email: {
      fontSize: 16,
      color: '#666',
    },
  });

    return <Center paddingTop={20}>
        <Container style={styles.contain}>
          <Heading>
            Dashboard
            <Text color={colors.warning}> Productos</Text>
          </Heading>
          <Text>----------------------</Text>
          <View>
            <Button style={styles.button}>
              Crear Producto
            </Button>
          </View>
          
          <View>
          {listProduct.map((product) => (
            <View key={product.id} style={styles.listItem}>
              <Image alt='usuario' source={{ uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }} style={styles.avatar} />
              <View>
                <Text style={styles.name}>{product.productName}</Text>
                <Text style={styles.email}>Price - {product.price}</Text>
                <HStack space={2} mt={2}>
                  <Button style={styles.email} onPress={() => alert(product.id)}>
                    Alerta 1
                  </Button>
                  <Button style={styles.email} onPress={() => alert(product.id)}>
                    Alerta 2
                  </Button> 
                </HStack>
              </View>
            </View>
          ))}
        </View>

        </Container>
      </Center>;
  }