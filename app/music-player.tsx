import React, { useRef } from 'react';
import { View, Text, Image, Pressable, Dimensions, StyleSheet, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronDown,
  MoreHorizontal,
  Heart,
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat1,
  ListMusic,
  Share2,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

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
    <Animated.View style={[styles.container, { transform: [{ translateY: slideAnim }] }]}>
      <LinearGradient
        colors={['#4b5563', '#121212']}
        locations={[0, 0.6]}
        style={StyleSheet.absoluteFill}
      />

      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={handleDismiss} style={styles.iconBtn}>
            <ChevronDown size={28} color="white" />
          </Pressable>
          <View style={styles.headerCenter}>
            <Text style={styles.playingFromLabel}>PLAYING FROM PLAYLIST</Text>
            <Text style={styles.playlistName}>Starboy</Text>
          </View>
          <Pressable style={styles.iconBtn}>
            <MoreHorizontal size={28} color="white" />
          </Pressable>
        </View>

        {/* Album Art */}
        <View style={styles.albumWrapper}>
          <View style={[styles.albumArt, { width: ALBUM_ART_SIZE, height: ALBUM_ART_SIZE }]}>
            <Image
              source={{ uri: imgAlbumArt }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Song Info */}
        <View style={styles.songInfo}>
          <View style={{ flex: 1, paddingRight: 16 }}>
            <Text style={styles.songTitle} numberOfLines={1}>
              Starboy
            </Text>
            <Text style={styles.songArtist} numberOfLines={1}>
              The Weeknd • Daft Punk
            </Text>
          </View>
          <Pressable hitSlop={8}>
            <Heart size={26} color="#22c55e" fill="#22c55e" />
          </Pressable>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressSection}>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${PROGRESS * 100}%` }]} />
            <View style={[styles.progressKnob, { left: `${PROGRESS * 100}%` }]} />
          </View>
          <View style={styles.timeRow}>
            <Text style={styles.timeText}>1:42</Text>
            <Text style={styles.timeText}>-2:08</Text>
          </View>
        </View>

        {/* Controls */}
        <View style={styles.controls}>
          <Pressable hitSlop={8}>
            <Shuffle size={22} color="#22c55e" />
          </Pressable>
          <Pressable hitSlop={8}>
            <SkipBack size={34} color="white" fill="white" />
          </Pressable>
          <Pressable style={styles.playBtn}>
            <Play size={30} color="black" fill="black" style={{ marginLeft: 3 }} />
          </Pressable>
          <Pressable hitSlop={8}>
            <SkipForward size={34} color="white" fill="white" />
          </Pressable>
          <Pressable hitSlop={8}>
            <Repeat1 size={22} color="white" />
          </Pressable>
        </View>

        {/* Bottom Actions */}
        <View style={styles.bottomActions}>
          <Pressable hitSlop={8}>
            <Share2 size={20} color="#b3b3b3" />
          </Pressable>
          <Pressable hitSlop={8}>
            <ListMusic size={20} color="#b3b3b3" />
          </Pressable>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 4,
  },
  iconBtn: {
    padding: 8,
  },
  headerCenter: {
    alignItems: 'center',
  },
  playingFromLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: 'white',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  playlistName: {
    fontSize: 12,
    fontWeight: '700',
    color: 'white',
    marginTop: 2,
  },
  albumWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  albumArt: {
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 20,
  },
  songInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  songTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
  },
  songArtist: {
    fontSize: 15,
    color: '#b3b3b3',
    marginTop: 4,
  },
  progressSection: {
    marginBottom: 24,
  },
  progressTrack: {
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 2,
    position: 'relative',
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 2,
  },
  progressKnob: {
    position: 'absolute',
    top: '50%',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'white',
    marginTop: -6,
    marginLeft: -6,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  timeText: {
    fontSize: 11,
    color: '#b3b3b3',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  playBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
});
