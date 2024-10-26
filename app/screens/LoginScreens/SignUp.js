import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Btn, ImageBtn, Input } from "../../components";

import {
  validateUsername,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../../utils/validations";
import Loading from "../../modal/loading";

import { useTheme } from "../../../assets/colors/ThemeContext";

export default function SignUp() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e);
    validateUsername({ e, error: setUsernameError });
  };

  const handleEmailChange = (e) => {
    setEmail(e);
    validateEmail({ e, error: setEmailError });
  };

  const handlePasswordChange = (e) => {
    setPassword(e);
    validatePassword({ e, error: setPasswordError });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e);
    validateConfirmPassword({
      password,
      confirmPassword: e,
      error: setConfirmPasswordError,
    });
  };

  return (
    <View
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      {loading ? <Loading /> : null}

      <ImageBtn
        marginLeft={25}
        marginTop={50}
        marginBottom={50}
        alignSelf="flex-start"
        source={require("../../../assets/images/back.png")}
        onPress={() => navigation.goBack()}
      />
      <Text style={[styles.title, { color: theme.textPrimary }]}>
        Welcome back! Glad to see you, Again!
      </Text>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={handleUsernameChange}
        error={usernameError}
        labelFontFamily="Bold"
        fontFamily="Regular"
        inputContainerStyle={{ paddingVertical: 5 }}
        containerStyle={{ marginHorizontal: 15 }}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        error={emailError}
        labelFontFamily="Bold"
        fontFamily="Regular"
        inputContainerStyle={{ paddingVertical: 5 }}
        containerStyle={{ marginHorizontal: 15 }}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        error={passwordError}
        labelFontFamily="Bold"
        fontFamily="Regular"
        inputContainerStyle={{ paddingVertical: 5 }}
        containerStyle={{ marginHorizontal: 15 }}
        secureTextEntry // To hide the password input
      />
      <Input
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
        error={confirmPasswordError}
        labelFontFamily="Bold"
        fontFamily="Regular"
        inputContainerStyle={{ paddingVertical: 5 }}
        containerStyle={{ marginHorizontal: 15 }}
        secureTextEntry // To hide the confirm password input
      />
      <Btn
        text="Agree and Register"
        width="93%"
        onPress={() => {
          setLoading(true);
          let usernameFlag = validateUsername({
            e: username,
            error: setUsernameError,
          });
          let emailFlag = validateEmail({ e: email, error: setEmailError });
          let passwordFlag = validatePassword({
            e: password,
            error: setPasswordError,
          });
          let confirmPasswordFlag = validateConfirmPassword({
            password,
            confirmPassword,
            error: setConfirmPasswordError,
          });

          setTimeout(() => {
            if (
              usernameFlag &&
              emailFlag &&
              passwordFlag &&
              confirmPasswordFlag
            ) {
              navigation.replace("Welcome");
            }
            setLoading(false);
          }, 1000);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: "Black",
    color: "#1E232C",
    width: "78%",
    marginLeft: 15,
    marginBottom: 50,
  },
  label: {
    fontFamily: "Bold",
    fontSize: 14,
    color: "#6A707C",
  },
});
