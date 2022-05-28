import React, {useState} from'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,} from 'react-native';
import { TouchableOpacity } from 'react-native';
import Cep from './components/Cep';
import Api from './components/Api';



export default function App() {
  const [cep, setCep] = useState(0);
  const [inputCep, setInputCep] = useState(0);
  async function carregaCep(){
    const response = await Api.get('ws/'+inputCep+'/json/');
    setCep(response.data);
  }
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.p1}>Digite seu CEP </Text>
        <TextInput style={styles.input}
                  placeholder="Digite seu cep ..."
                  onChangeText={(data)=>setInputCep(data)}
        />
        <StatusBar style="auto" />
      
        <TouchableOpacity style={styles.botao}
          onPress={carregaCep}>
        <Text style={styles.textoB}>Buscar</Text>
        </TouchableOpacity>

        <Cep data={cep} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0304',
    alignItems: 'center',
    justifyContent: 'center',
  },
  p1: {
    fontSize: 20,
    color: '#ff0000',
    marginBottom: 30,
    marginTop: 10

  },

  box1:{
    borderWidth: 2,
    borderColor: '#000',
    width: 400,
    height: 350,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor:'#cc000',

  },
  botao:{
    borderWidth:2,
    borderRadius: 10,
    width: 90,
    height: 30,
    alignItems:'center',
    justifyContent:'center',
    textAlign: 'center',
    marginTop: 40
  },
  textoB:{
    fontSize: 20,
  },
  input: {
    borderWidth: 2,
    width: 160,
    height:30,
    fontSize:18,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center'
  }
});
