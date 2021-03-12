import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import keys from './keys';

export default function App() {

  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=";
  const apiKey = keys.weatherMapApiKey;

  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          style={styles.nomeCidade}
          placeholder="Digite o nome de uma cidade"
        />
        <Button
          title="Ok"
        />
      </View>
      <FlatList
      
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
    flexGrow: 0.9
  },
  entrada: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
});
