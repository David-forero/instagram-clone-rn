import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from "react-native";
import React, {useState} from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Validator from "email-validator";
import {firebase} from '../../data/firebase';

const LoginFormSchema = Yup.object().shape({
  email: Yup.string().email().required("An email is required"),
  password: Yup.string().min(
    6,
    "your password has to have at least 6 characters."
  ),
});


const LoginForm = ({navigation}) => {
  const [loading, setLoading] = useState(false);


  const onLogin = async (email, password) =>{
    setLoading(true)
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Logueado sastifactorio');
      setLoading(false)
    } catch (error) {
      Alert.alert(error.message);
      setLoading(false)
    }
  }

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onLogin(values.email, values.password)
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View style={[styles.inputField, {borderColor: errors.email ? 'red' : '#eee'}]}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number, username or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View style={[styles.inputField, {borderColor: values.password.length < 1 || values.password.length > 6 ? '#eee' : 'red'}]}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <Text style={{ color: "#6bb0f5" }}>Forgot password</Text>
            </View>

            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
            >
              {
                loading ? <ActivityIndicator size="small" color="#0000ff" /> : <Text style={styles.buttonText}>Log in</Text>
              }
              
            </Pressable>

            <View style={styles.signupContainer}>
              <Text>Don't have an account? </Text>

              <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>          
                <Text style={{ color: "#6bb0f5" }}>Sing Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },
  wrapper: {
    marginTop: 80,
  },
  button: isValid => ({
    backgroundColor: isValid ? "#0096f6" : "#9acaf7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});
