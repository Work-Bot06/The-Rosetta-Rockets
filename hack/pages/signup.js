import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(firstname) => setFirstname(firstname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(lastname) => setLastname(lastname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email Address"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SIGNUP</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#E0E0E0",
    borderRadius: 30,
    width: "40%",
    height: 45,
    marginBottom: 20,
    alignItems: "flex-start",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 30,
  },
  forgot_button: {
    height: 1,
    marginBottom: 30,
    alignItems: "flex-end"
  },
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#9999FF",
  },
});