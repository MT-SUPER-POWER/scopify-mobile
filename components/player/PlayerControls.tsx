import { View, Pressable } from 'react-native';
import { Shuffle, SkipBack, Play, SkipForward, Repeat1 } from 'lucide-react-native';

export function PlayerControls() {
  return (
    <View className="flex-row items-center justify-between">
      <Pressable hitSlop={8}>
        <Shuffle size={26} color="#22c55e" />
      </Pressable>
      <Pressable hitSlop={8}>
        <SkipBack size={40} color="white" fill="white" />
      </Pressable>
      <Pressable className="h-20 w-20 items-center justify-center rounded-full bg-white">
        <Play size={36} color="black" fill="black" style={{ marginLeft: 4 }} />
      </Pressable>
      <Pressable hitSlop={8}>
        <SkipForward size={40} color="white" fill="white" />
      </Pressable>
      <Pressable hitSlop={8}>
        <Repeat1 size={26} color="white" />
      </Pressable>
    </View>
  );
}
