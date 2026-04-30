import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>

      {/* Avatar */}
      <View style={styles.avatar}>
        <Ionicons name="person" size={40} color="#fff" />
      </View>

      {/* User Info */}
      <Text style={styles.name}>Chaithanya</Text>
      <Text style={styles.email}>chaithanya@email.com</Text>

      {/* Options */}
      <View style={styles.card}>
        <Text style={styles.option}>Edit Profile</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.option}>Settings</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.option}>Help & Support</Text>
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9FAFB',
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  email: {
    color: '#6B7280',
    marginBottom: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },

  option: {
    fontSize: 16,
  },

  logout: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },

  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});