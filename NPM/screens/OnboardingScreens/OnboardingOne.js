import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingOne() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.replace('MainTabs')}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Welcome to the cat feeder app!</Text>
      <Text style={styles.description}>
        This app will solve all your problems when it comes to knowing who fed your cat.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('OnboardingTwo')}
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
    height: 180,
    borderRadius: 16,
    marginBottom: 20,
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