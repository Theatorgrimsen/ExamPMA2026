import { View, Text, Image, StyleSheet, ScrollView, Pressable, TouchableOpacity } from 'react-native';

function InspirationCard({ title, icon, points, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.7 : 1}
      onPress={onPress}
      style={styles.card}
      accessible={true}
      accessibilityRole={onPress ? "button" : "none"}
      accessibilityLabel={`Category: ${title}. ${points.length} inspiration points available.`}
      accessibilityHint={onPress ? "Opens details for this category" : ""}
    >
      <View style={styles.cardTitleRow}>
        <Image source={icon}
          style={styles.image}
          accessibilityLabel={`${title} icon`}
        />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>

      <View style={styles.ContainerPoints}>
        {points.map((item, index) => (
          <View key={index} style={styles.pointRow}>
            <Image
              source={require('../assets/Point.png')}
              style={styles.image2}
              accessibilityLabel="Bullet point"
            />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
}

export default function InspirationScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.titleRow}>
          <Image
            source={require('../assets/inspiration.png')}
            style={styles.image}
            accessibilityLabel="Inspiration page icon"
          />
          <Text style={styles.title}
            accessibilityRole="header"
          >Inspiration
          </Text>
        </View>

        <Text style={styles.subTitle}>
          Long-term goals and ideas to inspire your journey
        </Text>
      </View>

      {/* Cards with pop-ups */}
      <InspirationCard
        title="Health & Wellness"
        icon={require('../assets/Health.png')}
        onPress={() => navigation.navigate('HealthDetail')}
        points={[
          "Exercise 3 times a week",
          "Drink 8 glasses of water daily",
          "Meditate for 10 minutes each morning",
          "Get 7-8 hours of sleep consistently",
        ]}
      />

      <InspirationCard
        title="Career & Finance"
        icon={require('../assets/Finance.png')}
        onPress={() => navigation.navigate('CareerDetail')}
        points={[
          "Build a professional portfolio",
          "Take an online course",
          "Save 20% of monthly income",
          "Network with 5 new people monthly",
        ]}
      />

      <InspirationCard
        title="Learning & Growth"
        icon={require('../assets/Learning.png')}
        onPress={() => navigation.navigate('LearningDetail')}
        points={[
          "Read more books",
          "Practice mindfulness",
          "Learn a new language",
          "Take an online course"
        ]}
      />

      {/* Cards without pop-ups */}
      <InspirationCard
        title="Fitness Goals"
        icon={require('../assets/Fitness.png')}
        points={[
          "Run a 5K race",
          "Do 50 push-ups without stopping",
          "Try yoga or pilates",
          "Walk 10,000 steps daily",
        ]}
      />
      <InspirationCard
        title="Social & Relationships"
        icon={require('../assets/Social.png')}
        points={[
          "Call a friend or family member weekly",
          "Volunteer in your community",
          "Host a monthly gathering",
          "Send handwritten thank you notes",
        ]}
      />
      <InspirationCard
        title="Social & Relationships"
        icon={require('../assets/inspiration.png')}
        points={[
          "Call a friend or family member weekly",
          "Volunteer in your community",
          "Host a monthly gathering",
          "Send handwritten thank you notes",
        ]}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FAFAF9',
  },

  headerContainer: {
    marginTop: 60,
    marginBottom: 40,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  image: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginRight: 12,
  },

  image2: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1C1C1E',
  },

  subTitle: {
    fontSize: 14,
    color: '#79716B',
  },

  card: {
    borderWidth: 1,
    borderColor: '#E7E5E4',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 20,
    marginBottom: 16,
  },

  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2C2C',
  },

  ContainerPoints: {
    marginTop: 6,
  },

  pointRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  pointText: {
    fontSize: 14,
    color: '#79716B',
  },
});