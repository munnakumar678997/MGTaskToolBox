import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ALL_TOOLS, Tool } from '../../constants/tools';
import { COLORS } from '../../constants/colors';
import ToolCard from '../../components/tools/ToolCard';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>MGTaskToolBox</Text>
        <Text style={styles.subtitle}>by Munna Agent — {ALL_TOOLS.length} tools available</Text>
      </View>

      <FlatList
        data={ALL_TOOLS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ToolCard tool={item} onPress={() => router.push(item.route as any)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { padding: 20, paddingTop: 30 },
  appName: { fontSize: 28, fontWeight: 'bold', color: COLORS.white },
  subtitle: { fontSize: 13, color: COLORS.textMuted, marginTop: 4 },
  list: { padding: 12 },
  row: { justifyContent: 'space-between', paddingHorizontal: 4 },
});
