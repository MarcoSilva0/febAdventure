import React, { useState } from "react";
import { Image } from "react-native";
import { KeyBoardView, Container, Input, ButtonSubmit, TextButton } from "./styles";

const LoginScreen = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    // Chamando a função handleLogin recebida como prop
    handleLogin(email, password);
  };

  return (
    <KeyBoardView>
        <Image source={require("./assets/unifeb-logo.png")} />
        <Input placeholder="E-mail" keyboardType="email-address" value={email} onChangeText={setEmail} />
        <Input
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <ButtonSubmit onPress={handlePress}>
          <TextButton>Entrar</TextButton>
        </ButtonSubmit>
    </KeyBoardView>
  );
};

export default LoginScreen;
