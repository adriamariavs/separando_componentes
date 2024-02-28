import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, Button } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      
        <View style={{ backgroundColor: '#BE81F7', width: '100%', height: 75 }}>
          <Text style={{ fontSize: 55, color: 'black', textAlign: 'center' }}>Login</Text>
        </View>
        <ImageBackground source={require('./src/assets/images/imagem4.jpg')} resizeMode="cover" style={styles.image} >
        <View style={styles.secondaryContainer}>
          <View style={styles.terciaryContainer}>
            <TextInput style={styles.InputName}
              placeholder='E-mail'
            />
            <TextInput style={styles.InputName}
              placeholder='Senha'
              secureTextEntry={true}
            />
            <Button 
            title="Entrar"
            placeholderColor= 'white'
            color={'#BE81F7'} />
          </View>
        </View>
        </ImageBackground>

        <View style={{ backgroundColor: '#BE81F7', width: '100%', height: 35 }}>
          <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>@PáginadeLogin</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  secondaryContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  InputName: {
    borderWidth: '1',
    height: 60,
    width: 500,
    backgroundColor: "white",
    borderColor: '#9370DB',
    border: 'solid',
    margin: 10,
    textAlign: 'center',
  }
  
});