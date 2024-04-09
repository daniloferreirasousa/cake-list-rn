import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./assets/styles/main";

const App = () => {

  const [ingrediente, setIngrediente] = useState('');
  const [ingredientes, setIngredientes ] = useState([]);

  const handleAddItem = () => {
    if(ingrediente != '') {
      ingredientes.push(ingrediente);
      setIngrediente('');
    }
  }

  return  (
    <NavigationContainer>
      <SafeAreaView>
        <View style={styles.header}>
            <Text>Exercício</Text>
            <Button title="Adicionar" onPress={handleAddItem}/>
          </View>

          <View style={styles.inputArea}>
              <Text style={styles.inputAreaTitle}>Faça um Bolo</Text>
              <TextInput style={styles.input}
                placeholder="Digite um ingrediente"
                onChangeText={(t)=>setIngrediente(t)}
                value={ingrediente}
              />
          </View>
          
          <FlatList 
            data={ingredientes}
            renderItem={({item}) => (
              <View style={styles.list}>
                <Text style={styles.ingrediente}>{item}</Text>
              </View>
            )}
          />
      </SafeAreaView>
        
    </NavigationContainer>
  );
}



export default App;