import * as React from "react";
import {View, Button, Text, Box, HStack, Input, 
    Center, VStack, Heading, ScrollView, Image, AspectRatio,
    Stack, QuestionOutlineIcon, Icon, useToast, Divider,} from "native-base";

    
export default function HomeScreen({navigation}){
    const toast = useToast();
    return(
        <ScrollView>
            <Box safeAreaTop>
                <Heading textAlign={"center"} bg={"#83E8BA"} size="2xl" color={"white"} 
                shadow="9">MY HEALTH</Heading>
                <Text/>
                <Center>
                    {/* primeros textos */}
                    <VStack >
                        <HStack >
                            <Text textAlign={"center"} fontSize='3xl' color='red' >WELCOME TO CHANGE YOUR LIFE</Text>
                        </HStack>
                        <HStack>
                            <Text textAlign={"justify"} fontSize='md' color='red' >Esta es una aplicacion en la cual 
                                puedes monitorear tu cuerpo y realizar diferentes cálculos en 
                                cuanto a salud se refiere. </Text>
                        </HStack>
                    </VStack>
                    <Text/>

                    {/* Imagen */}
                    <Image source={{
                    uri: "https://www.noticiasensalud.com/wp-content/uploads/2021/04/Medios-actuales-para-cuidar-de-la-salud-bienestar-fisico-y-mental-1000x600.jpg"
                    }} alt="Alternate Text" size="2xl" />
                    <Text/>

                    {/* Card Asesoria*/}
                    
                    <Box rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
                        <Box>
                            <Text color="emerald.500" mt="3" fontWeight="medium" fontSize="md">
                                SIN COSTO
                            </Text>
                        </Box>
                        <Box alignItems='center'>
                            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                                CONSULTA EXPRESS
                            </Text>
                            <Text textAlign={"center"}  mt="2" fontSize="sm" color="coolGray.700">
                                Atención médica de especialistas
                            </Text>
                            <Text/>
                            <HStack space={3}>
                                <VStack>
                                    <Box alignItems={"center"}>
                                        <Image source={{
                                        uri:"https://img.freepik.com/vector-gratis/concepto-ambulancia-emergencia_23-2148539599.jpg?w=2000"
                                        }} alt="Alternate Text" size="lg" />
                                        <Text/>
                                    </Box>
                                </VStack>
                            </HStack>
                           
                            
                        </Box> 
                        <Box alignItems={"center"}>
                            <HStack space={3}>
                                <Button >Agendar ahora</Button>
                                <Button onPress={()=> toast.show({
                                    title:"Para más información contactanos",
                                    placement:"bottom"})}
                                    leftIcon={<Icon color={"blue.100"} as={QuestionOutlineIcon} />} variant="outline">Details</Button>
                            </HStack>
                        </Box>
                    </Box>
                    <Text/>
                    {/* Card consulta express*/}

                 
                    <Box rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
                        <Box alignItems='center'>
                            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                                Asesoría de salud
                            </Text>
                            <Text textAlign={"center"}  mt="2" fontSize="sm" color="coolGray.700">
                                Habla con un experto
                            </Text>
                            <Text/>
                            <HStack space={3}>
                                <VStack>
                                    <Box alignItems={"center"}>
                                        <Image source={{
                                        uri:"https://t1.ea.ltmcdn.com/es/posts/5/6/2/10_caracteristicas_de_los_perros_24265_600_square.jpg"
                                        }} alt="Alternate Text" size="lg" />
                                        <Text/>
                                        <Text fontSize="sm" color="coolGray.700">Medicina veterinaria</Text><Text/>
                                        <Button rounded={"full"} bg={"emerald.500"} color={"white"} >$100 MXM</Button>
                                    </Box>
                                </VStack>
                                <VStack>
                                    <Box alignItems={"center"}>
                                        <Image source={{
                                        uri:"https://img.freepik.com/vector-gratis/fondo-personaje-doctor_1270-84.jpg?w=2000"
                                        }} alt="Alternate Text"  size="lg" />
                                        <Text/>
                                        <Text fontSize="sm" color="coolGray.700">Médico general</Text><Text/>
                                        <Button rounded={"full"} bg={"emerald.500"} color={"white"} >$100 MXM</Button>
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
                    {/* Card Medicos especialistas*/}
                    
                    <Box rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
                        <Box alignItems='center'>
                            <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                                Médicos especialistas
                            </Text>
                            <Text textAlign={"center"}  mt="2" fontSize="sm" color="coolGray.700">
                                Tu directorio médico especialista
                            </Text>
                            
                            <HStack space={3}>
                                <VStack>
                                    <Box alignItems={"center"}>
                                        <Image source={{
                                        uri:"https://img.freepik.com/vector-gratis/gente-caminando-sentada-edificio-hospital-exterior-cristal-clinica-ciudad-ilustracion-vector-plano-ayuda-medica-emergencia-arquitectura-concepto-salud_74855-10130.jpg"
                                        }} alt="Alternate Text" size="xl" />
                                        
                                    </Box>
                                </VStack>
                            </HStack>
                            
                            
                        </Box> 
                        <Box alignItems={"center"}>
                            <HStack space={3}>
                                <Button >Ver directorio</Button>
                                <Button onPress={()=> toast.show({
                                    title:"Para más información contactanos",
                                    placement:"bottom"})}
                                    leftIcon={<Icon color={"blue.100"} as={QuestionOutlineIcon} />} variant="outline">Details</Button>
                            </HStack>
                        </Box>
                    </Box>
                                    
                </Center>
            </Box>
        </ScrollView>
    )
}