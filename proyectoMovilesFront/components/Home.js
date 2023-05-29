import * as React from "react";
import {View, Button, Text, Box, HStack, Input, 
    Center, VStack, Heading, ScrollView, Image, AspectRatio,
    Stack, QuestionOutlineIcon, Icon, useToast, Divider,} from "native-base";

    
export default function HomeScreen({navigation}){
    const toast = useToast();
    return(
        <ScrollView>
            <Box safeAreaTop>
                <Heading textAlign={"center"} bg={"#219ebc"} size="2xl" color={"white"} 
                shadow="9">SAFE INVENTORY</Heading>
                <Text/>
                <Center>
                    {/* primeros textos */}
                    <VStack >
                        <HStack >
                            <Text textAlign={"center"} fontSize='3xl' color='red' >Keep your inventory safe</Text>
                        </HStack>
                        <Text/>
                        <HStack>
                            <Text textAlign={"justify"} fontSize='md' color='red' >Esta es una aplicacion en la cual 
                                puedes administrar tu empresa. Desde un control de inventario hasta uno de personal, etc. </Text>
                        </HStack>
                    </VStack>
                    <Text/>

                    {/* Imagen */}
                    <Image source={{
                    uri: "https://clearspider.net/wp-content/uploads/2019/05/stock-control-tips-techniques.png"
                    }} alt="Alternate Text" size="2xl" />
                    <Text/>

                    {/* Card Products*/}
                    
                    <Box rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5"> 
                        <Box alignItems='center'>
                            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                                ADMINISTRACIÓN
                            </Text>
                            <Text textAlign={"center"}  mt="2" fontSize="sm" color="coolGray.700">
                                Ver administración
                            </Text>
                            <Text/>
                            <HStack space={5}>
                                <VStack>
                                    <Box space={10}  alignItems={"center"}>
                                        <Image source={{
                                        uri:"https://ferreenjesuscarranzaychazaro.files.wordpress.com/2013/05/articulos-electricos-y-ferreteria-en-general.jpg"
                                        }} alt="Alternate Text" size="lg" />
                                        <Text/>
                                    </Box>
                                </VStack>
                            </HStack>
                           
                            
                        </Box> 
                        <Box alignItems={"center"}>
                            <HStack space={3}>
                                <Button onPress={() => navigation.navigate('Crud')} >Ver</Button>
                                <Button onPress={()=> toast.show({
                                    title:"Picale al boton de a lado",
                                    placement:"bottom"})}
                                    leftIcon={<Icon color={"blue.100"} as={QuestionOutlineIcon} />} variant="outline">Details</Button>
                            </HStack>
                        </Box>
                    </Box>
                    <Text/>

                    {/* Card call suppliers*/}

                 
                    <Box rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
                        <Box alignItems='center'>
                            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                                PROVEEDORES
                            </Text>
                            <Text textAlign={"center"}  mt="2" fontSize="sm" color="coolGray.700">
                                Llama a un proveedor
                            </Text>
                            <Text/>
                            <HStack space={3}>
                                <VStack>
                                    <Box alignItems={"center"}>
                                        <Image source={{
                                        uri:"https://thumbs.dreamstime.com/z/vector-del-mapa-de-m%C3%A9xico-y-de-la-bandera-nacional-57156274.jpg"
                                        }} alt="Alternate Text" size="lg" />
                                        <Text/>
                                        <Text fontSize="sm" color="coolGray.700">Nacional</Text><Text/>
                                        <Button rounded={"full"} bg={"emerald.500"} color={"white"} >Llamar</Button>
                                    </Box>
                                </VStack>
                                <VStack>
                                    <Box alignItems={"center"}>
                                        <Image source={{
                                        uri:"https://www.tlattorneys.com/images/editor-content/1ebfbe2d0671ac6800a453d760303dd0_International.jpg"
                                        }} alt="Alternate Text"  size="lg" />
                                        <Text/>
                                        <Text fontSize="sm" color="coolGray.700">Internacional</Text><Text/>
                                        <Button rounded={"full"} bg={"emerald.500"} color={"white"} >Llamar</Button>
                                    </Box>
                                </VStack>
                            </HStack>
                            <Text/>
                        </Box> 
                        <Box alignItems={"flex-end"}>
                            <Button onPress={()=> toast.show({
                                title:"Para más información contactanos",
                                placement:"bottom"})}
                                leftIcon={<Icon color={"blue.100"} as={QuestionOutlineIcon} />} variant="outline">Details</Button>
                        </Box>
                    </Box>
                    <Text/>
       
                </Center>
            </Box>
        </ScrollView>
    )
}