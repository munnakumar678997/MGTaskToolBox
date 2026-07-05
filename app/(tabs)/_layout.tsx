import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: '#16213E', borderTopColor: '#334155' },
        tabBarActiveTintColor: '#4F46E5',
        tabBarInactiveTintColor: '#94A3B8',
        headerStyle: { backgroundColor: '#1A1A2E' },
        headerTintColor: '#E2E8F0',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'MG ToolBox', tabBarLabel: 'Home', tabBarIcon: () => null }}
      />
      <Tabs.Screen
        name="favorites"
        options={{ title: 'Favorites', tabBarLabel: 'Favorites', tabBarIcon: () => null }}
      />
      <Tabs.Screen
        name="settings"
        options={{ title: 'Settings', tabBarLabel: 'Settings', tabBarIcon: () => null }}
      />
    </Tabs>
  );
}
