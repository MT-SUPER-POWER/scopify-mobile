import { router } from 'expo-router';
import {
  ChevronDown,
  Ellipsis,
  Heart,
  Music,
  Pause,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PlayerScreen() {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-black">
      {/* Gradient Background Simulation */}
      <View className="absolute top-0 left-0 right-0 h-[60%] bg-[#1a1a1a]" />

      {/* Header */}
      <View className="px-6 pt-6 pb-8 flex-row items-center justify-between">
        {/* Minimize Button */}
        <Pressable
          onPress={() => router.back()}
          className="p-2 rounded-full"
          hitSlop={8}
        >
          <ChevronDown size={24} color="#fff" />
        </Pressable>

        {/* Center Text Stack */}
        <View className="items-center flex-1">
          <Text
            style={{ fontFamily: 'System' }}
            className="text-[#9ca3af] text-[10px] uppercase tracking-[1px] text-center"
          >
            Playing From Playlist
          </Text>
          <Text
            style={{ fontFamily: 'System' }}
            className="text-white text-xs text-center"
          >
            Discover Weekly
          </Text>
        </View>

        {/* Menu Button */}
        <Pressable className="p-2 rounded-full" hitSlop={8}>
          <Ellipsis size={24} color="#fff" />
        </Pressable>
      </View>

      {/* Album Art Section */}
      <View className="flex-1 justify-center items-center px-6 pb-10">
        <View className="w-full max-w-[340px] aspect-square rounded-md bg-[#4a5568] shadow-lg items-center justify-center">
          <Music size={80} color="rgba(255,255,255,0.3)" />
        </View>
      </View>

      {/* Song Info Section */}
      <View className="px-6 pb-6 flex-row items-center justify-between">
        {/* Song Name & Artist */}
        <View className="flex-1">
          <Text
            style={{ fontFamily: 'System' }}
            className="text-white text-2xl font-bold leading-[32px]"
          >
            Midnight City
          </Text>
          <Text
            style={{ fontFamily: 'System' }}
            className="text-[#9ca3af] text-base"
          >
            M83
          </Text>
        </View>

        {/* Heart Button */}
        <Pressable className="p-2" hitSlop={8}>
          <Heart size={28} color="#fff" />
        </Pressable>
      </View>

      {/* Progress Bar Section */}
      <View className="px-6 pb-8">
        {/* Progress Track */}
        <View className="w-full h-1 bg-[rgba(255,255,255,0.2)] rounded-full relative">
          {/* Filled Portion */}
          <View className="absolute left-0 top-0 w-[45%] h-1 bg-white rounded-full" />
          {/* Thumb */}
          <View
            className="absolute top-1/2 -translate-y-1/2 size-3 bg-white rounded-full"
            style={{ left: '45%', marginLeft: -6 }}
          />
        </View>

        {/* Timestamps */}
        <View className="flex-row justify-between pt-3">
          <Text
            style={{ fontFamily: 'System' }}
            className="text-[#9ca3af] text-[10px]"
          >
            1:42
          </Text>
          <Text
            style={{ fontFamily: 'System' }}
            className="text-[#9ca3af] text-[10px]"
          >
            -2:21
          </Text>
        </View>
      </View>

      {/* Media Controls */}
      <View className="px-6 pb-8 flex-row items-center justify-between">
        {/* Shuffle */}
        <Pressable className="p-2" hitSlop={8}>
          <Shuffle size={24} color="#b3b3b3" />
        </Pressable>

        {/* Previous */}
        <Pressable className="p-2" hitSlop={8}>
          <SkipBack size={36} color="#fff" />
        </Pressable>

        {/* Play / Pause */}
        <Pressable className="bg-white rounded-full p-4" hitSlop={8}>
          <Pause size={36} color="#000" />
        </Pressable>

        {/* Next */}
        <Pressable className="p-2" hitSlop={8}>
          <SkipForward size={36} color="#fff" />
        </Pressable>

        {/* Repeat */}
        <Pressable className="p-2" hitSlop={8}>
          <Repeat size={24} color="#b3b3b3" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
