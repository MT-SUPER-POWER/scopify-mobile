import React, { useRef } from 'react';
import { View, Text, Image, Pressable, Dimensions, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart, ListMusic, Share2 } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { PlayerHeader } from '../components/player/PlayerHeader';
import { PlayerControls } from '../components/player/PlayerControls';

const { width, height } = Dimensions.get('window');
const ALBUM_ART_SIZE = Math.min(width - 48, height * 0.4);
const PROGRESS = 0.45;

const imgAlbumArt = 'https://www.figma.com/api/mcp/asset/867e453f-4ac1-4693-b7e8-7b0e5a53da91';

export default function PlayerScreen() {
  const router = useRouter();
  const slideAnim = useRef(new Animated.Value(0)).current;

  const handleDismiss = () => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 320,
      useNativeDriver: true,
    }).start(() => router.back());
  };

  return (
    <Animated.View
      className="flex-1 bg-[#121212]"
      style={{ transform: [{ translateY: slideAnim }] }}>
      <LinearGradient
        colors={['#4b5563', '#121212']}
        locations={[0, 0.6]}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      />

      <SafeAreaView style={{ flex: 1, paddingHorizontal: 24 }}>
        <PlayerHeader playlistName="Starboy" onDismiss={handleDismiss} />

        {/* Album Art */}
        <View className="flex-1 items-center justify-center py-4">
          <View
            style={{
              width: ALBUM_ART_SIZE,
              height: ALBUM_ART_SIZE,
              borderRadius: 10,
              overflow: 'hidden',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 12 },
              shadowOpacity: 0.6,
              shadowRadius: 20,
              elevation: 20,
            }}>
            <Image source={{ uri: imgAlbumArt }} className="h-full w-full" resizeMode="cover" />
          </View>
        </View>

        {/* Song Info */}
        <View className="mb-5 flex-row items-center">
          <View className="flex-1 pr-4">
            <Text className="text-3xl font-bold text-white" numberOfLines={1}>
              Starboy
            </Text>
            <Text className="mt-1 text-xl text-[#b3b3b3]" numberOfLines={1}>
              The Weeknd • Daft Punk
            </Text>
          </View>
          <Pressable hitSlop={8}>
            <Heart size={32} color="#22c55e" fill="#22c55e" />
          </Pressable>
        </View>

        {/* Progress Bar */}
        <View className="mb-6">
          <View className="relative h-1 rounded-sm bg-white/20">
            <View className="h-full rounded-sm bg-white" style={{ width: `${PROGRESS * 100}%` }} />
            <View
              className="absolute top-1/2 -mt-2 -ml-2 h-4 w-4 rounded-full bg-white"
              style={{ left: `${PROGRESS * 100}%` }}
            />
          </View>
          <View className="mt-2 flex-row justify-between">
            <Text className="text-base text-[#b3b3b3]">1:42</Text>
            <Text className="text-base text-[#b3b3b3]">-2:08</Text>
          </View>
        </View>

        <PlayerControls />

        {/* Bottom Actions */}
        <View className="flex-row items-center justify-between pb-3">
          <Pressable hitSlop={8}>
            <Share2 size={24} color="#b3b3b3" />
          </Pressable>
          <Pressable hitSlop={8}>
            <ListMusic size={24} color="#b3b3b3" />
          </Pressable>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}
