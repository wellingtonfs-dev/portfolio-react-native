import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './ProfileStyle';

interface ProfileProps{
    title: string;
}

export function Profile({title}: ProfileProps) {
  return (
    <View style={styles.container}>
        <Image style={styles.photo} source={{uri:'https://avatars.githubusercontent.com/u/176322856?v=4'}} />
        <Text style={styles.title}>{title}</Text>
    </View>
  );
}