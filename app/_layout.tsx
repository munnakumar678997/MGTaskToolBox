import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#1A1A2E' },
        headerTintColor: '#E2E8F0',
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: '#1A1A2E' },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="tools/calculator/index" options={{ title: '🧮 Calculator' }} />
      <Stack.Screen name="tools/unit-converter/index" options={{ title: '📐 Unit Converter' }} />
      <Stack.Screen name="tools/text-tools/index" options={{ title: '✍️ Text Tools' }} />
      <Stack.Screen name="tools/password-generator/index" options={{ title: '🔐 Password Generator' }} />
    </Stack>
  );
}
