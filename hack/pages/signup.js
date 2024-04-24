import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default function Signup() {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateFirstname = () => {
    if (!firstname) {
      setFirstnameError("First name is required");
      return false;
    }
    setFirstnameError("");
    return true;
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const isValidEmail = (value) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleSignup = () => {
    const isFirstnameValid = validateFirstname();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isFirstnameValid && isEmailValid && isPasswordValid) {
      // Perform signup logic here
      console.log("Signup successful!");
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Signup Form</Text>
      <StatusBar style="auto" />
      <TextInput
        style={[styles.input, firstnameError && styles.inputError]}
        placeholder="First Name"
        value={firstname}
        onChangeText={(text) => setFirstname(text)}
        onBlur={validateFirstname}
      />
      {firstnameError ? <Text style={styles.error}>{firstnameError}</Text> : null}
      <TextInput
        style={[styles.input]}
        placeholder="Last Name"
        value={firstname}
        onChangeText={(text) => setLastname(text)}
        // onBlur={validateFirstname}
      />
      <TextInput
        style={[styles.input, emailError && styles.inputError]}
        placeholder="Email Address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        onBlur={validateEmail}
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <TextInput
        style={[styles.input, passwordError && styles.inputError]}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        onBlur={validatePassword}
        secureTextEntry
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>SIGNUP</Text>
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20, 
    color: "#9999FF",
    height: 40,
  },
  input: {
    backgroundColor: "#E0E0E0",
    borderRadius: 30,
    width: "40%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: "red",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    width: "40%",
    height: 40,
    backgroundColor: "#9999FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
