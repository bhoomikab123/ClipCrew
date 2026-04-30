import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: { backgroundColor: '#0F172A' },
      tabBarActiveTintColor: '#6366F1',
      tabBarInactiveTintColor: 'gray',
      tabBarIcon: ({ color, size }) => {
        let iconName = 'home-outline';

        if (route.name === 'index') iconName = 'home-outline';
        else if (route.name === 'events') iconName = 'calendar-outline';
        else if (route.name === 'crew') iconName = 'people-outline';
        else if (route.name === 'profile') iconName = 'person-outline';

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="events" />
      <Tabs.Screen name="crew" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}