import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Tool } from '../../constants/tools';
import { COLORS } from '../../constants/colors';

type ToolCardProps = {
  tool: Tool;
  onPress: () => void;
};

export default function ToolCard({ tool, onPress }: ToolCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.75}>
      <Text style={styles.icon}>{tool.icon}</Text>
      <Text style={styles.name}>{tool.name}</Text>
      <Text style={styles.description}>{tool.description}</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{tool.category}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    width: '48%',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  icon: { fontSize: 36, marginBottom: 10 },
  name: { fontSize: 15, fontWeight: '700', color: COLORS.white, marginBottom: 4 },
  description: { fontSize: 12, color: COLORS.textMuted, lineHeight: 16, marginBottom: 10 },
  badge: { backgroundColor: COLORS.card, borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3, alignSelf: 'flex-start' },
  badgeText: { fontSize: 10, color: COLORS.accent, fontWeight: '600' },
});
