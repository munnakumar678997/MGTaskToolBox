import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
};

export default function Button({ title, onPress, variant = 'primary' }: ButtonProps) {
  const bg =
    variant === 'primary' ? COLORS.primary :
    variant === 'danger' ? COLORS.error : 'transparent';

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bg }, variant === 'secondary' && styles.outline]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, variant === 'secondary' && { color: COLORS.primary }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { paddingVertical: 13, paddingHorizontal: 24, borderRadius: 10, alignItems: 'center' },
  outline: { borderWidth: 1.5, borderColor: COLORS.primary },
  text: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
