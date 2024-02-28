import { View } from 'react-native';
import { styles } from './src/styles/estilos';
import Body from './src/components/Body';
import Cabecalho from './src/components/Cabecalho';
import Final from './src/components/Final';

export default function App() {

  return (
    <View style={styles.container}>
    
     <Cabecalho />
     <Body />
     <Final />
    
    </View>
  );
}