import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ catName }) {
  const navigation = useNavigation();

  return (
    <View
      style={styles.container}
      accessible
      accessibilityLabel="Cat Tracker App home"
      accessibilityHint="Summary of your cat's profile and daily data"
    >
      <Text
        style={styles.title}
        accessibilityRole="header"
        accessibilityLabel="Cat Tracker App"
      >
        🐱 Cat Feeding Tracker
      </Text>

      <Image
        style={styles.mainImage}
        source={{
          uri: "https://images.pexels.com/photos/14660913/pexels-photo-14660913.jpeg"
        }}
        accessibilityRole="image"
        accessibilityLabel="A cat profile image"
        accessibilityHint="Decorative image for the cat profile"
      />

      {/* Card: Cat Name */}
      <View
        style={styles.card}
        accessible
        accessibilityRole="summary"
        accessibilityLabel="Cat name"
        accessibilityHint={
          catName
            ? `Your cat's name is ${catName}`
            : "No cat name has been added yet"
        }
      >
        <Text style={styles.cardLabel}>Cat Name</Text>
        <Text style={styles.cardValue}>
          {catName ? (
            catName
          ) : (
            <Text
              style={styles.fallbackValue}
              accessibilityLabel="No cat name added yet"
            >
              No cat name added yet...
            </Text>
            // The block above evaluates the following
            // Is there a catName? if yes (here shown with ?), then show that catName
            // If not (here shown with : ) then show this <Text> component with special styling
          )}
        </Text>
      </View>

      {/* Card: Weight */}
      <View
        style={styles.card}
        accessible
        accessibilityRole="summary"
        accessibilityLabel="Cat weight"
        accessibilityHint="Displays current cat weight"
      >
        <Text style={styles.cardLabel}>⚖️ Cat Weight</Text>
        <Text
          style={styles.cardValue}
          accessibilityLabel="Cat weight 4 point 2 kilograms"
        >
          4.2 kg
        </Text>
      </View>

      {/* Card: Food Today */}
      <View
        style={styles.card}
        accessible
        accessibilityRole="summary"
        accessibilityLabel="Food today"
        accessibilityHint="Shows how much food the cat has eaten today"
      >
        <Text style={styles.cardLabel}>🍽️ Food Today</Text>
        <Text
          style={styles.cardValue}
          accessibilityLabel="Food today 60 grams"
        >
          60 g
        </Text>
      </View>

      <TouchableOpacity
        style={styles.historyButton}
        onPress={() => navigation.navigate('History')}
        accessibilityRole="button"
        accessibilityLabel="Open feeding history"
      >
        <Text style={styles.historyButtonText}>View Feeding History</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F3EB', 
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '800',
    color: '#2C2C2C', 
  },
  mainImage: {
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20,
  },

  // Card styling for each data point
  card: {
    backgroundColor: '#FFFFFF', 
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#A46028', 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardLabel: {
    fontSize: 16,
    color: '#5A5A5A',
    marginBottom: 6,
    fontWeight: '600',
  },
  cardValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2C2C2C',
  },
  // style for when there is no catname given
  fallbackValue: {
    color: '#000000',
    fontSize: 13,
    opacity: 0.5
  },
  historyButton: {
    backgroundColor: '#B3541E',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 6,
  },
  historyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
