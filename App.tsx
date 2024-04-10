import React, { useState } from "react";
import { View, Text, Button, TextInput, FlatList, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import styles from "./assets/styles/main";

const App = () => {

  const [item, setItem] = useState('');
  const [itens, setItens] = useState([]);

  const handleAddItem = () => {
    if(item.trim() != '') {
      setItens(list => [...list, item]);
      setItem('');
    }
  }

  return  (
    <NavigationContainer>
      <View style={styles.container}>
          <View style={styles.header}>
              <Image source={require('./assets/favicon.png')} style={{width: 45, height: 45 }} />
              <Button title="Adicionar" onPress={handleAddItem}/>
            </View>

            <View style={styles.inputArea}>
                <Text style={styles.inputAreaTitle}>FAÇA SUA LISTA</Text>
                <TextInput style={styles.input}
                  placeholder="Digite um item"
                  onChangeText={(t)=>setItem(t)}
                  value={item}
                />
            </View>
            
            <FlatList 
              data={itens}
              renderItem={({item}) => (
                <View style={styles.list}>
                  <Text style={styles.ingrediente}>{item}</Text>
                </View>
              )}
            />
      </View>
        
    </NavigationContainer>
  );
}

export default App;
