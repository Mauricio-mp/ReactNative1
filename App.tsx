/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{ useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  TextInput,
  Alert,
  NativeModules,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

buttonClickListener = () =>{
  const {CalendarModule} = NativeModules;
  CalendarModule.createCalendarEvent('Denis', 'testLocation',eventId => {
    Alert.alert('Titulo',`Created a new event with id ${eventId}`);
  },
  );
  
}

pruebaBoton = async () =>{
  const {CalendarModule} = NativeModules;
  try {
    const eventId = await CalendarModule.createCalendarpromise(
      'Denis ',
      'Lopez',
    );
    console.log(`Created a new event with id ${eventId}`);
    Alert.alert('Alert Title',`Created a new event with id ${eventId}`, [
      {text: 'Mas Tarde', onPress: () => console.log('mas tarde Pressed')},
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  } catch (e) {
    console.error(e);
  }

 
}

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.black : Colors.white,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.dark : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}




function Main(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [text,setText] = useState('');
  const [updated, setUpdated] = useState(text);
  const handleChange = (event) => {
    setText(event.target.value);
  };


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  
return (
  <SafeAreaView>
  <StatusBar
  
  />
  <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    style={backgroundStyle}>
  
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.lighter : Colors.darker,
        
      }}>
      <Section title="Step One" style={styles.contenedor}>
        Edit <Text style={styles.highlight}>App.tsx</Text> to change this
        screen and then come back to see your edits.

      </Section>

      <Section>
      <Text>Texto 1</Text>

      </Section>
      <View >
      <TextInput 
      multiline={true}
       style={{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color:'black',
         
       }}
       defaultValue="c<fdfghdhdfhdf"
     />
    
      
     </View>

     <Section>
      <Text>Texto 2</Text>

      </Section>
      <View>
      <TextInput
      keyboardType="phone-pad"
       style={{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color:'black',
         
       }}
       defaultValue="c<fasfasfafsa"
     />
    
      
     </View>
  
      <Section>
     <View>
     
     </View>
      </Section >
      
  <Section>
    <View style={styles.boton}>
    <TouchableOpacity   onPress={this.buttonClickListener} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>sdfa</Text>
  </TouchableOpacity>
    </View>
   
  </Section>
 <Section>
    <View style={styles.boton}>
    <TouchableOpacity  onPress={this.pruebaBoton} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>Pruebaaaaaa</Text>
  </TouchableOpacity>
    </View>
   
  </Section>
    </View>
   
  </ScrollView>
</SafeAreaView>

);
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 15,
    backgroundColor: "#009688",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 52
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  contenedor:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  
  },
  boton:{
  },
  sectionContainer: {
    

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    color:'black',
  },
});

export default Main;
