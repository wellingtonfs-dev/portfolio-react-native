import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./HomeStyle";
import { Profile } from "../../components/Profile/Profile";
import { Links } from "../../components/Links/Links";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Profile title="Wellington Ferreira" />
      </View>
      <View style={styles.links}>
        <Links
          title="LinkedIn"
          url="https://www.linkedin.com/in/wellington-ferreira-da-silva/"
        />
        <Links title="GitHub" url="https://github.com/wellingtonfs-dev" />
        <Links title="E-mail" url="mailto:wellington_006@hotmail.com" />
        <Links title="WhatsApp" url="https://api.whatsapp.com/send/?phone=5519992136854&text&type=phone_number&app_absent=0" />
      </View>
    </View>
  );
}
