import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function LearningScreen({ navigation }) {
  return (
    <View style={styles.modalContainer}>
      {/* The Handle bar at the top */}
      <View style={styles.handleBar} />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
             <Image source={require('../../assets/Learning.png')} 
             style={styles.icon} />
             accessibilityLabel="Learning and growth icon"
          <Text style={styles.title}
          accessibilityRole="header"
          >Learning & Growth</Text>
        </View>

        <Text style={styles.sectionTitle}>❤️ Why this matters</Text>
        <Text style={styles.description}>
          Learning and personal growth can help you adapt, discover new interests, and build confidence in your abilities. Growing as a person often means becoming more reflective, more capable, and more open to change. It also helps you keep developing beyond your current routines.
        </Text>

        <Image 
          source={require('../../assets/health_detail_image.png')} //standard image for inspiration pop ups
          style={styles.mainImage} 
          accessibilityLabel="Illustration representing personal development and education"
        />

        <Text style={styles.sectionTitle}>Benefits</Text>
        <Text style={styles.bullet}>• Increased confidence</Text>
        <Text style={styles.bullet}>• Stronger problem-solving skills</Text>
        <Text style={styles.bullet}>• More curiosity and motivation</Text>
        <Text style={styles.bullet}>• A deeper sense of personal progress</Text>
        <Text style={styles.bullet}>• Greater adaptability in new situations</Text>
        <Text style={styles.sectionTitle}>What this category is for?</Text>
        <Text style={styles.bullet}>This category supports goals connected to education, creativity, new skills, and self-development.</Text>

        {/* Custom "X" or Close button */}
        <TouchableOpacity style={styles.closeButton} 
        onPress={() => navigation.goBack()}>
          accessibilityRole="button"
          accessibilityHint="Closes this learning information screen and returns to the previous page"
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  handleBar: {
    width: 60,
    height: 5,
    backgroundColor: '#E5E5E5',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 15,
  },
  content: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 15,
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },
  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginVertical: 20,
  },
  bullet: {
    fontSize: 15,
    color: '#444',
    marginBottom: 8,
  },
  closeButton: {
    marginTop: 30,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
  },
  closeText: {
    fontWeight: '600',
    color: '#333',
  }
});