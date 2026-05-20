import { View, Text, Pressable } from 'react-native';
import { ChevronDown, MoreHorizontal } from 'lucide-react-native';

interface PlayerHeaderProps {
  playlistName: string;
  onDismiss: () => void;
}

export function PlayerHeader({ playlistName, onDismiss }: PlayerHeaderProps) {
  return (
    <View className="flex-row items-center justify-between pt-2 pb-1">
      <Pressable onPress={onDismiss} className="p-2">
        <ChevronDown size={34} color="white" />
      </Pressable>
      <View className="items-center">
        <Text className="text-xs font-bold tracking-widest text-white uppercase">
          PLAYING FROM PLAYLIST
        </Text>
        <Text className="mt-0.5 text-sm font-bold text-white">{playlistName}</Text>
      </View>
      <Pressable className="p-2">
        <MoreHorizontal size={34} color="white" />
      </Pressable>
    </View>
  );
}
