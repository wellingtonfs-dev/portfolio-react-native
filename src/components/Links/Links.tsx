import React from 'react';
import { Pressable, View, Text, Linking } from 'react-native';

import { styles } from './LinksStyle';

interface LinkProp{
    title: string;
    url: string;
}
export function Links({title, url} : LinkProp) {
    const handlePress = () => {
        // Função que usa Linking para abrir a URL
        Linking.openURL(url).catch((err) => 
          console.error("Erro ao abrir o link:", err)
        );
      };
  return (  
    <View>
        <Pressable onPress={handlePress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>   
    </View>  
  );
}