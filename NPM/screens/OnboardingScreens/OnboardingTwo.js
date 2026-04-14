import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingTwo() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.replace('MainTabs')}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Image 
      source={require('../../assets/Add.png')} 
      // A note on what is going on here:
      // When giving a relative path, such as the one above, the path is found from where the current file's path
      // This means that to tell the code to show 'entry.png' which is in the assets folder you need to navigate to the assets folder FROM where this file 'OnboardingTwo' is
      // In other words, we need to navigate "up" to 'screens' folder, then up to the 'cat-app-with-onboarding' folder
      // then into the assets folder and to finally reach the entry.png file
      // the '..' (two dots) is the way to tell the path to go "up"
      style={styles.image} />

      <Text style={styles.title}>Begin by logging your feeds in the Feed Log 📝 </Text>
      <Text style={styles.description}>
        After you're done press the Save Entry Feed Button
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('OnboardingThree')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F7F3EB',
  },
  skipButton: {
    position: 'absolute',
    top: 56,
    right: 24,
  },
  skipText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#8C4A1E',
  },
 image: {
    width: 180,
    height: 250,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#8C4A1E',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
    color: '#2C2C2C',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#5A5A5A',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#B3541E',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});