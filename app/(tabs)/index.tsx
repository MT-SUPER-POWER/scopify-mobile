import React from 'react';
import { View, Text, ScrollView, Image, Pressable, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Settings } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from 'expo-router';

// Asset constants
const imgLikedSongs = 'https://www.figma.com/api/mcp/asset/8ea7870a-5591-4edb-a635-e15c326a2a09';
const imgDailyMix1 = 'https://www.figma.com/api/mcp/asset/58b4e16a-f0e7-483d-a6f5-5257909889f7';
const imgRockClassics = 'https://www.figma.com/api/mcp/asset/a742fccf-7f44-4c65-a1d5-2f14c9904015';
const imgLoFiBeats = 'https://www.figma.com/api/mcp/asset/47174740-5e87-4307-9b41-0a18e7123181';
const imgAlbumArt1 = 'https://www.figma.com/api/mcp/asset/867e453f-4ac1-4693-b7e8-7b0e5a53da91';
const imgAlbumArt2 = 'https://www.figma.com/api/mcp/asset/c00f3520-f4f5-4049-b3ad-1e5659a46412';
const imgAlbumArt3 = 'https://www.figma.com/api/mcp/asset/a9fc5a70-cec6-47ca-904a-f162925b63bf';
const imgAlbumArt4 = 'https://www.figma.com/api/mcp/asset/115a1ee3-55a0-4088-ba37-fcb553d99094';
const imgDailyMixLarge1 =
  'https://www.figma.com/api/mcp/asset/3c013665-09a3-47dd-a5e6-ec7412d007b4';
const imgDailyMixLarge2 =
  'https://www.figma.com/api/mcp/asset/3cb14a82-bfa0-464b-955d-a217ab75a3ba';
const imgDiscoverWeekly =
  'https://www.figma.com/api/mcp/asset/fb9ec00b-c533-43b7-93d6-de4193e6cbdb';

const QUICK_ACTIONS = [
  { id: '1', title: 'Liked Songs', image: imgLikedSongs },
  { id: '2', title: 'Daily Mix 1', image: imgDailyMix1 },
  { id: '3', title: 'Rock Classics', image: imgRockClassics },
  { id: '4', title: 'Lo-Fi Beats', image: imgLoFiBeats },
];

const RECENTLY_PLAYED = [
  { id: '1', title: 'Midnight City', artist: 'M83', image: imgAlbumArt1 },
  { id: '2', title: 'Discovery', artist: 'Daft Punk', image: imgAlbumArt2 },
  { id: '3', title: 'Currents', artist: 'Tame Impala', image: imgAlbumArt3 },
  { id: '4', title: 'After Hours', artist: 'The Weeknd', image: imgAlbumArt4 },
];

const MADE_FOR_YOU = [
  {
    id: '1',
    title: 'Daily Mix 1',
    description: 'The Weeknd, Daft Punk, Tame Impala and more',
    image: imgDailyMixLarge1,
  },
  {
    id: '2',
    title: 'Daily Mix 2',
    description: 'Arctic Monkeys, Gorillaz, The Strokes and more',
    image: imgDailyMixLarge2,
  },
  {
    id: '3',
    title: 'Discover Weekly',
    description: 'Your weekly mixtape of fresh music',
    image: imgDiscoverWeekly,
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      <LinearGradient colors={['#1e1e1e', '#121212']} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }} edges={['top']}>
          <View className="flex-row items-center justify-between px-4 py-6">
            <Text className="text-2xl font-bold tracking-[-0.6px] text-white">Good evening</Text>
            <View className="flex-row gap-4">
              <Pressable className="p-2">
                <Bell size={24} color="white" />
              </Pressable>
              <Link href="/settings" asChild>
                <Pressable className="p-2">
                  <Settings size={24} color="white" />
                </Pressable>
              </Link>
            </View>
          </View>

          <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 160 }}>
            <View className="flex-row flex-wrap gap-2 px-4">
              {QUICK_ACTIONS.map((item) => (
                <Pressable
                  key={item.id}
                  className="h-14 w-[48%] flex-row items-center overflow-hidden rounded-md bg-[#2a2a2a]">
                  <Image source={{ uri: item.image }} className="h-14 w-14" />
                  <Text className="flex-1 px-3 text-sm font-bold text-white" numberOfLines={2}>
                    {item.title}
                  </Text>
                </Pressable>
              ))}
            </View>

            <View className="mt-8">
              <View className="mb-4 px-4">
                <Text className="text-xl font-bold tracking-[-0.5px] text-white">
                  Recently Played
                </Text>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}>
                {RECENTLY_PLAYED.map((item) => (
                  <Pressable key={item.id} className="w-36">
                    <View className="h-36 w-36 overflow-hidden rounded-lg bg-[#2a2a2a] shadow-lg">
                      <Image source={{ uri: item.image }} className="h-full w-full" />
                    </View>
                    <Text className="mt-2 text-sm font-bold text-white" numberOfLines={1}>
                      {item.title}
                    </Text>
                    <Text className="text-xs text-[#9ca3af]" numberOfLines={1}>
                      {item.artist}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            </View>

            <View className="mt-8">
              <View className="mb-1 px-4">
                <Text className="text-xl font-bold tracking-[-0.5px] text-white">Made For You</Text>
                <Text className="text-xs text-[#9ca3af]">
                  Personalized playlists for your taste
                </Text>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16, gap: 16, paddingTop: 12 }}>
                {MADE_FOR_YOU.map((item) => (
                  <Pressable key={item.id} className="w-40">
                    <View className="h-40 w-40 overflow-hidden rounded-lg bg-[#2a2a2a] shadow-lg">
                      <Image source={{ uri: item.image }} className="h-full w-full" />
                    </View>
                    <Text className="mt-3 text-xs text-[#9ca3af]" numberOfLines={2}>
                      {item.description}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}
