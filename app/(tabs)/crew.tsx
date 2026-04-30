import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Crew() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <Text style={styles.title}>Crew Members</Text>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Member Card */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={20} color="#fff" />
            </View>

            <View>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.role}>Photographer</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={20} color="#fff" />
            </View>

            <View>
              <Text style={styles.name}>Sarah Lee</Text>
              <Text style={styles.role}>Videographer</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={20} color="#fff" />
            </View>

            <View>
              <Text style={styles.name}>Rahul</Text>
              <Text style={styles.role}>Editor</Text>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Floating Add Button */}
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

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 14,
    marginBottom: 15,
    elevation: 3,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  role: {
    color: '#6B7280',
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