import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Center, Container, Image, Heading, HStack, Button, View, Text, Divider, Flex } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

export default function ProductE({navigation}) {

  const route = useRoute();
 

  const [listProduct, setListProduct] = useState({});

  const [productName, setProductName] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [discontinued, setDiscontinued] = useState("");

  const [formData, setFormData] = useState({
    productName: "",
    image: "",
  });  

  useEffect(() => {
    console.log({productID})
    getProduct()
  }, [])

  const HandleChangeText=(value)=>{
    setProductName(value);
  }

  const HandleChangeImage=(value)=>{
    setImage(value);
  }

  const HandleChangeStock=(value)=>{
    setStock(value);
  }

  const HandleChangePrice=(value)=>{
    setPrice(value);
  }

  const HandleChangeDiscontinued=(value)=>{
    setDiscontinued(value);
  }

  const { productID } = route.params;

  const getProduct = async () => {
    const res = await axios.get(`http://192.168.1.74:8000/api/show_producto/${productID}`);
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
      marginVertical: 60,
      alignSelf: 'center',
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
      width: 150,
      height: 150,
      marginVertical: 7,
      borderRadius: 20,
      marginRight: 10,
    },
    container: {
      backgroundColor: '#0098FF',
      width: 30,
      height: 30,
      borderRadius: 20,
      marginRight: 15,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagen: {
      width: 30, // O el valor deseado para el ancho de la imagen
      height: 30, // O el valor deseado para la altura de la imagen
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
    cl: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  });

  const [errors, setErrors] = React.useState({})

    //validacion
    const validate = () => {

        setErrors({})
        let isValid = true
        
        if(productName == '' || image == '' || stock=='' || price==''|| discontinued==''){
            setErrors({...errors, aviso:'Todos los campos son requeridos'})
            isValid = false
        }
        return isValid
    }

  function submit() { (validate()) ? send_request() : console.log("Error",errors)};

  const send_request=async()=>{
        console.log(productName);
        console.log(image);
        console.log(stock);
        console.log(price);
        console.log(discontinued);
        const formDatum = new FormData();
            formDatum.append("id", productID);
            formDatum.append("productName", productName);
            formDatum.append("image", image);
            formDatum.append("stock", stock);
            formDatum.append("price", price);
            formDatum.append("discontinued", discontinued);
            formDatum.append("categoryID", listProduct.categoryID);
            formDatum.append("supplierID", listProduct.supplierID);


        const res1 = await axios.post('http://192.168.1.74:8000/api/update_producto',formDatum,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        }).catch(error => {
            console.log(error);
        });
        console.log(res1.data);
        
        navigation.navigate('DashboardProducts')

    } 

    return <Center paddingTop={20}>
        <Container style={styles.contain}>
        <HStack space={2} mt={2}>
          <Button style={styles.container} onPress={() => navigation.navigate('DashboardProducts')}>
            <Image
            source={require('./left-arrow.png')} style={styles.imagen} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
            />
          </Button> 
          <Heading>
            Editar
            <Text color={colors.warning}> Producto           </Text>
          </Heading>
        </HStack>
          
          <Text>----------------------</Text>

          <ScrollView>
          <View>
         
          <Image alt='usuario' source={{ uri:listProduct.image }} style={[styles.avatar, { alignSelf: "center" }]} />

            <View>
              <View>
                
              <View style={styles.listItem}>
                <TextInput
                    value={productName}
                    onChangeText={HandleChangeText}
                    placeholder={listProduct.productName}
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Rellena con el nombre del producto</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={image}
                    onChangeText={HandleChangeImage}
                    placeholder={listProduct.image}
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Escribe la dirección de la nueva imagen</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={stock}
                    onChangeText={HandleChangeStock}
                    
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Escribe el stock</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={price}
                    onChangeText={HandleChangePrice}
                    
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Escribe el nuevo precio</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={discontinued}
                    onChangeText={HandleChangeDiscontinued}
                    
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Escribe 1 si está descontinuado, 0 si está en existencia</Text>

                
            <Button style={styles.button} onPress={submit}>
                Actualizar
            </Button> 
               
              </View>
            </View>
         
        </View>
          </ScrollView>

        </Container>
      </Center>;
  }