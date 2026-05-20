import React from 'react';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronLeft,
  MoreHorizontal,
  Play,
  Shuffle,
  Download,
  UserRound,
  ArrowDownCircle,
  MoreVertical,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const TRACKS = [
  {
    id: '1',
    title: 'Midnight City',
    artist: 'M83',
    image: 'https://www.figma.com/api/mcp/asset/867e453f-4ac1-4693-b7e8-7b0e5a53da91',
  },
  {
    id: '2',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    image: 'https://www.figma.com/api/mcp/asset/c00f3520-f4f5-4049-b3ad-1e5659a46412',
    active: true,
  },
  {
    id: '3',
    title: 'Levitating',
    artist: 'Dua Lipa',
    image: 'https://www.figma.com/api/mcp/asset/a9fc5a70-cec6-47ca-904a-f162925b63bf',
  },
  {
    id: '4',
    title: 'Heat Waves',
    artist: 'Glass Animals',
    image: 'https://www.figma.com/api/mcp/asset/115a1ee3-55a0-4088-ba37-fcb553d99094',
  },
  {
    id: '5',
    title: 'Stay',
    artist: 'The Kid LAROI & Justin Bieber',
    image: 'https://www.figma.com/api/mcp/asset/867e453f-4ac1-4693-b7e8-7b0e5a53da91',
  },
];

export default function PlaylistDetailsScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#121212]">
      <LinearGradient
        colors={['#585858', '#121212']}
        style={{ height: 400, position: 'absolute', top: 0, left: 0, right: 0 }}
      />

      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 py-2">
          <Pressable onPress={() => router.back()} className="-ml-2 p-2">
            <ChevronLeft size={34} color="white" />
          </Pressable>
          <View className="flex-row items-center gap-4">
            <Pressable className="p-2">
              <Download size={28} color="white" />
            </Pressable>
            <Pressable className="p-2">
              <MoreHorizontal size={28} color="white" />
            </Pressable>
          </View>
        </View>

        <ScrollView className="flex-1" stickyHeaderIndices={[1]}>
          {/* Playlist Info */}
          <View className="items-center px-4 pt-4 pb-8">
            <View className="mb-8 h-96 w-96 overflow-hidden rounded-sm shadow-2xl">
              <Image
                source={{
                  uri: 'https://www.figma.com/api/mcp/asset/fb9ec00b-c533-43b7-93d6-de4193e6cbdb',
                }}
                className="h-full w-full"
              />
            </View>
            <View className="w-full">
              <Text className="mb-2 text-4xl font-bold text-white">Your Favorite Hits</Text>
              <Text className="mb-3 text-lg text-[#b3b3b3]">
                The Weeknd, Daft Punk, Tame Impala, Dua Lipa and more
              </Text>
              <View className="flex-row items-center gap-2">
                <View className="h-6 w-6 items-center justify-center rounded-full bg-[#E1118C]">
                  <Text className="text-xs font-bold text-black">J</Text>
                </View>
                <Text className="text-base font-bold text-white">Momo • 2,405 likes • 3h 45m</Text>
              </View>
            </View>
          </View>

          {/* Controls Bar */}
          <View className="flex-row items-center justify-between bg-[#121212] px-4 py-4">
            <View className="flex-row items-center gap-6">
              <Pressable className="h-[80px] w-[80px] items-center justify-center rounded-full bg-[#22c55e] shadow-lg">
                <Play size={40} color="black" fill="black" />
              </Pressable>
              <Pressable>
                <Shuffle size={28} color="#22c55e" />
              </Pressable>
            </View>
            <View className="flex-row items-center gap-6">
              <Pressable>
                <ArrowDownCircle size={28} color="#b3b3b3" />
              </Pressable>
              <Pressable>
                <UserRound size={28} color="#b3b3b3" />
              </Pressable>
            </View>
          </View>

          {/* Track List */}
          <View className="px-2 pb-20">
            {TRACKS.map((track) => (
              <Pressable key={track.id} className="flex-row items-center gap-3 px-2 py-3">
                <View className="h-16 w-16 overflow-hidden rounded-sm bg-[#2a2a2a]">
                  <Image source={{ uri: track.image }} className="h-full w-full" />
                </View>
                <View className="flex-1">
                  <Text
                    className={`text-xl font-medium ${track.active ? 'text-[#22c55e]' : 'text-white'}`}
                    numberOfLines={1}>
                    {track.title}
                  </Text>
                  <Text className="text-lg text-[#b3b3b3]" numberOfLines={1}>
                    {track.artist}
                  </Text>
                </View>
                <Pressable className="p-2">
                  <MoreVertical size={24} color="#b3b3b3" />
                </Pressable>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
