import React from 'react';
import { ScrollView, Text } from 'react-native';

import { styles } from './BackendStyle';
import { Profile } from '../../components/Profile/Profile';
import { Skill } from '../../components/Skill/Skill';

export function SkillBackendScreen() {
  return (
    <ScrollView style={styles.container}>
        <Profile title='Backend'/> 
        <Skill title='Java : ' star={4}/>       
        <Skill title='C# : ' star={4}/>       
        <Skill title='Python : ' star={4}/>       
        <Skill title='JavaScript : ' star={4}/>               
        <Skill title='SQL : ' star={3}/> 
        <Skill title='NoSQL : ' star={3}/>
        <Skill title='TypeScript : ' star={2}/>      
    </ScrollView>
  );
}