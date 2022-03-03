import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, {useState} from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Validator from "email-validator";
import {firebase, db} from '../../data/firebase';

const SignupFormSchema = Yup.object().shape({
  email: Yup.string().email().required("An email is required"),
  username: Yup.string().min(2).required("An username is required"),
  password: Yup.string().min(
    6,
    "your password has to have at least 6 characters."
  ),
});


const SignupForm = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const getRandomProfile = async () =>{
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    return data.results[0].picture.large
  }

  const onSignup = async (email, password, username) => {
    setLoading(true)
    try {
      const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
      db.collection('users').add({uid: authUser.user.uid, username: username, email: authUser.user.email, profile_picture: await getRandomProfile()})
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }
  
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        onSubmit={(values) => {
          onSignup(values.email, values.password, values.username)
        }}
        validationSchema={SignupFormSchema}
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
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    !errors.username
                      ? "#eee"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Username"
                autoCapitalize="none"
                autoFocus={true}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#eee"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number, username or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.password.length < 1 || values.password.length > 6
                      ? "#eee"
                      : "red",
                },
              ]}
            >
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
                  loading ? <ActivityIndicator size="small" color="#0000ff" /> :  <Text style={{ color: "#fff" }}>Sign up</Text>
                }
            </Pressable>

            <View style={styles.signupContainer}>
              <Text>Already have an account? </Text>

              <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
                <Text style={{ color: "#6bb0f5" }}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignupForm;

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
  button: (isValid) => ({
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
