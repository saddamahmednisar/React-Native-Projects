
import React, { useState } from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground]=useState("#FFFFFF")
   
  const generateColor = () =>{
    const hexRange = "0123456789ABCDEF"
    let color ="#"

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random()*16)]
      
    }
   
    
    setRandomBackground(color)
    console.log(color);
    
  }
 
  return (
     <>
     <StatusBar backgroundColor={randomBackground}/>
     <View style={[styles.container, {backgroundColor: randomBackground}]}>
     <TouchableOpacity onPress={generateColor}>
      <View style={styles.actionbtn}>
        <Text style={styles.actionbtnText}>Press Me</Text>
      </View>
     </TouchableOpacity>
     </View>
     </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:"center",
  },
  actionbtn:{
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionbtnText:{
    fontSize: 24,
    color:"#FFFFFF",
    textTransform:"uppercase"
  }
});

export default App;
console.log("end");
