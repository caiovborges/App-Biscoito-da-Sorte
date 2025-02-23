import React, { useState } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity,Alert } from "react-native";

function App(){
  const [img, setImg] = useState(require('./src/biscoito.png'))
  const [textofrase, setTextoFrase] = useState('');
  const [frases,setfrases] = useState(["A sorte favorece os corajosos.",
      "Grandes mudanças estão a caminho - esteja pronto!",
     " O sucesso é a soma de pequenos esforços diários.",
      "Acredite em você, e o universo abrirá caminhos inesperados.",
     " A felicidade está onde você decide enxergá-la.",
      "Cada novo dia é uma chance para recomeçar.",
      "Seu esforço hoje será sua recompensa amanhã.",
      "Seja a mudança que deseja ver no mundo.",
      "Oportunidades surgem para quem está preparado.",
      "Um sorriso pode abrir portas que nem mesmo a chave conseguiria.",
      "A paciência e a perseverança te levarão longe.",
      "O melhor ainda está por vir!",
      "Pequenos gestos podem trazer grandes alegrias.",
      "Você está mais perto do que imagina do seu sonho.",
      "Boas energias atraem coisas incríveis - continue espalhando positividade!"]);
  


  function quebrarBiscoito(){
    let numeroAleatorio = Math.floor(Math.random()*frases.length )
    let fraseEscolhida = frases[numeroAleatorio];
    
    
    if(frases.length === 0){
      setTextoFrase("Acabaram as mensagem da sorte, Volte Amanhã :)");
      setImg(require('./src/biscoitoAberto.png'))
      return
      }
      setTextoFrase(fraseEscolhida);
      setImg(require('./src/biscoitoAberto.png'))
      let novasFrases = frases.filter((_, index) => index !== numeroAleatorio);
      setfrases(novasFrases);
    }

  function reiniciarBiscoito(){
    setfrases([
      "A sorte favorece os corajosos.",
      "Grandes mudanças estão a caminho - esteja pronto!",
     " O sucesso é a soma de pequenos esforços diários.",
      "Acredite em você, e o universo abrirá caminhos inesperados.",
     " A felicidade está onde você decide enxergá-la.",
      "Cada novo dia é uma chance para recomeçar.",
      "Seu esforço hoje será sua recompensa amanhã.",
      "Seja a mudança que deseja ver no mundo.",
      "Oportunidades surgem para quem está preparado.",
      "Um sorriso pode abrir portas que nem mesmo a chave conseguiria.",
      "A paciência e a perseverança te levarão longe.",
      "O melhor ainda está por vir!",
      "Pequenos gestos podem trazer grandes alegrias.",
      "Você está mais perto do que imagina do seu sonho.",
      "Boas energias atraem coisas incríveis - continue espalhando positividade!"
    ]);
    setTextoFrase("");
    setImg(require('./src/biscoito.png'));
  }

  
  return(
    <View style={styles.container}>
      <Image
      source={img}
      style={styles.img}
      />

      <Text style={styles.textofrase}>{textofrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={()=> quebrarBiscoito()}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: "#121212"}]} onPress={()=> reiniciarBiscoito()}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color: "#121212"}]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  img:{
    width: 230,
    height: 230,
  },
  textofrase:{
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center"
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btnTexto:{
    fontSize: 17,
    fontWeight: "bold",
    color: "#dd7b22"
  }
})
  
export default App;

