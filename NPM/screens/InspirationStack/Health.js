import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function HealthScreen({ navigation }) {
  return (
    <View style={styles.modalContainer}>
      {/* The Handle bar at the top */}
      <View style={styles.handleBar} />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Image source={require('../../assets/Health.png')}
            style={styles.icon} 
          accessibilityLabel="Health and wellness icon"
          />

          <Text style={styles.title}>Health & Wellness</Text>
        </View>

        <Text style={styles.sectionTitle}>❤️ Why this matters</Text>
        <Text style={styles.description}>
          Health and wellness are important because they affect almost every part of daily life. When you take care of your body and mind, you often get more energy, better concentration, improved sleep, and a stronger sense of balance. Healthy routines can also reduce stress and make it easier to handle school, work, and personal responsibilities.
        </Text>

        <Image
          source={require('../../assets/health_detail_image.png')} // Standard image for inspiration pop ups
          style={styles.mainImage}
          accessibilityLabel="Illustration showing physical and mental well-being"
        />

        <Text style={styles.sectionTitle}>Benefits</Text>
        <Text style={styles.bullet}>• More energy throughout the day</Text>
        <Text style={styles.bullet}>• Better sleep and recovery</Text>
        <Text style={styles.bullet}>• Improved focus and concentration</Text>
        <Text style={styles.bullet}>• Lower stress levels</Text>
        <Text style={styles.bullet}>• A stronger sense of physical and mental balance</Text>
        <Text style={styles.sectionTitle}>What this category is for?</Text>
        <Text style={styles.bullet}>This category is here to inspire habits that support your well-being over time. It is not about being perfect, but about building routines that help you feel better in everyday life.</Text>

        {/* Custom "X" or Close button */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
          accessibilityRole="button"
          accessibilityHint="Closes this wellness information screen and returns to the previous page"
          >
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