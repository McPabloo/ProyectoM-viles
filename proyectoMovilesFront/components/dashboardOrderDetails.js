import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Center, Container, Box, Image, AspectRatio, Heading, HStack, Button, View, Text, Stack } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

export default function OrderDetails({navigation}) {

  const route = useRoute();
  const [listUser, setListUser] = useState([]);

  const { userID } = route.params;
  
  useEffect(() => {
    console.log(userID);
    getUser();
}, []);

const getUser = async () => {
  try {
    const res = await axios.get(`http://192.168.100.27:8000/api/ordendetalles_index?userID=${userID}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'
      }
    });

    console.log(res.data);
    setListUser(res.data);
  } catch (error) {
    console.error(error);
  }
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
      fontSize: 24,
      color: '#023047',
    },
    email: {
      fontSize: 20,
      color: '#666',
    },
    cl: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  });

  
  /*const send_request=async()=>{
        console.log(nam);
        console.log(password);
        console.log(phone);
        console.log(email);
        console.log(userID);
        const formDatum = new FormData();
            formDatum.append("id", userID);
            formDatum.append("nickname", nam);
            formDatum.append("password", password);
            formDatum.append("phone", phone);
            formDatum.append("email", email);
            
        const res1 = await axios.post('http://192.168.0.107:8000/api/update_usuario',formDatum,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        });
        console.log(res1.data);
        
        navigation.navigate('DashboardUsers')

    } */

    return <Center paddingTop={20}>
        <Container style={styles.contain}>
        <HStack space={2} mt={2}>
          <Button style={styles.container} onPress={() => navigation.navigate('dashboardUsers')}>
            <Image
            source={require('./left-arrow.png')} style={styles.imagen} alt='imagen' // Ruta relativa de la imagen dentro de la carpeta de assets
            />
          </Button> 
          <Heading>Detalles de
            <Text color={colors.warning}> Orden        </Text>
          </Heading>
        </HStack>
          
        <Text>----------------------</Text>


        <ScrollView horizontal={true}>
  {listUser.map((user) => (
    <View key={user.id} style={{ width: 350, marginRight: 10 }}>
      <View marginBottom={2} rounded="lg" overflow="hidden" borderColor="coolGray.300" borderWidth="1">
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{ uri: "https://th.bing.com/th/id/OIP.RVcGikeBB-Ji9p64lKop4QHaFj?pid=ImgDet&rs=1" }} alt="image" />
          </AspectRatio>
          <Center bg={colors.contrast} position="absolute" bottom="0" px="3" py="1.5">
            FOTO
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              <Text color="coolGray.600">Producto: </Text>
              <Text color={colors.warning}>{user.productName}</Text>
            </Heading>
            <Text fontSize="xs" color={colors.contrast} fontWeight="500" ml="-1" mt="-1">
              $ {user.price}
            </Text>
          </Stack>
        </Stack>
      </View>
    </View>
  ))}
</ScrollView>



        </Container>
      </Center>;
  }