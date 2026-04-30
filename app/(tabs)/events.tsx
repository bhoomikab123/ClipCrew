import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Events() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <Text style={styles.title}>Events</Text>

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={18} color="gray" />
        <TextInput
          placeholder="Search events..."
          style={styles.searchInput}
        />
      </View>

      {/* Events List */}
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Music Festival 🎵</Text>
          <Text style={styles.cardDesc}>10 May • Bangalore</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Wedding Shoot 📸</Text>
          <Text style={styles.cardDesc}>15 May • Mysore</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Corporate Event 🏢</Text>
          <Text style={styles.cardDesc}>20 May • Chennai</Text>
        </View>

      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 2,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
  },

  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 14,
    marginBottom: 15,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  cardDesc: {
    color: '#6B7280',
    marginTop: 5,
  },

  fab: {
    position: 'absolute',
    bottom: 25,
    right: 20,
    backgroundColor: '#4F46E5',
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});