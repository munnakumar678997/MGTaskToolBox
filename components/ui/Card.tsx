import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

type CardProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <View style={styles.card}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: COLORS.surface, borderRadius: 14, padding: 16, marginVertical: 8, borderWidth: 1, borderColor: COLORS.border },
  title: { fontSize: 16, fontWeight: '700', color: COLORS.white, marginBottom: 10 },
});
