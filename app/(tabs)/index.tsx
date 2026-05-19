import { useState } from 'react';
import { Text, View, TextInput, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from 'lucide-react-native';

const CATEGORIES = [
  { name: 'Podcasts', color: '#ea580c' },
  { name: 'Made For You', color: '#4338ca' },
  { name: 'Charts', color: '#db2777' },
  { name: 'New Releases', color: '#9333ea' },
  { name: 'Pop', color: '#059669' },
  { name: 'Hip-Hop', color: '#f97316' },
  { name: 'Rock', color: '#dc2626' },
  { name: 'Dance/Electronic', color: '#60a5fa' },
  { name: 'Mood', color: '#c084fc' },
  { name: 'Indie', color: '#3f6212' },
];

export default function BrowseScreen() {
  const [query, setQuery] = useState('');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
        <View style={styles.searchBar}>
          <Search size={18} color="#4b5563" />
          <TextInput
            style={styles.searchInput}
            placeholder="What do you want to listen to?"
            placeholderTextColor="#4b5563"
            value={query}
            onChangeText={setQuery}
          />
        </View>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.browseHeading}>Browse all</Text>
        <View style={styles.grid}>
          {CATEGORIES.map((category) => (
            <View
              key={category.name}
              style={[styles.tile, { backgroundColor: category.color }]}
            >
              <Text style={styles.tileText}>{category.name}</Text>
              <View style={styles.tileDecoration} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0,0,0,0.95)',
  },
  title: {
    fontFamily: 'System',
    fontSize: 30,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: -0.75,
    lineHeight: 36,
  },
  searchBar: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 6,
    padding: 13,
    gap: 7,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#4b5563',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 114,
  },
  browseHeading: {
    fontFamily: 'System',
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: 28,
    marginTop: 16,
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tile: {
    width: 171,
    height: 112,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    paddingTop: 11,
    paddingLeft: 12,
  },
  tileText: {
    fontFamily: 'System',
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },
  tileDecoration: {
    position: 'absolute',
    bottom: -16,
    right: -20,
    width: 85,
    height: 85,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 12,
    transform: [{ rotate: '25deg' }],
  },
});
