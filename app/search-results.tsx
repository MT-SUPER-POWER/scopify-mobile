import React from 'react';
import { View, Text, Pressable, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, MoreVertical } from 'lucide-react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const MOCK_DATA = {
  topResult: {
    name: 'The Weeknd',
    type: 'Artist',
    image: 'https://www.figma.com/api/mcp/asset/262b51a1-801b-4e2d-af7a-61073ae0e689',
  },
  songs: [
    {
      id: '1',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      image: 'https://www.figma.com/api/mcp/asset/c9bbe63b-2230-4f2f-a53f-6358363b9989',
    },
    {
      id: '2',
      title: 'Save Your Tears',
      artist: 'The Weeknd',
      image: 'https://www.figma.com/api/mcp/asset/32f4dda6-7130-4485-9746-c8cbbf76f932',
    },
    {
      id: '3',
      title: 'Starboy',
      artist: 'The Weeknd, Daft Punk',
      image: 'https://www.figma.com/api/mcp/asset/e0af6a54-d6cb-46a9-8db5-5c28a5b514e3',
    },
  ],
};

const MOCK_ALBUMS = [
  {
    id: '1',
    title: 'After Hours',
    year: '2020',
    type: 'Album',
    image: 'https://www.figma.com/api/mcp/asset/3b1a83bf-2537-4b1e-aac4-1de52e6bea41',
  },
  {
    id: '2',
    title: 'Dawn FM',
    year: '2022',
    type: 'Album',
    image: 'https://www.figma.com/api/mcp/asset/947c13e2-1e89-49bd-aa0a-83e31e3e54b8',
  },
  {
    id: '3',
    title: 'Starboy',
    year: '2016',
    type: 'Album',
    image: 'https://www.figma.com/api/mcp/asset/7c0ee371-9332-4214-aa3f-7f053884ae5c',
  },
];

export default function SearchResultsScreen() {
  const router = useRouter();
  const { q } = useLocalSearchParams();
  const query = Array.isArray(q) ? q[0] : q || '';
  const [activeFilter, setActiveFilter] = React.useState('All');

  const filters = ['All', 'Artists', 'Songs', 'Albums', 'Playlists'];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }} edges={['top']}>
      {/* Sticky Header */}
      <View className="border-b border-white/5 px-4 py-2">
        <View className="mb-4 flex-row items-center gap-4">
          <Pressable
            onPress={() => router.back()}
            accessibilityLabel="Go back"
            accessibilityRole="button">
            <ChevronLeft size={28} color="white" />
          </Pressable>
          <View className="h-10 flex-1 justify-center rounded-md bg-[#282828] px-3">
            <Text className="text-sm font-semibold text-white">{query || 'Search'}</Text>
          </View>
        </View>

        {/* Filter Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}>
          {filters.map((filter) => (
            <Pressable
              key={filter}
              onPress={() => setActiveFilter(filter)}
              accessibilityRole="button"
              accessibilityState={{ selected: activeFilter === filter }}
              className={`rounded-full px-4 py-1.5 ${activeFilter === filter ? 'bg-[#1ed760]' : 'bg-[#282828]'}`}>
              <Text
                className={`text-xs font-bold ${activeFilter === filter ? 'text-black' : 'text-white'}`}>
                {filter}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <ScrollView className="flex-1">
        <View className="px-4">
          {/* Top Result */}
          <View className="mt-6 mb-8">
            <Text className="mb-4 text-xl font-bold text-white">Top Result</Text>
            <Pressable
              className="rounded-lg bg-[#181818] p-5"
              accessibilityRole="button"
              accessibilityLabel={`${MOCK_DATA.topResult.name}, ${MOCK_DATA.topResult.type}`}>
              <View className="mb-4 h-28 w-28 overflow-hidden rounded-full bg-gray-800">
                <Image source={{ uri: MOCK_DATA.topResult.image }} className="flex-1" />
              </View>
              <Text className="mb-1 text-3xl font-bold text-white">{MOCK_DATA.topResult.name}</Text>
              <Text className="text-sm font-semibold tracking-widest text-[#b3b3b3] uppercase">
                {MOCK_DATA.topResult.type}
              </Text>
            </Pressable>
          </View>

          {/* Songs */}
          <View className="mb-8">
            <Text className="mb-4 text-xl font-bold text-white">Songs</Text>
            {MOCK_DATA.songs.map((song) => (
              <Pressable
                key={song.id}
                className="mb-4 flex-row items-center"
                accessibilityRole="button"
                accessibilityLabel={`${song.title} by ${song.artist}`}>
                <Image
                  source={{ uri: song.image }}
                  className="mr-3 h-12 w-12 rounded bg-gray-800"
                />
                <View className="flex-1">
                  <Text className="font-bold text-white">{song.title}</Text>
                  <Text className="text-sm text-[#b3b3b3]">{song.artist}</Text>
                </View>
                <Pressable
                  className="p-2"
                  accessibilityLabel="More options"
                  accessibilityRole="button">
                  <MoreVertical size={20} color="#b3b3b3" />
                </Pressable>
              </Pressable>
            ))}
          </View>

          {/* Albums */}
          <View className="mb-10">
            <Text className="mb-4 text-xl font-bold text-white">Albums</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
              {MOCK_ALBUMS.map((album) => (
                <Pressable
                  key={album.id}
                  className="mr-4 w-36"
                  accessibilityRole="button"
                  accessibilityLabel={`${album.title}, ${album.type} released in ${album.year}`}>
                  <View className="mb-2 h-36 w-36 overflow-hidden rounded-md bg-gray-800">
                    <Image source={{ uri: album.image }} className="flex-1" />
                  </View>
                  <Text className="font-bold text-white" numberOfLines={1}>
                    {album.title}
                  </Text>
                  <Text className="text-xs font-semibold text-[#b3b3b3]">
                    {album.year} • {album.type}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
