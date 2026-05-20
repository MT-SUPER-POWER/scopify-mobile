import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { MOCK_SEARCH_RESULTS, MOCK_ALBUMS, SEARCH_FILTERS } from '../constants/search';
import { SearchHeader } from '../components/search/SearchHeader';
import { TopResultCard } from '../components/search/TopResultCard';
import { SongItem } from '../components/shared/SongItem';
import { AlbumCard } from '../components/shared/AlbumCard';

export default function SearchResultsScreen() {
  const router = useRouter();
  const { q } = useLocalSearchParams();
  const query = Array.isArray(q) ? q[0] : q || '';
  const [activeFilter, setActiveFilter] = React.useState('All');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }} edges={['top']}>
      <SearchHeader
        query={query}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        onBack={() => router.back()}
      />

      <ScrollView className="flex-1">
        <View className="px-4">
          {/* Top Result */}
          <TopResultCard artist={MOCK_SEARCH_RESULTS.topResult} />

          {/* Songs */}
          <View className="mb-8">
            <Text className="mb-4 text-xl font-bold text-white">Songs</Text>
            {MOCK_SEARCH_RESULTS.songs.map((song) => (
              <SongItem key={song.id} song={song} />
            ))}
          </View>

          {/* Albums */}
          <View className="mb-10">
            <Text className="mb-4 text-xl font-bold text-white">Albums</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
              {MOCK_ALBUMS.map((album) => (
                <AlbumCard key={album.id} album={album} />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
