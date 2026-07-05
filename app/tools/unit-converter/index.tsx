import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { COLORS } from '../../../constants/colors';

const CONVERSIONS = {
  'km → miles': (v: number) => v * 0.621371,
  'miles → km': (v: number) => v * 1.60934,
  'kg → lbs': (v: number) => v * 2.20462,
  'lbs → kg': (v: number) => v * 0.453592,
  '°C → °F': (v: number) => (v * 9) / 5 + 32,
  '°F → °C': (v: number) => ((v - 32) * 5) / 9,
  'meter → feet': (v: number) => v * 3.28084,
  'feet → meter': (v: number) => v * 0.3048,
};

type ConvKey = keyof typeof CONVERSIONS;

export default function UnitConverterTool() {
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState<ConvKey>('km → miles');

  const result = value !== '' ? CONVERSIONS[selected](parseFloat(value)) : null;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Value daalo..."
        placeholderTextColor={COLORS.textMuted}
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
      />

      <Text style={styles.sectionTitle}>Conversion Type:</Text>
      <View style={styles.grid}>
        {(Object.keys(CONVERSIONS) as ConvKey[]).map((key) => (
          <TouchableOpacity
            key={key}
            style={[styles.chip, selected === key && styles.chipActive]}
            onPress={() => setSelected(key)}
          >
            <Text style={[styles.chipText, selected === key && styles.chipTextActive]}>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {result !== null && !isNaN(result) && (
        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>{selected.split('→')[0].trim()} {value}</Text>
          <Text style={styles.arrow}>↓</Text>
          <Text style={styles.result}>{result.toFixed(4)} {selected.split('→')[1].trim()}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 16 },
  input: { backgroundColor: COLORS.surface, borderRadius: 12, padding: 16, color: COLORS.white, fontSize: 20, borderWidth: 1, borderColor: COLORS.border, marginBottom: 20 },
  sectionTitle: { color: COLORS.textMuted, fontSize: 13, marginBottom: 10 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { backgroundColor: COLORS.surface, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, borderWidth: 1, borderColor: COLORS.border, marginBottom: 8 },
  chipActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  chipText: { color: COLORS.textMuted, fontSize: 13 },
  chipTextActive: { color: COLORS.white, fontWeight: '700' },
  resultBox: { marginTop: 24, backgroundColor: COLORS.surface, borderRadius: 16, padding: 24, alignItems: 'center' },
  resultLabel: { fontSize: 18, color: COLORS.textMuted },
  arrow: { fontSize: 28, color: COLORS.primary, marginVertical: 8 },
  result: { fontSize: 36, fontWeight: 'bold', color: COLORS.white },
});
