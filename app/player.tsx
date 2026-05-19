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
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };

export default function PlayerScreen() {
  return (
    <SafeAreaView edges={['top']} className="flex-1" style={styles.container}>
      {/* Gradient Background Simulation */}
      <View style={styles.gradient} />

      {/* Header */}
      <View style={styles.header}>
        {/* Minimize Button */}
        <Pressable
          onPress={() => router.back()}
          style={styles.headerIconButton}
          hitSlop={HIT_SLOP}
        >
          <ChevronDown size={24} color="#fff" />
        </Pressable>

        {/* Center Text Stack */}
        <View style={styles.headerCenter}>
          <Text style={styles.playingFromText}>Playing From Playlist</Text>
          <Text style={styles.playlistText}>Discover Weekly</Text>
        </View>

        {/* Menu Button */}
        <Pressable style={styles.headerIconButton} hitSlop={HIT_SLOP}>
          <Ellipsis size={24} color="#fff" />
        </Pressable>
      </View>

      {/* Album Art Section */}
      <View style={styles.albumSection}>
        <View style={styles.albumArt}>
          <Music size={80} color="rgba(255,255,255,0.3)" />
        </View>
      </View>

      {/* Song Info Section */}
      <View style={styles.songInfo}>
        {/* Song Name & Artist */}
        <View style={styles.songInfoLeft}>
          <Text style={styles.songTitle}>Midnight City</Text>
          <Text style={styles.artistText}>M83</Text>
        </View>

        {/* Heart Button */}
        <Pressable style={styles.heartButton} hitSlop={HIT_SLOP}>
          <Heart size={28} color="#fff" />
        </Pressable>
      </View>

      {/* Progress Bar Section */}
      <View style={styles.progressSection}>
        {/* Progress Track */}
        <View style={styles.progressTrack}>
          {/* Filled Portion */}
          <View style={styles.progressFilled} />
          {/* Thumb */}
          <View style={styles.progressThumb} />
        </View>

        {/* Timestamps */}
        <View style={styles.timestampsRow}>
          <Text style={styles.timestampText}>1:42</Text>
          <Text style={styles.timestampText}>-2:21</Text>
        </View>
      </View>

      {/* Media Controls */}
      <View style={styles.controls}>
        {/* Shuffle */}
        <Pressable style={styles.controlButton} hitSlop={HIT_SLOP}>
          <Shuffle size={24} color="#b3b3b3" />
        </Pressable>

        {/* Previous */}
        <Pressable style={styles.controlButton} hitSlop={HIT_SLOP}>
          <SkipBack size={36} color="#fff" />
        </Pressable>

        {/* Play / Pause */}
        <Pressable style={styles.playButton} hitSlop={HIT_SLOP}>
          <Pause size={36} color="#000" />
        </Pressable>

        {/* Next */}
        <Pressable style={styles.controlButton} hitSlop={HIT_SLOP}>
          <SkipForward size={36} color="#fff" />
        </Pressable>

        {/* Repeat */}
        <Pressable style={styles.controlButton} hitSlop={HIT_SLOP}>
          <Repeat size={24} color="#b3b3b3" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '60%',
    backgroundColor: '#1a1a1a',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIconButton: {
    padding: 8,
    borderRadius: 9999,
  },
  headerCenter: {
    alignItems: 'center',
    flex: 1,
  },
  playingFromText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#9ca3af',
    letterSpacing: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  playlistText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
  },
  albumSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  albumArt: {
    width: '100%',
    maxWidth: 340,
    aspectRatio: 1,
    borderRadius: 6,
    backgroundColor: '#4a5568',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.5,
    shadowRadius: 50,
    elevation: 25,
  },
  songInfo: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  songInfoLeft: {
    flex: 1,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: 32,
  },
  artistText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#9ca3af',
  },
  heartButton: {
    padding: 8,
  },
  progressSection: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  progressTrack: {
    width: '100%',
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 9999,
  },
  progressFilled: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '45%',
    height: 4,
    backgroundColor: '#ffffff',
    borderRadius: 9999,
  },
  progressThumb: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 9999,
    backgroundColor: '#ffffff',
    top: '50%',
    marginTop: -6,
    left: '45%',
    marginLeft: -6,
  },
  timestampsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  timestampText: {
    fontSize: 10,
    fontWeight: '400',
    color: '#9ca3af',
  },
  controls: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  controlButton: {
    padding: 8,
  },
  playButton: {
    backgroundColor: '#ffffff',
    borderRadius: 9999,
    padding: 16,
  },
});
