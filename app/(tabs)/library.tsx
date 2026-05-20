import React from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Plus, List, ArrowUpDown, Heart, AudioLines } from 'lucide-react-native';
import { Link } from 'expo-router';

const CATEGORIES = ['Playlists', 'Artists', 'Albums', 'Podcasts & Shows'];

const PLAYLISTS = [
  { id: '1', title: 'Liked Songs', info: 'Playlist • 432 songs', isPinned: true, image: 'heart' },
  {
    id: '2',
    title: 'Daily Mix 1',
    info: 'Made For Momo',
    image: 'https://www.figma.com/api/mcp/asset/58b4e16a-f0e7-483d-a6f5-5257909889f7',
  },
  {
    id: '3',
    title: 'Techno Remixes',
    info: 'Playlist • 24 songs',
    image: 'https://www.figma.com/api/mcp/asset/47174740-5e87-4307-9b41-0a18e7123181',
  },
  {
    id: '4',
    title: 'Late Night Jazz',
    info: 'Playlist • 156 songs',
    image: 'https://www.figma.com/api/mcp/asset/a742fccf-7f44-4c65-a1d5-2f14c9904015',
  },
  {
    id: '5',
    title: 'Rock Classics',
    info: 'Playlist • 89 songs',
    image: 'https://www.figma.com/api/mcp/asset/a742fccf-7f44-4c65-a1d5-2f14c9904015',
  },
  {
    id: '6',
    title: 'Study Beats',
    info: 'Playlist • 45 songs',
    image: 'https://www.figma.com/api/mcp/asset/47174740-5e87-4307-9b41-0a18e7123181',
  },
];

export default function LibraryScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }} edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-4">
        <View className="flex-row items-center gap-3">
          <View className="h-12 w-12 items-center justify-center rounded-full bg-[#E1118C]">
            <Text className="text-base font-bold text-black">J</Text>
          </View>
          <Text className="text-4xl font-bold tracking-tight text-white">Your Library</Text>
        </View>
        <View className="flex-row items-center gap-6">
          <Pressable>
            <Search size={28} color="white" />
          </Pressable>
          <Pressable>
            <Plus size={34} color="white" />
          </Pressable>
        </View>
      </View>

      {/* Category Tabs */}
      <View className="mb-4">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}>
          {CATEGORIES.map((cat, i) => (
            <Pressable key={i} className="rounded-full border border-white/20 px-4 py-2">
              <Text className="text-sm font-semibold text-white">{cat}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Filter and View Toggle */}
      <View className="flex-row items-center justify-between px-4 py-2">
        <Pressable className="flex-row items-center gap-2">
          <ArrowUpDown size={20} color="white" />
          <Text className="text-sm font-semibold text-white">Recent</Text>
        </Pressable>
        <Pressable>
          <List size={24} color="white" />
        </Pressable>
      </View>

      {/* Track List */}
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Create Playlist Row */}
        <Pressable className="flex-row items-center gap-4 px-4 py-3">
          <View className="h-24 w-24 items-center justify-center rounded-sm bg-[#2a2a2a]">
            <Plus size={48} color="#b3b3b3" />
          </View>
          <Text className="text-xl font-bold text-white">Add playlists</Text>
        </Pressable>

        {PLAYLISTS.map((item) => (
          <Link key={item.id} href={`/playlist/${item.id}`} asChild>
            <Pressable className="flex-row items-center gap-4 px-4 py-3">
              <View className="h-24 w-24 overflow-hidden rounded-sm bg-[#2a2a2a]">
                {item.image === 'heart' ? (
                  <View className="flex-1 items-center justify-center bg-gradient-to-br from-[#450af5] to-[#c4efd9]">
                    <Heart size={40} color="white" fill="white" />
                  </View>
                ) : (
                  <Image source={{ uri: item.image }} className="h-full w-full" />
                )}
              </View>
              <View className="flex-1">
                <Text className="text-xl font-bold text-white" numberOfLines={1}>
                  {item.title}
                </Text>
                <View className="flex-row items-center gap-1">
                  {item.isPinned && <AudioLines size={16} color="#22c55e" />}
                  <Text className="text-lg text-[#9ca3af]" numberOfLines={1}>
                    {item.info}
                  </Text>
                </View>
              </View>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
