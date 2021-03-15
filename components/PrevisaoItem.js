import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

import Cartao from './Cartao';


const PrevisaoItem = (props) => {
    return (
        <Cartao estilos={styles.cartao}>
            <View style={styles.tela}> 
            <Image style={styles.imagem}
                source={{ uri: `https://openweathermap.org/img/wn/${props.previsao.weather[0].icon}.png` }}
            />
            <View>
                <View style={styles.primeiraLinha}>
                    <Text>{`${new Date(props.previsao.dt * 1000).toLocaleTimeString()} - ${props.previsao.weather[0].description}`}</Text>
                </View>
                <View style={styles.segundaLinha}>
                    <Text style={styles.valor}>
                        {`${props.previsao.main.temp_min}`}
                    </Text>
                    <Text style={styles.valor}>
                        {`${props.previsao.main.temp_max}`}
                    </Text>
                    <Text style={styles.valor}>
                        {`${props.previsao.main.humidity}`}
                    </Text>
                </View>
            </View>
            </View>
        </Cartao>
    );
}

const styles = StyleSheet.create({
    cartao: {
      marginBottom: 8
    },
    tela: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-evenly'
    },
    primeiraLinha: {
      justifyContent: 'center',
      flexDirection: 'row'
    },
    segundaLinha: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 4,
      borderTopWidth: 1,
      borderTopColor: '#DDD'
    },
    imagem: {
      width: 50,
      height: 50
    },
    valor: {
      marginHorizontal: 2
    }
  });

export default PrevisaoItem;
