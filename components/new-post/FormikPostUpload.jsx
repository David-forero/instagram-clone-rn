import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements";
import validUrl from 'valid-url';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the caracter limit."),
});

const FormikPostUpload = () => {
  const PLACEHOLDER_IMAGE = "https://www.treeage.com/wp-content/uploads/2020/02/camera.jpg";
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
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
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMAGE }}
              style={{ width: 100, height: 100 }}
            />
            <View style={{flex: 1, marginLeft: 12}} >
              <TextInput
                style={{ color: "white", fontSize: 20 }}
                placeholder="Write a caption..."
                placeholderTextColor={"gray"}
                multiline
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>

            {
              errors.caption && (
                <Text style={{fontSize: 10, color: 'red'}} >
                  {errors.caption}
                </Text>
              )
            }

          </View>
          <Divider width={0.2} />
          <TextInput
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
            style={{ color: "white", fontSize: 18 }}
            placeholder="Enter Image Url"
            placeholderTextColor={"gray"}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />

          {
            errors.imageUrl && (
              <Text style={{fontSize: 10, color: 'red'}} >
                {errors.imageUrl}
              </Text>
            )
          }

          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUpload;

const styles = StyleSheet.create({});
