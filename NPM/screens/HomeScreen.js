import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ catName }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Today's Tasks</Text>
        <Text style={styles.date}>Tuesday, March 24, 2026</Text>
      </View>

      {/* no tasks*/}
      <View style={styles.content}>
        <Image  style={styles.clock}
            source={require('./Icons/clock.png')}
          />
        <Text style={styles.idleOne}>No tasks for today</Text>
        <Text style={styles.idleTwo}>You're all caught up! Add some tasks to get started.</Text>
      </View>

      {/* navigation bar*/}
      <View style={styles.navigation}>
        <Image
          source={require('./Icons/home.png')}
          style={styles.homenavigation}
          resizeMode="contain"
        />
         <Image
          source={require('./Icons/add.png')}
          style={styles.addnavigation}
          resizeMode="contain"
        />
         <Image
          source={require('./Icons/inspire.png')}
          style={styles.inspirenavigation}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    paddingHorizontal: 25,
    marginTop: 80, 
  },
  header: {
    color: '#292524',
    fontWeight: '600', 
    fontSize: 24,
    marginBottom: 8,
  },
  date: {
    color: '#79716B',
    fontSize: 16,
    fontWeight: '400',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
clock: {
    width: 80,          
    height: 80,         
    marginBottom: 20,   // Space betweek icon and text
  },
  idleOne: {
    color: '#A8A29E',   
    fontSize: 18,
    fontWeight: '500',  // Text a little bit bolder than the text underneath
    marginBottom: 8,
  },
  idleTwo: {
    color: '#D6D3D1',
    fontSize: 15,
    textAlign: 'center', 
    paddingHorizontal: 40, 
  },
 navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center',
    height: 90,                     
    paddingBottom: 20,             
  },
  homenavigation: {
    width: 60,
    height: 60,
    tintColor: '#292524',           
  }, 
  addnavigation: {
    width: 60,                    
    height: 60,
    tintColor: '#79716B', 
  },
  inspirenavigation: {
    width: 60,
    height: 60,
    tintColor: '#79716B', 
  }
});