import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ taskTitle, taskDescription }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Today's Tasks</Text>
        <Text style={styles.date}>Tuesday, March 24, 2026</Text>
      </View>

      {taskTitle ? (
        <View style={styles.taskSection}>
          <View style={styles.taskCard}>
            <View style={styles.taskTitleRow}>
              <View
                style={styles.checkbox}
                accessibilityLabel="Unchecked task checkbox"
              >
                <Text style={styles.checkboxMark}>✓</Text>
              </View>
              <Text style={styles.taskTitle}>{taskTitle}</Text>
            </View>

            {!!taskDescription && (
              <View style={styles.taskDescriptionRow}>
                <Text style={styles.taskDescription}>{taskDescription}</Text>
              </View>
            )}
          </View>
        </View>
      ) : (
        <View style={styles.content}>
          <Image
            style={styles.clock}
            source={require('../assets/clock.png')}
            accessibilityLabel="Clock icon showing that there are no tasks"
          />
          <Text style={styles.idleOne}>No tasks for today</Text>
          <Text style={styles.idleTwo}>
            You're all caught up! Add some tasks to get started.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAF9',
  },
  headerContainer: {
    paddingHorizontal: 25,
    marginTop: 80, 
  },
  header: {
    color: '#292524',
    fontWeight: '600', 
    fontSize: 24,
    marginBottom: 8,
  },
  date: {
    color: '#79716B',
    fontSize: 16,
    fontWeight: '400',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  taskCard: {
    borderWidth: 1,
    borderColor: '#E7E5E4',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 20,
  },
  taskTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#D6D3D1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    backgroundColor: '#FAFAF9',
  },
  checkboxMark: {
    fontSize: 10,
    color: '#78716C',
    fontWeight: '500',
  },
  taskDescriptionRow: {
    marginTop: 6,
  },
  clock: {
    width: 80,          
    height: 80,         
    marginBottom: 20,   // Space betweek icon and text
  },
  idleOne: {
    color: '#A8A29E',   
    fontSize: 18,
    fontWeight: '500',  // Text a little bit bolder than the text underneath
    marginBottom: 8,
  },
  idleTwo: {
    color: '#D6D3D1',
    fontSize: 15,
    textAlign: 'center', 
    paddingHorizontal: 40, 
  },
  taskTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2C2C',
  },
  taskDescription: {
    color: '#79716B',
    fontSize: 14,
    lineHeight: 20,
  },
 navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center',
    height: 90,                     
    paddingBottom: 20,             
  },
  inspirenavigation: {
    width: 60,
    height: 60,
    tintColor: '#79716B', 
  }
});
