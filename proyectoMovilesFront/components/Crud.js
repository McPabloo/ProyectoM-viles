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
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('DashboardCategory')} >GO</Button>
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
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('DashboardClient')}>GO</Button>
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
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('DashboardCompany')}>GO</Button>
            </Box>
          </Box>
          <Text />
          {/*Cuarto card*/}

          <Box width="100%" rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
            <Box alignItems='center'>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                ORDERS
              </Text>
              <Text textAlign={"justify"} mt="2" fontSize="sm" color="coolGray.700">
                CRUD of Orders table
              </Text>
              <Text />
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('DashboardOrders')}>GO</Button>
            </Box>
          </Box>
          <Text />

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
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('DashboardProducts')}>GO</Button>
            </Box>
          </Box>
          <Text />


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
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('DashboardShipper')}>GO</Button>
            </Box>
          </Box>
          <Text />

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
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('DashboardSuplier')}>GO</Button>
            </Box>
          </Box>
          <Text />

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
              <Button colorScheme={"emerald"} onPress={() => navigation.navigate('DashboardUsers')}>GO</Button>
            </Box>
          </Box>
          <Text />
        </Box>
      </Box>
    </ScrollView>
  )
}