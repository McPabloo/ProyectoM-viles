import React from "react";
import {
  Button,
  FormControl,
  View,
  Input,
  VStack,
  Text,
  Center,
} from "native-base";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import colors from "./colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Register({ navigation }) {
  const [formData, setData] = React.useState({
    nickname: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    birthday: "",
    notes: "",
  });
  const [errors, setErrors] = React.useState({});
  const [valid, setValid] = React.useState(true);

  const validate = () => {
    setErrors({});
    let isValid = true;

    if (
      formData.nickname === "" ||
      formData.password === "" ||
      formData.phone === "" ||
      formData.firstname === "" ||
      formData.lastname === "" ||
      formData.address === "" ||
      formData.birthday === "" ||
      formData.notes === ""
    ) {
      setErrors({ notice: "All fields required" });
      isValid = false;
    } else if (formData.nickname.length < 6) {
      setErrors({ nickname: "Nickname is too short (minimum 6 characters)" });
      isValid = false;
    }

    // Validar el formato del teléfono usando regex (solo números)
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrors({ phone: "Invalid phone number (only numbers allowed)" });
      isValid = false;
    }

    // Validar el formato de la fecha (ejemplo: YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(formData.birthday)) {
      setErrors({
        birthday: "Invalid date format (use YYYY-MM-DD)",
      });
      isValid = false;
    }

    return isValid;
  };

  const sendRequest = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    console.log("ok", formData);
    const formDatum = new FormData();
    formDatum.append("nickname", formData.nickname);
    formDatum.append("password", formData.password);
    formDatum.append("firstName", formData.firstname);
    formDatum.append("lastName", formData.lastname);
    formDatum.append("address", formData.address);
    formDatum.append("phone", formData.phone);
    formDatum.append("birthday", formData.birthday);
    formDatum.append("notes", formData.notes);

    try {
      const response = await axios.post(
        "http://192.168.1.70:8000/api/create_usuario",
        formDatum,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );

      if (response.data && response.data.length > 0) {
        console.log(response.data[0].email);
        //setValid(true);
        console.log(valid);
        pass();
      } else {
        console.log("Empty response");
      }
    } catch (error) {
      console.log("Error al registrar usuario, podría haber datos duplicados");
    }
  };

  const submit = () => {
    validate() ? sendRequest() : console.log("Error", errors);
  };

  const pass = () => {
    if (valid === true) {
      navigation.navigate("LOGIN");
    }
  };

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
      paddingVertical: 20,
    },
    button: {
      borderBottomWidth: 1,
      borderBottomColor: "white",
      paddingVertical: 5,
    },
    buttonText: {
      fontSize: 16,
      paddingTop: 10,
      color: "#F8F9FA",
    },
  });

  return (
    <Center flex={1} style={{ backgroundColor: colors.dark }}>
      <Text bold color="white" fontSize="60" mt="10">
        Formulario de Registro
      </Text>

      <ScrollView contentContainerStyle={styles.container} width="80%">
        <VStack width="100%">
          <FormControl isRequired isInvalid={"nickname" in errors}>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              p={2}
              color="white"
              fontSize={18}
              name="nickname"
              placeholder="Enter your nickname"
              onChangeText={(value) =>
                setData({ ...formData, nickname: value })
              }
            />
            {"nickname" in errors ? <Text>{errors.nickname}</Text> : null}
          </FormControl>

          <FormControl isRequired isInvalid={"password" in errors}>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              p={2}
              color="white"
              fontSize={18}
              name="password"
              placeholder="Enter password"
              onChangeText={(value) =>
                setData({ ...formData, password: value })
              }
            />
            {"password" in errors ? <Text>{errors.password}</Text> : null}
          </FormControl>

          <FormControl isRequired isInvalid={"phone" in errors}>
            <FormControl.Label>Phone</FormControl.Label>
            <Input
              p={2}
              color="white"
              fontSize={18}
              name="phone"
              placeholder="Enter your phone"
              onChangeText={(value) => setData({ ...formData, phone: value })}
            />
            {"phone" in errors ? <Text>{errors.phone}</Text> : null}
          </FormControl>

          <FormControl isRequired isInvalid={"firstname" in errors}>
            <FormControl.Label>Firstname</FormControl.Label>
            <Input
              p={2}
              color="white"
              fontSize={18}
              name="firstname"
              placeholder="Enter your firstname"
              onChangeText={(value) =>
                setData({ ...formData, firstname: value })
              }
            />
            {"firstname" in errors ? <Text>{errors.firstname}</Text> : null}
          </FormControl>

          <FormControl isRequired isInvalid={"lastname" in errors}>
            <FormControl.Label>Lastname</FormControl.Label>
            <Input
              p={2}
              color="white"
              fontSize={18}
              name="lastname"
              placeholder="Enter your lastname"
              onChangeText={(value) =>
                setData({ ...formData, lastname: value })
              }
            />
            {"lastname" in errors ? <Text>{errors.lastname}</Text> : null}
          </FormControl>

          <FormControl isRequired isInvalid={"birthday" in errors}>
            <FormControl.Label>Birthday</FormControl.Label>
            <Input
              p={2}
              color="white"
              fontSize={18}
              name="birthday"
              placeholder="Enter your birthday (YYYY-MM-DD)"
              onChangeText={(value) =>
                setData({ ...formData, birthday: value })
              }
            />
            {"birthday" in errors ? <Text>{errors.birthday}</Text> : null}
          </FormControl>

          <FormControl isRequired isInvalid={"address" in errors}>
            <FormControl.Label>Address</FormControl.Label>
            <Input
              p={2}
              color="white"
              fontSize={18}
              name="address"
              placeholder="Enter your address"
              onChangeText={(value) =>
                setData({ ...formData, address: value })
              }
            />
            {"address" in errors ? <Text>{errors.address}</Text> : null}
          </FormControl>

          <FormControl isRequired isInvalid={"notes" in errors}>
            <FormControl.Label>Notes</FormControl.Label>
            <Input
              p={2}
              color="white"
              fontSize={18}
              name="notes"
              placeholder="Personal notes"
              onChangeText={(value) => setData({ ...formData, notes: value })}
            />
            {"notes" in errors ? <Text>{errors.notes}</Text> : null}
          </FormControl>

          <Button
            style={{ backgroundColor: colors.primary }}
            onPress={submit}
          >
            Registrarme
          </Button>

          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("LOGIN")}
            >
              <Text style={styles.buttonText}>Volver</Text>
            </TouchableOpacity>
          </View>
        </VStack>
      </ScrollView>
    </Center>
  );
}
