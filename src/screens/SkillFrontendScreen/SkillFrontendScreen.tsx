import React from 'react';
import { ScrollView, Text } from 'react-native';

import { styles } from './FrontendStyle';
import { Profile } from '../../components/Profile/Profile';
import { Skill } from '../../components/Skill/Skill';

export function SkillFrontendScreen() {
  return (
    <ScrollView style={styles.container}>
        <Profile title='Frontend'/> 
        <Skill title='HTML : ' star={4}/>       
        <Skill title='CSS : ' star={4}/>       
        <Skill title='JavaScript : ' star={4}/>       
        <Skill title='React : ' star={3}/>       
        <Skill title='React Native : ' star={3}/>               
    </ScrollView>
  );
}