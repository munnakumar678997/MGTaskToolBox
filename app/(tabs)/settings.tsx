import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Settings</Text>
      <View style={styles.card}>
        <Text style={styles.label}>App Name</Text>
        <Text style={styles.value}>MGTaskToolBox</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Developer</Text>
        <Text style={styles.value}>Munna Agent (MG)</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Version</Text>
        <Text style={styles.value}>1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: COLORS.white, marginBottom: 24, marginTop: 10 },
  card: { backgroundColor: COLORS.surface, borderRadius: 12, padding: 16, marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between' },
  label: { fontSize: 15, color: COLORS.textMuted },
  value: { fontSize: 15, color: COLORS.white, fontWeight: '600' },
});
