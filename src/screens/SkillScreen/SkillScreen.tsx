import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './SkillStyle';
import { Profile } from '../../components/Profile/Profile';

export function SkillScreen() {
  return (
    <View style={styles.container}>
        <Profile title='Minhas Habilidades'/>        
    </View>
  );
}