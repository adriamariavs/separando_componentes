import { Text, View, StyleSheet } from 'react-native';

export default function FirstComponent() {

    return (
        <View>
            <Text>Componente</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
});