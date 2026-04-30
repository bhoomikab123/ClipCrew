import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>test app</Text>

      <Text style={styles.title}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Login to your account</Text>

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/(tabs)')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Don’t have an account?{' '}
        <Text style={styles.link} onPress={() => router.push('/register')}>
          Sign up
        </Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 25, backgroundColor: '#0F172A' },
  logo: { color: '#6366F1', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  title: { color: 'white', fontSize: 28, fontWeight: 'bold' },
  subtitle: { color: '#94A3B8', marginBottom: 30 },

  input: {
    backgroundColor: '#1E293B',
    padding: 14,
    borderRadius: 12,
    color: 'white',
    marginBottom: 15
  },

  button: {
    backgroundColor: '#6366F1',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center'
  },

  buttonText: { color: 'white', fontWeight: 'bold' },

  footer: { color: '#94A3B8', marginTop: 20, textAlign: 'center' },
  link: { color: '#6366F1', fontWeight: 'bold' }
});