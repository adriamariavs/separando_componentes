import { View, Text, TextInput, ImageBackground, Button, StyleSheet } from 'react-native';
import { styles } from '../styles/estilos';

export default function Body() {
    return (
        <View style={styles.container}>

            <ImageBackground source={require('../assets/images/imagem8.jpg')} resizeMode="cover" style={styles.image} >
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
                            placeholderColor='white'
                            color={'#58ACFA'} />
                    </View>
                </View>
            </ImageBackground>

        </View>
    )
}