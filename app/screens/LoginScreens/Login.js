import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Btn, ImageBtn, Input } from "../../components";
import { validateEmail, validatePassword } from "../../utils/validations";
import Loading from "../../modal/loading";
import { useTheme } from "../../../assets/colors/ThemeContext";

export default function Login() {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e);
    validateEmail({ e, error: setEmailError });
  };

  const handlePasswordChange = (e) => {
    setPassword(e);
    validatePassword({ e, error: setPasswordError });
  };

  return (
    <View
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={{ marginTop: 120 }}></View>
      <Text style={[styles.title, { color: theme.textPrimary }]}>
        Welcome back! Glad to see you, Again!
      </Text>
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
        secureTextEntry
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ForgotPassword");
        }}
        style={{ alignSelf: "flex-end", marginRight: 20, marginBottom: 50 }}
      >
        <Text style={[styles.label, { color: theme.primary }]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <Btn
        text="Login"
        width="93%"
        onPress={() => {
          setLoading(true);
          let emailFlag = validateEmail({ e: email, error: setEmailError });
          let passwordFlag = validatePassword({
            e: password,
            error: setPasswordError,
          });
          setTimeout(() => {
            if (emailFlag && passwordFlag) {
              navigation.replace("Welcome");
            }
            setLoading(false);
          }, 1000);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 50,
          alignSelf: "center",
        }}
      >
        <Text
          style={[
            styles.label,
            { color: theme.textSecondary, fontFamily: "Regular" },
          ]}
        >
          Don’t have an account?
        </Text>
        <Text style={[styles.label, { color: theme.primary }]}>
          {" "}
          Register Now
        </Text>
      </TouchableOpacity>

      {loading ? <Loading /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: "Black",
    width: "78%",
    marginLeft: 15,
    marginBottom: 50,
  },
  label: {
    fontFamily: "Bold",
    fontSize: 14,
  },
});
