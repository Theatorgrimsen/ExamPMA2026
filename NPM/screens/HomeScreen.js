import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ tasks, onToggleTask }) {
    const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Today's Tasks</Text>
        <Text style={styles.date}>
         {new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
  })}
</Text>
      </View>

      {tasks.length > 0 ? (
        <View style={styles.taskSection}>
          {tasks.map((task) => (
            <View key={task.id} style={styles.taskCard}>
              <View style={styles.taskTitleRow}>
                <TouchableOpacity
                  style={[
                    styles.checkbox,
                    task.completed && styles.checkboxChecked,
                  ]}
                  onPress={() => onToggleTask(task.id)}
                  hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} //makes the pressable area bigger
                  accessibilityRole="button"
                  accessibilityLabel={
                    task.completed
                      ? `Mark ${task.title} as not completed`
                      : `Mark ${task.title} as completed`
                  }
                  accessibilityHint="Toggles the task completion status"
                >
                  {task.completed ? (
                    <Text style={styles.checkboxMark}>✓</Text>
                  ) : null}
                </TouchableOpacity>
                <Text
                  style={[
                    styles.taskTitle,
                    task.completed && styles.taskTitleCompleted,
                  ]}
                >
                  {task.title}
                </Text>
              </View>

              {!!task.description && (
                <View style={styles.taskDescriptionRow}>
                  <Text
                    style={[
                      styles.taskDescription,
                      task.completed && styles.taskDescriptionCompleted,
                    ]}
                  >
                    {task.description}
                  </Text>
                </View>
              )}
            </View>
          ))}
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FAFAF9',
    paddingBottom: 24,
  },
  headerContainer: {
    paddingHorizontal: 25,
    marginTop: 80, 
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1C1C1E',
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
    marginBottom: 16,
  },
  taskTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
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
  checkboxChecked: {
    backgroundColor: '#2C2C2C',
    borderColor: '#2C2C2C',
  },
  checkboxMark: {
    fontSize: 10,
    color: '#FFFFFF',
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
  taskTitleCompleted: {
    color: '#A8A29E',
    textDecorationLine: 'line-through',
  },
  taskDescription: {
    color: '#79716B',
    fontSize: 14,
    lineHeight: 20,
  },
  taskDescriptionCompleted: {
    color: '#A8A29E',
    textDecorationLine: 'line-through',
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
