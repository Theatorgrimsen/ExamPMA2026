import { ScrollView, StyleSheet, Text, View } from 'react-native';

function HistoryTaskCard({ task }) {
  function formatCompletedDate(dateString) {
    if (!dateString) {
      return '';
    }

    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  }

  return (
    <View style={styles.taskCard}>
      accessible={true}
      accessibilityLabel={`Completed task: ${task.title}`}

      <View style={styles.taskTitleRow}>
        <View
          style={styles.checkboxChecked}
          accessibilityLabel="Completed checkmark"
        >
          <Text style={styles.checkboxMark}>✓</Text>
        </View>

        <View style={styles.textWrapper}>
          <Text style={styles.taskTitle}>{task.title}</Text>
          <Text style={styles.completedText}>
            Completed {formatCompletedDate(task.completedAt)}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function HistoryScreen({ tasks }) {
  const completedTasks = tasks
    .filter((task) => task.completed)
    .slice()
    .reverse();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}
        accessibilityRole="header"
        >History
        </Text>
        <Text style={styles.subtitle}>Your completed tasks</Text>
      </View>

      {completedTasks.length > 0 ? (
        <View style={styles.taskSection}>
          {completedTasks.map((task) => (
            <HistoryTaskCard key={task.id} task={task} />
          ))}
        </View>
      ) : (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>No completed tasks yet.</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAF9',
  },
  content: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  headerContainer: {
    paddingHorizontal: 18,
    marginTop: 80,
    marginBottom: 24,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#A8A29E',
  },
  taskSection: {
    paddingHorizontal: 16,
  },
  taskCard: {
    borderWidth: 1,
    borderColor: '#E7E5E4',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  taskTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkboxChecked: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  checkboxMark: {
    fontSize: 10,
    color: '#22C55E',
    fontWeight: '700',
  },
  textWrapper: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  completedText: {
    fontSize: 13,
    color: '#A8A29E',
  },
  emptyBox: {
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E7E5E4',
    padding: 18,
  },
  emptyText: {
    textAlign: 'center',
    color: '#79716B',
    fontSize: 15,
  },
});
