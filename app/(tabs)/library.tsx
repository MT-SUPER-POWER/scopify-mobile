import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Library } from 'lucide-react-native';

export default function LibraryScreen() {
  return (
    <SafeAreaView
      className="flex-1 items-center justify-center bg-[#121212]"
      edges={['top']}
    >
      <Library size={48} color="#b3b3b3" />
      <Text
        style={{ fontFamily: 'System' }}
        className="text-white text-xl font-bold mt-4"
      >
        Your Library
      </Text>
      <Text
        style={{ fontFamily: 'System' }}
        className="text-[#b3b3b3] text-sm text-center mt-2 px-8"
      >
        Build your collection of playlists and albums
      </Text>
    </SafeAreaView>
  );
}
