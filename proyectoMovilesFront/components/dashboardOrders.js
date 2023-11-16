import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";
import { Container, Button, View, Divider, Flex } from 'native-base';
import colors from './colors';
import axios from "axios";

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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    width: 300,
    borderBottomColor: '#ffb703',
  },
  sep: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    width: 350,
    borderBottomColor: '#023047',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
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

export default function C_card({navigation}){

  const [listUser, setListUser] = useState([]);

    useEffect(() => {
      getOrders()
    }, [])

    const getOrders = async () => {
      const res = await axios.get("http://192.168.1.78:8000/api/orden_index")
      console.log(res.data);
      setListUser(res.data);
    };
      
  return <View alignItems="center">

      <Container paddingTop={10} style={styles.contain}>
        <HStack space={2} mt={2}>
          <Button style={styles.container} onPress={() => navigation.navigate('Crud')}>
            <Image
            source={require('./left-arrow.png')} style={styles.imagen} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
            />
          </Button> 
          <Heading>
            Ordenes de
            <Text color={colors.warning}> Compra</Text>
          </Heading>
        </HStack>
      </Container>

      <View style={styles.sep}></View>

          <HStack space={2} mt={2}>
            <View >
              <Button style={styles.button} onPress={() => navigation.navigate('CreateOrders')}>
                Nueva Orden
              </Button>
            </View>
            <Button style={styles.button1} onPress={() => getOrders()}>
              <Image
              source={require('./rotate-right.png')} style={styles.imagenbtn} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
              />
            </Button>
          </HStack>
        
     
        <ScrollView>
          <View>
          {listUser.map((user) => (
            <View key={user.id} maxW="350" marginBottom={2} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                    uri: "https://th.bing.com/th/id/OIP.RVcGikeBB-Ji9p64lKop4QHaFj?pid=ImgDet&rs=1"
                  }} alt="image" />
                  </AspectRatio>
                  <Center bg={colors.contrast} position="absolute" bottom="0" px="3" py="1.5">
                    FOTO
                  </Center>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      <Text color="coolGray.600" >Cliente: </Text>
                      <Text color={colors.warning}>{user.firstName} { user.lastName} </Text>
                    </Heading>
                      <Text fontSize="xs" color={colors.contrast} fontWeight="500" ml="-1" mt="-1">
                      {user.email} 
                    </Text>
                  </Stack>
                
                  <HStack alignItems="center" justifyContent="space-between">
                    <Text color="coolGray.600" fontWeight="400">
                      {user.orderDate}
                    </Text>
                    <Button style={styles.button1} onPress={() => navigation.navigate("DashboardOrderDetails",{userID: user.id})}>
                      <Image
                        source={require('./add.png')}
                        style={styles.imagenbtn}
                        alt="hola"
                      />
                    </Button>
                  </HStack>
        
                </Stack>
            </View>     
          ))}
          </View>
          
        </ScrollView>
      

      
    </View>;
}
