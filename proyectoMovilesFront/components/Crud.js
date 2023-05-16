import * as React from "react";
import {View, Button, Text, Box,
  ScrollView, HStack, Badge, Spacer, Pressable, Flex, Heading,Divider} from "native-base";

export default function Crud({navigation}){
    return(
     <ScrollView>
      <Box safeAreaTop>
        <Heading textAlign={"center"} bg={"#219ebc"} size="2xl" color={"white"} 
              shadow="9">TABLES</Heading>
        <Text/>
        <Box alignItems="center">
          <Box rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box alignItems='center'>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Médico general
              </Text>
              <Text textAlign={"justify"} mt="2" fontSize="sm" color="coolGray.700">
                Es el primer paso para el diagnóstico, tratamiento y recuperación
                de tu salud
              </Text>
              <Text/>
              <Button onPress={()=>navigation.navigate('DOCTOR')} >CALCULAR</Button>
            </Box>
          </Box>
          <Text/>

          {/*segundo card*/}

          <Box rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box alignItems='center'>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Fisioterapeuta
              </Text>
              <Text textAlign={"justify"} mt="2" fontSize="sm" color="coolGray.700">
                Prevención y rehabilitación de lesiones o condiciones de salud
                que afecten tu vida diaria
              </Text>
              <Text/>
              <Button onPress={()=>navigation.navigate('FISIO')}>CALCULAR</Button>
            </Box>
          </Box>
          <Text/>

          {/*Tercer card*/}

          <Box rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box alignItems='center'>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Psicologo
              </Text>
              <Text textAlign={"justify"} mt="2" fontSize="sm" color="coolGray.700">
                Atención psicologica de primer contacto para manejar de forma mejor tu vida
              </Text>
              <Text/>
              <Button onPress={()=>navigation.navigate('PSICO')}>CALCULAR</Button>
            </Box>
          </Box>
          <Text/>
          {/*Cuarto card*/}

          <Box rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box alignItems='center'>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Nutriologo
              </Text>
              <Text textAlign={"justify"} mt="2" fontSize="sm" color="coolGray.700">
                Evalúa tu estado de nutrición y determina el plan de alimentación mejor para ti
              </Text>
              <Text/>
              <Button onPress={()=>navigation.navigate('NUTRI')}>CALCULAR</Button>
            </Box>
          </Box>
          <Text/>
          {/*Quinto card*/}

          <Box rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box alignItems='center'>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Veterinario
              </Text>
              <Text textAlign={"justify"} mt="2" fontSize="sm" color="coolGray.700">
                Prevención y tratamiento de enfermedades o lesiones en animales
              </Text>
              <Text/>
              <Button onPress={()=>navigation.navigate('VET')}>CALCULAR</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ScrollView>
    )
}