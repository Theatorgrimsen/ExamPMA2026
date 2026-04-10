import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function AddTaskScreen({
  taskTitle,
  setTaskTitle,
  taskDescription,
  setTaskDescription,
  onAddTask,
}) {
  const navigation = useNavigation();

  function handleCancel() {
    setTaskTitle('');
    setTaskDescription('');
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      {/* Title and subtitle */}
      <View style={styles.header}>
        <Text style={styles.title}>Add New Task</Text>
        <Text style={styles.subtitle}>Create a task to accomplish</Text>
      </View>

      {/* White card */}
      <View style={styles.card}>
        <Text style={styles.label}>Task Title</Text>
        <TextInput
          style={styles.input}
          placeholder="What do you need to do?"
          value={taskTitle}
          onChangeText={setTaskTitle}
          returnKeyType="done"
        />

        <Text style={styles.label}>Description (optional)</Text>
        <TextInput
          style={[styles.input, styles.notesInput]}
          placeholder="Add any additional details..."
          value={taskDescription}
          onChangeText={setTaskDescription}
          multiline
          returnKeyType="done"
        />
      </View>

      {/* Bottom navigation */}
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={styles.cancelButton}
          onPress={handleCancel} 
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.saveButton}
          onPress={onAddTask} 
        >
          <Text style={styles.saveButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 24,
    justifyContent: 'flex-start',
    paddingTop: 80,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  subtitle: {
    fontSize: 16,
    color: '#8E8E93',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: '#3A3A3C',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    color: '#1C1C1E',
    marginBottom: 16,
  },
  notesInput: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginRight: 10,
  },
  cancelButtonText: {
    color: '#1C1C1E',
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#2C2C2E',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginLeft: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
