import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingTwo() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Action.png')}
        style={styles.image}
        accessibilityLabel="Illustration of a person organizing tasks"
      />

      <Text style={styles.title}
        accessibilityRole="header"
      >From thought to action
      </Text>
      <Text style={styles.description}>
        Quickly add tasks with titles and details. Organizing your
        day has never been easier—just head to the "Add" tab and start
        building your list.
      </Text>

      <View
        style={styles.footer}
        accessible={true}
        accessibilityLabel="Onboarding navigation footer"
      >
        <TouchableOpacity
          style={styles.footerSide}
          onPress={() => navigation.replace('MainTabs')}
          accessibilityRole="button"
          accessibilityHint="Skips the introduction and enters the main app"
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <View
          style={styles.pagination}
          accessibilityLabel="Page 2 of 3"
        >
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
        </View>

        <Pressable
          style={styles.footerSide}
          onPress={() => navigation.navigate('OnboardingThree')}
          accessibilityRole="button"
          accessibilityHint="Goes to the next onboarding page"
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
