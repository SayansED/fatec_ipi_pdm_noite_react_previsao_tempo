import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PrevisaoItem from './components/PrevisaoItem';
import keys from './keys';

export default function App() {

  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=";
  const apiKey = keys.weatherMapApiKey;

  const [cidade, setCidade] = useState('');
  const capturarCidade = (cidade) => {
    setCidade(cidade);
  }

  const [previsoes, setPrevisoes] = useState([]);

  const obtemPrevisoes = () => {
    setPrevisoes([]);
    const target = `${endPoint}${cidade}&apiid=${apiKey}`;
    fetch(target)
    .then((dados) => dados.json())
    .then((dados) => {
      setPrevisoes(dados["list"])
      setCidade('')
      Keyboard.dismiss()
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          style={styles.nomeCidade}
          placeholder="Digite o nome de uma cidade"
          value={cidade}
          onChangeText={capturarCidade}
        />
        <Button
          title="Ok"
          onPress={obtemPrevisoes}
        />
      </View>
      <FlatList
        data={previsoes}
        renderItem = {
          previsao => (
            /*<Text> { JSON.stringify(previsao) } </Text>*/ /* Obtem representação textual */
            <PrevisaoItem previsao={previsao.item} 
            />
          )
        }
      
      />
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff'
  },
  nomeCidade: {
    padding: 10,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow: 0.9,
    marginBottom: 10
  },
  entrada: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
});
