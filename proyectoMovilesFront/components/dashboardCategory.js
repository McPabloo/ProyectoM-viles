import React, { useEffect, useState } from 'react';
import { Center, Container, Image, Heading, HStack, Button, View, Text, Divider, Flex } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

export default function Category({navigation}) {

  const [listCategory, setListCategory] = useState([]);
  const [eliminate, setEliminate] = useState([]);

  const [idCt, setIdCat] = useState([]);

  useEffect(() => {
    getCategory()
  }, [])

  const getCategory = async () => {
    const res = await axios.get("http://192.168.1.78:8000/api/category_index")
    console.log(res.data);
    setListCategory(res.data);
  };

  const eliminar = async (e) => {
    if (e && e.preventDefault()) e.preventDefault();
    console.log(eliminate);
    const formDatum = new FormData();
    formDatum.append("id", eliminate);
    const res = await axios.post("http://192.168.1.78:8000/api/delete_category", formDatum,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }
    ).then(response => {

      getCategory();
    }).catch(error => {
      console.log(error);
    });
  }


  const styles = StyleSheet.create({
    contain: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#023047',
      width: 150,
      height: 40,
      marginVertical: 10,
    },
    button1: {
      backgroundColor: '#023047',
      width: 60,
      height: 40,
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
    sep: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 2,
      borderBottomWidth: 2,
      width: 260,
      paddingVertical: 10,
      borderBottomColor: '#023047',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    container: {
      backgroundColor: '#0098FF',
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 25,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagen: {
      width: 40, // O el valor deseado para el ancho de la imagen
      height: 40, // O el valor deseado para la altura de la imagen
    },
    imagenbtn: {
      width: 20, // O el valor deseado para el ancho de la imagen
      height: 20, // O el valor deseado para la altura de la imagen
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
    emaila: {
      fontSize: 16,
      color: colors.danger,
    },
    cl: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  });

  return <Center paddingTop={20}>
    <Container style={styles.contain}>
      <HStack space={2} mt={2}>
        <Button style={styles.container} onPress={() => navigation.navigate('Crud')}>
          <Image
            source={require('./left-arrow.png')} style={styles.imagen} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
          />
        </Button>
        <Heading>
          Dashboard
          <Text color={colors.warning}> Categoría</Text>
        </Heading>
      </HStack>

      <View style={styles.sep}></View>

      <HStack space={2} mt={2}>
        <View >
          <Button style={styles.button} onPress={() => navigation.navigate('CreateCategory')}>
            Crear Categoría
          </Button>
        </View>
        <Button style={styles.button1} onPress={() => getCategory()}>
          <Image
            source={require('./rotate-right.png')} style={styles.imagenbtn} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
          />
        </Button>
      </HStack>

      <ScrollView>
        <View>
          {listCategory.map((category) => (
            <View key={category.id} style={styles.listItem}>
              <Image alt='usuario' source={{ uri: "https://images.vexels.com/media/users/3/151869/isolated/preview/767ca771755f4675d4063c03e17c8595-icono-de-lista-de-verificacion-medica.png" }} style={styles.avatar} />
              <View>
                <Text style={styles.name}>{category.categoryName}</Text>
                <Text style={styles.description}>{category.description}</Text>
                <HStack space={2} mt={2}>
                  <Button style={styles.email} onPress={() => { navigation.navigate('EditCategory', { categoryID: category.id }) }}>
                    Editar
                  </Button>
                  <Button backgroundColor={colors.danger}
                    onPress={() => {
                      console.log(category.id);
                      setEliminate(category.id);
                      eliminar();
                    }}>
                    Eliminar
                  </Button>
                </HStack>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

    </Container>
  </Center>;
}