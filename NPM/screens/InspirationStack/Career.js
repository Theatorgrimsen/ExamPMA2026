import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function CareerScreen({ navigation }) {
  return (
    <View style={styles.modalContainer}>
      {/* The Handle bar at the top */}
      <View style={styles.handleBar} />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
             <Image 
             source={require('../../assets/Finance.png')} 
             style={styles.icon} />
             accessibilityLabel="Finance icon"
          <Text 
          style={styles.title}>
            accessibilityRole="header"
            Career & Finance
          </Text>
        </View>

        <Text style={styles.sectionTitle}>❤️ Why this matters</Text>
        <Text style={styles.description}>
          Career and financial goals can create a stronger sense of stability and direction. When you work toward progress in these areas, you may feel more confident, more independent, and less overwhelmed by uncertainty. Even small actions, like saving a little money or improving a skill, can build momentum over time.
        </Text>

        <Image 
          source={require('../../assets/health_detail_image.png')} //standard image for inspiration pop ups
          style={styles.mainImage} 
          accessibilityLabel="Illustration of career and financial stability"
        />

        <Text style={styles.sectionTitle}>Benefits</Text>
        <Text style={styles.bullet}>• Greater financial security</Text>
        <Text style={styles.bullet}>• More confidence in your future</Text>
        <Text style={styles.bullet}>• Better planning and structure</Text>
        <Text style={styles.bullet}>• Reduced stress about money or work</Text>
        <Text style={styles.bullet}>• A clearer sense of progress and purpose</Text>
        
        <Text style={styles.sectionTitle}>What this category is for?</Text>
        <Text style={styles.bullet}>This category helps users focus on goals related to professional growth, money habits, and long-term stability.</Text>

        {/* Close button */}
        <TouchableOpacity 
          style={styles.closeButton} 
          onPress={() => navigation.goBack()}>
          accessibilityRole="button"
          accessibilityHint="Closes this screen and returns to the previous page"
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