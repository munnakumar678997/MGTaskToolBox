import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useState } from 'react';
import { COLORS } from '../../../constants/colors';

function generatePassword(length: number, opts: Record<string, boolean>) {
  let chars = '';
  if (opts.uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (opts.lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
  if (opts.numbers) chars += '0123456789';
  if (opts.symbols) chars += '!@#$%^&*()_+-=[]{}';
  if (chars === '') return 'Koi option select karo';
  let pwd = '';
  for (let i = 0; i < length; i++) {
    pwd += chars[Math.floor(Math.random() * chars.length)];
  }
  return pwd;
}

export default function PasswordGeneratorTool() {
  const [length, setLength] = useState(12);
  const [opts, setOpts] = useState({ uppercase: true, lowercase: true, numbers: true, symbols: false });
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    setPassword(generatePassword(length, opts));
    setCopied(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Password Length: {length}</Text>
        <View style={styles.lengthBtns}>
          {[8, 12, 16, 20, 24].map((l) => (
            <TouchableOpacity key={l} style={[styles.lenBtn, length === l && styles.lenBtnActive]} onPress={() => setLength(l)}>
              <Text style={[styles.lenBtnText, length === l && styles.lenBtnTextActive]}>{l}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        {Object.entries(opts).map(([key, val]) => (
          <View key={key} style={styles.optRow}>
            <Text style={styles.optLabel}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
            <Switch
              value={val}
              onValueChange={(v) => setOpts({ ...opts, [key]: v })}
              trackColor={{ true: COLORS.primary }}
              thumbColor={COLORS.white}
            />
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.generateBtn} onPress={generate}>
        <Text style={styles.generateBtnText}>🔐 Generate Password</Text>
      </TouchableOpacity>

      {password !== '' && (
        <View style={styles.resultBox}>
          <Text style={styles.passwordText} selectable>{password}</Text>
          <Text style={styles.hint}>Password ko hold karo — copy karo</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 16 },
  section: { backgroundColor: COLORS.surface, borderRadius: 14, padding: 16, marginBottom: 14, borderWidth: 1, borderColor: COLORS.border },
  sectionTitle: { color: COLORS.textMuted, fontSize: 13, marginBottom: 12 },
  lengthBtns: { flexDirection: 'row', gap: 10 },
  lenBtn: { flex: 1, backgroundColor: COLORS.card, borderRadius: 8, padding: 10, alignItems: 'center' },
  lenBtnActive: { backgroundColor: COLORS.primary },
  lenBtnText: { color: COLORS.textMuted, fontWeight: '600' },
  lenBtnTextActive: { color: COLORS.white },
  optRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 6 },
  optLabel: { color: COLORS.white, fontSize: 15 },
  generateBtn: { backgroundColor: COLORS.primary, borderRadius: 14, padding: 18, alignItems: 'center' },
  generateBtnText: { color: COLORS.white, fontSize: 17, fontWeight: '700' },
  resultBox: { backgroundColor: COLORS.surface, borderRadius: 14, padding: 20, marginTop: 16, alignItems: 'center' },
  passwordText: { fontSize: 22, color: COLORS.white, fontWeight: 'bold', letterSpacing: 2, textAlign: 'center' },
  hint: { color: COLORS.textMuted, fontSize: 12, marginTop: 10 },
});
