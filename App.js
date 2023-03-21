import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {Vimeo} from 'react-native-vimeo-iframe';
import {styles} from './styles';
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";


const App = () => {
  const [orientation, setOrientation] = useState(1);
  useEffect(() => {
    lockOrientation();
  }, []);
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
  const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };

  const videoCallbacks = {
    play: (data: any) => console.warn('play: ', data),
    pause: (data: any) => console.warn('pause: ', data),
    fullscreenchange: (data: any) => console.warn('fullscreenchange: ', data),
    ended: (data: any) => console.warn('ended: ', data),
    controlschange: (data: any) => console.warn('controlschange: ', data),
  };

  return (
    <SafeAreaView style={styles.container}>



     
         <View style={styles.leftContainer}>
             <Text style={styles.title}>Vimeo Iframe Landscape Test</Text>
         </View>

         <View style={styles.videosContainer}>
          <Vimeo 
            videoId={'787795669'} 
            handlers={videoCallbacks} 
            params={'controls=1'}/>
          
         
        </View>
       
        
        
      
    </SafeAreaView>
  );
};


export default App;
