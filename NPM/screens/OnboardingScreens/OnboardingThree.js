import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingThree() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Motivation.png')}
        style={styles.image} />
      accessibilityLabel="Illustration showing a person being inspired"

      <Text style={styles.title}
        accessibilityRole="header"
      >Track progress & find motivation
      </Text>
      <Text style={styles.description}>
        Check off completed tasks to see how far you've come. If you ever
        feel stuck, visit the "Inspiration" tab to get the boost you need to reach your goals.
      </Text>

      <View style={styles.footer}>
        accessible={true}
        accessibilityLabel="Onboarding navigation footer"
        <TouchableOpacity
          style={styles.footerSide}
          onPress={() => navigation.replace('MainTabs')}
          accessibilityRole="button"
          accessibilityHint="Skips the remaining introduction and enters the app"
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <View style={styles.pagination}>
          accessibilityLabel="Page 3 of 3"
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
        </View>

        <Pressable
          style={styles.footerSideWide}
          onPress={() => navigation.replace('MainTabs')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  footer: {
    position: 'absolute',
    left: 40,
    right: 40,
    bottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerSide: {
    width: 72,
  },
  skipText: {
    color: '#2D2B2E',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'left',
  },
  image: {
    width: 210,
    height: 210,
    borderRadius: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 24,
    color: '#2D2B2E',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6C6C6C',
    marginBottom: 24,
    lineHeight: 26,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
  },
  dotActive: {
    backgroundColor: '#2D2B2E',
  },
  buttonText: {
    color: '#2D2B2E',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'right',
  },
});
