import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',    
    margin: 20,
    borderRadius: 10,
    width: '90%',
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#FFFFFF',
    borderColor: '#FFFFFF',    
  },
  container:{
    flex: 1,    
    backgroundColor: '#333',    
    alignItems: 'center',
    justifyContent: 'space-around',    
    paddingTop: 100,
    width: '100%',    
  }
});