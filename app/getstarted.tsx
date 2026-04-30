import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GetStartedScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ClipCrew 🚀</Text>

      <Text style={styles.title}>
        Build & Manage Your Crew Effortlessly
      </Text>

      <Text style={styles.subtitle}>
        Organize events, assign roles, and collaborate seamlessly.
      </Text>

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => router.push('/login')}
      >
        <Text style={styles.primaryText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryBtn}
        onPress={() => router.push('/login')}
      >
        <Text style={styles.secondaryText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#F9FAFB',
  },

  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4F46E5',
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 40,
  },

  primaryBtn: {
    backgroundColor: '#4F46E5',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },

  primaryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  secondaryBtn: {
    borderWidth: 1,
    borderColor: '#4F46E5',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  secondaryText: {
    color: '#4F46E5',
    fontWeight: 'bold',
    fontSize: 16,
  },
});