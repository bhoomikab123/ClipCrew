import { ScrollView, Text, View } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#0F172A', padding: 20 }}>

      <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
        Dashboard
      </Text>

      <Text style={{ color: '#94A3B8', marginBottom: 20 }}>
        Welcome to ClipCrew 🚀
      </Text>

      {/* Card */}
      <View style={{
        backgroundColor: '#1E293B',
        padding: 20,
        borderRadius: 15,
        marginBottom: 15
      }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Upcoming Events</Text>
      </View>

      <View style={{
        backgroundColor: '#1E293B',
        padding: 20,
        borderRadius: 15
      }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Your Crew</Text>
      </View>

    </ScrollView>
  );
}