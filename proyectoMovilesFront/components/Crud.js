import * as React from "react";
import {
  View, Button, Text, Box,
  ScrollView, HStack, Badge, Spacer, Pressable, Flex, Heading, Divider
} from "native-base";

export default function Crud({ navigation }) {
  return (
    <ScrollView>
      <Box safeAreaTop>
        <Heading textAlign={"center"} bg={"#219ebc"} size="2xl" color={"white"}
          shadow="9">TABLES</Heading>
        <Text />
        <Box alignItems="center">
          <Box width="100%" rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box alignItems='center'>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                CATEGORY
              </Text>
              <Text textAlign={"justify"} mt="2" fontSize="sm" color="coolGray.700">
                CRUD of Category table
              </Text>
              <Text />
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('Category')} >GO</Button>
            </Box>
          </Box>
          <Text />

          {/*segundo card*/}

          <Box width="100%" rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box alignItems='center'>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                CLIENT
              </Text>
              <Text textAlign={"justify"} mt="2" fontSize="sm" color="coolGray.700">
                CRUD of Client table
              </Text>
              <Text />
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('Client')}>GO</Button>
            </Box>
          </Box>
          <Text />

          {/*Tercer card*/}

          <Box width="100%" rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box alignItems='center'>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                COMPANY
              </Text>
              <Text textAlign={"justify"} mt="2" fontSize="sm" color="coolGray.700">
                CRUD of Company table
              </Text>
              <Text />
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('Companay')}>GO</Button>
            </Box>
          </Box>
          <Text />
          {/*Cuarto card*/}

          <Box width="100%" rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box alignItems='center'>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                ORDER DETAILS
              </Text>
              <Text textAlign={"justify"} mt="2" fontSize="sm" color="coolGray.700">
                CRUD of OrderDetails tables
              </Text>
              <Text />
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('OrderDetails')}>GO</Button>
            </Box>
          </Box>
          <Text />
          {/*Quinto card*/}

          <Box width="100%" rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box alignItems='center'>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                ORDERS
              </Text>
              <Text textAlign={"justify"} mt="2" fontSize="sm" color="coolGray.700">
                CRUD of Orders table
              </Text>
              <Text />
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('Orders')}>GO</Button>
            </Box>
          </Box>

          {/*Quinto card*/}

          <Box width="100%" rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box alignItems='center'>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                PRODUCTS
              </Text>
              <Text textAlign={"justify"} mt="2" fontSize="sm" color="coolGray.700">
                CRUD of Products table
              </Text>
              <Text />
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('Products')}>GO</Button>
            </Box>
          </Box>

          {/*Quinto card*/}

          <Box width="100%" rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box alignItems='center'>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                SHIPPERS
              </Text>
              <Text textAlign={"justify"} mt="2" fontSize="sm" color="coolGray.700">
                CRUD of Shipper table
              </Text>
              <Text />
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('Shipper')}>GO</Button>
            </Box>
          </Box>

          {/*octavo card*/}

          <Box width="100%" rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box alignItems='center'>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                SUPLIERS
              </Text>
              <Text textAlign={"justify"} mt="2" fontSize="sm" color="coolGray.700">
                CRUD of Supliers table
              </Text>
              <Text />
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('Supliers')}>GO</Button>
            </Box>
          </Box>

          {/*Noveno card*/}

          <Box width="100%" rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box alignItems='center'>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                USERS
              </Text>
              <Text textAlign={"justify"} mt="2" fontSize="sm" color="coolGray.700">
                CRUD of Users table
              </Text>
              <Text />
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('Users')}>GO</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  )
}