import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { COLORS } from '../../../constants/colors';

export default function TextToolsScreen() {
  const [input, setInput] = useState('');

  const wordCount = input.trim() === '' ? 0 : input.trim().split(/\s+/).length;
  const charCount = input.length;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={6}
        placeholder="Yahan apna text likho..."
        placeholderTextColor={COLORS.textMuted}
        value={input}
        onChangeText={setInput}
      />

      <View style={styles.stats}>
        <View style={styles.statBox}>
          <Text style={styles.statNum}>{wordCount}</Text>
          <Text style={styles.statLabel}>Words</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNum}>{charCount}</Text>
          <Text style={styles.statLabel}>Characters</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNum}>{input.split('\n').length}</Text>
          <Text style={styles.statLabel}>Lines</Text>
        </View>
      </View>

      <View style={styles.actions}>
        {[
          { label: 'UPPERCASE', fn: () => setInput(input.toUpperCase()) },
          { label: 'lowercase', fn: () => setInput(input.toLowerCase()) },
          { label: 'Clear', fn: () => setInput('') },
        ].map(({ label, fn }) => (
          <TouchableOpacity key={label} style={styles.btn} onPress={fn}>
            <Text style={styles.btnText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {input.length > 0 && (
        <View style={styles.preview}>
          <Text style={styles.previewLabel}>Preview:</Text>
          <Text style={styles.previewText}>{input}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  input: { backgroundColor: COLORS.surface, borderRadius: 14, padding: 16, color: COLORS.white, fontSize: 15, textAlignVertical: 'top', minHeight: 140, borderWidth: 1, borderColor: COLORS.border },
  stats: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
  statBox: { flex: 1, backgroundColor: COLORS.surface, borderRadius: 12, padding: 14, alignItems: 'center', marginHorizontal: 4 },
  statNum: { fontSize: 28, fontWeight: 'bold', color: COLORS.primary },
  statLabel: { fontSize: 12, color: COLORS.textMuted, marginTop: 2 },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
  btn: { flex: 1, backgroundColor: COLORS.card, borderRadius: 10, padding: 12, alignItems: 'center', marginHorizontal: 4 },
  btnText: { color: COLORS.white, fontWeight: '600', fontSize: 13 },
  preview: { backgroundColor: COLORS.surface, borderRadius: 14, padding: 16, marginTop: 16 },
  previewLabel: { color: COLORS.textMuted, fontSize: 12, marginBottom: 6 },
  previewText: { color: COLORS.white, fontSize: 15, lineHeight: 22 },
});
