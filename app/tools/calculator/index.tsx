import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { COLORS } from '../../../constants/colors';

const BUTTONS = [
  ['C', '±', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '−'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

export default function CalculatorTool() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handlePress = (btn: string) => {
    if (btn === 'C') { setDisplay('0'); setEquation(''); return; }
    if (btn === '=') {
      try {
        const expr = equation
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/−/g, '-');
        const result = eval(expr);
        setDisplay(String(result));
        setEquation('');
      } catch { setDisplay('Error'); }
      return;
    }
    const next = equation + btn;
    setEquation(next);
    setDisplay(next);
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.display} numberOfLines={1} adjustsFontSizeToFit>{display}</Text>
      </View>
      {BUTTONS.map((row, i) => (
        <View key={i} style={styles.row}>
          {row.map((btn) => (
            <TouchableOpacity
              key={btn}
              style={[styles.btn, btn === '0' && styles.wide, ['÷','×','−','+','='].includes(btn) && styles.opBtn, btn === 'C' && styles.clearBtn]}
              onPress={() => handlePress(btn)}
            >
              <Text style={[styles.btnText, ['÷','×','−','+','='].includes(btn) && styles.opText]}>
                {btn}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 16 },
  screen: { backgroundColor: COLORS.surface, borderRadius: 16, padding: 24, marginBottom: 16, alignItems: 'flex-end' },
  display: { fontSize: 48, color: COLORS.white, fontWeight: '200' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  btn: { backgroundColor: COLORS.card, borderRadius: 14, width: 74, height: 74, alignItems: 'center', justifyContent: 'center' },
  wide: { width: 160 },
  opBtn: { backgroundColor: COLORS.primary },
  clearBtn: { backgroundColor: '#374151' },
  btnText: { fontSize: 24, color: COLORS.white, fontWeight: '500' },
  opText: { fontWeight: '700' },
});
