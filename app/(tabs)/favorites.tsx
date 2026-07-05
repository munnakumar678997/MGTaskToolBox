import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>⭐</Text>
      <Text style={styles.title}>Favorite Tools</Text>
      <Text style={styles.subtitle}>
        Apne pasand ke tools yahan save honge.{'\n'}
        Kisi bhi tool par ⭐ dabao usse yahan add karne ke liye.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, alignItems: 'center', justifyContent: 'center', padding: 24 },
  emoji: { fontSize: 64, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.white, marginBottom: 8 },
  subtitle: { fontSize: 15, color: COLORS.textMuted, textAlign: 'center', lineHeight: 22 },
});
