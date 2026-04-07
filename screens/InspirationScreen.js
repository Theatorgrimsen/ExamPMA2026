import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function ProfileScreen({ catName, setCatName }) {
  return (
    <View
      style={styles.container}
      accessible
      accessibilityRole="form"
      accessibilityLabel="My Profile form"
      accessibilityHint="Edit your cat's profile information"
    >
      <Text
        style={styles.title}
        accessibilityRole="header"
        accessibilityLabel="My Profile"
      >
        My Profile
      </Text>

      <Text
        style={styles.label}
        accessibilityLabel="Your cat's name label"
      >
        Your cat's Name:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your cat's name"
        value={catName}
        onChangeText={setCatName}
        accessibilityRole="text"
        accessibilityLabel="Cat name input"
        accessibilityHint="Double tap to edit. Type your cat’s name."
        returnKeyType="done"
      />
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
    fontSize: 32,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: '800',
    color: '#2C2C2C',
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
    color: '#5A5A5A',
  },
  input: {
    borderWidth: 2,
    borderColor: '#8C4A1E', 
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    fontSize: 18,
    color: '#2C2C2C', 
    elevation: 2,
  },
});
