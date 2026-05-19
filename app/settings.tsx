import { useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import {
  ArrowLeft,
  ChevronRight,
  House,
  Library,
  Search,
  User,
} from 'lucide-react-native';

// ---------------------------------------------------------------------------
// Toggle Switch
// ---------------------------------------------------------------------------

function ToggleSwitch({
  value,
  onToggle,
}: {
  value: boolean;
  onToggle: (next: boolean) => void;
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onToggle(!value)}
      className={`w-[40px] h-[24px] rounded-full justify-center px-[2px] ${
        value ? 'bg-[#1ed760]' : 'bg-[#727272]'
      }`}
    >
      <View
        className={`w-[16px] h-[16px] rounded-full bg-white ${
          value ? 'self-end' : 'self-start'
        }`}
      />
    </TouchableOpacity>
  );
}

// ---------------------------------------------------------------------------
// Settings Row
// ---------------------------------------------------------------------------

function SettingsRow({
  title,
  subtitle,
  label,
  labelColor = 'text-[#94a3b8]',
  rightChevron = true,
  toggle,
  lastRow = false,
}: {
  title: string;
  subtitle?: string;
  label?: string;
  labelColor?: string;
  rightChevron?: boolean;
  toggle?: { value: boolean; onToggle: (next: boolean) => void };
  lastRow?: boolean;
}) {
  return (
    <View
      className={`flex-row justify-between items-center min-h-[56px] ${
        !lastRow ? 'border-b border-[rgba(255,255,255,0.05)]' : ''
      }`}
    >
      <View className="flex-1 pr-4">
        <Text
          style={{ fontFamily: 'System' }}
          className="text-white text-sm font-bold"
        >
          {title}
        </Text>
        {subtitle ? (
          <Text
            style={{ fontFamily: 'System' }}
            className="text-[#94a3b8] text-xs leading-[18px] mt-[2px]"
          >
            {subtitle}
          </Text>
        ) : null}
      </View>

      {toggle ? (
        <ToggleSwitch value={toggle.value} onToggle={toggle.onToggle} />
      ) : label ? (
        <View className="flex-row items-center gap-1">
          <Text
            style={{ fontFamily: 'System' }}
            className={`${labelColor} text-xs font-medium`}
          >
            {label}
          </Text>
          {rightChevron ? (
            <ChevronRight size={12} color="#94a3b8" strokeWidth={2} />
          ) : null}
        </View>
      ) : rightChevron ? (
        <ChevronRight size={16} color="#94a3b8" strokeWidth={2} />
      ) : null}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Storage Bar
// ---------------------------------------------------------------------------

function StorageBar() {
  return (
    <>
      <View className="w-full h-[6px] rounded-full bg-[#282828] flex-row overflow-hidden">
        <View className="flex-[0.45] bg-[#1ed760]" />
        <View className="flex-[0.25] bg-[#b3b3b3]" />
        <View className="flex-[0.30] bg-[#4d4d4d]" />
      </View>

      <View className="flex-row gap-6 mt-4">
        <StorageLegendItem dotColor="bg-[#1ed760]" label="Downloads" value="12.4 GB" />
        <StorageLegendItem dotColor="bg-[#b3b3b3]" label="Cache" value="4.2 GB" />
        <StorageLegendItem dotColor="bg-[#4d4d4d]" label="Free" value="8.4 GB" />
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        className="border border-[#727272] rounded-full px-8 py-[11px] self-start mt-4"
      >
        <Text
          style={{ fontFamily: 'System' }}
          className="text-white text-sm font-bold text-center"
        >
          Clear Cache
        </Text>
      </TouchableOpacity>
    </>
  );
}

function StorageLegendItem({
  dotColor,
  label,
  value,
}: {
  dotColor: string;
  label: string;
  value: string;
}) {
  return (
    <View className="flex-row items-center gap-[6px]">
      <View className={`w-[8px] h-[8px] rounded-full ${dotColor}`} />
      <View>
        <Text
          style={{ fontFamily: 'System' }}
          className="text-white/90 text-xs"
        >
          {label}
        </Text>
        <Text
          style={{ fontFamily: 'System' }}
          className="text-[#64748b] text-xs"
        >
          {value}
        </Text>
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Main Screen
// ---------------------------------------------------------------------------

export default function SettingsScreen() {
  const router = useRouter();

  // Toggle states
  const [gaplessPlayback, setGaplessPlayback] = useState(true);
  const [automix, setAutomix] = useState(true);
  const [dataSaver, setDataSaver] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#121212]" edges={['top']}>
      {/* Header */}
      <View className="bg-[rgba(18,18,18,0.95)] p-4 flex-row items-center">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.back()}
          className="w-[40px] h-[40px] items-center justify-center"
        >
          <ArrowLeft size={24} color="#ffffff" />
        </TouchableOpacity>

        <Text
          style={{ fontFamily: 'System' }}
          className="text-white text-base font-bold text-center flex-1 pr-[40px]"
        >
          Settings
        </Text>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Content */}
        <View className="pt-6 px-6 gap-6">
          {/* ── Profile Section ── */}
          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row gap-4 items-center"
          >
            <View className="size-[56px] rounded-full bg-[#282828] items-center justify-center">
              <User size={28} color="#b3b3b3" />
            </View>
            <View className="flex-1">
              <Text
                style={{ fontFamily: 'System' }}
                className="text-white text-xl font-bold"
              >
                Alex Thompson
              </Text>
              <View className="flex-row items-center gap-[2px]">
                <Text
                  style={{ fontFamily: 'System' }}
                  className="text-[#94a3b8] text-sm"
                >
                  View Profile
                </Text>
                <ChevronRight size={14} color="#94a3b8" strokeWidth={2} />
              </View>
            </View>
          </TouchableOpacity>

          {/* ── Account Section ── */}
          <View>
            <Text
              style={{ fontFamily: 'System' }}
              className="text-white text-base font-bold pt-4 pb-3 px-0"
            >
              Account
            </Text>
            <SettingsRow
              title="Premium Plan"
              subtitle="Individual • Next bill Dec 12"
              rightChevron
            />
            <SettingsRow
              title="Email"
              subtitle="alex.t@example.com"
              rightChevron
              lastRow
            />
          </View>

          {/* ── Data Saver Section ── */}
          <View>
            <Text
              style={{ fontFamily: 'System' }}
              className="text-white text-base font-bold pt-6 pb-3"
            >
              Data Saver
            </Text>
            <SettingsRow
              title="Audio Quality"
              subtitle="Sets your audio quality to low (equivalent to 24kbit/s) and hides artist canvases."
              toggle={{ value: dataSaver, onToggle: setDataSaver }}
              lastRow
            />
          </View>

          {/* ── Playback Section ── */}
          <View>
            <Text
              style={{ fontFamily: 'System' }}
              className="text-white text-base font-bold pt-6 pb-3"
            >
              Playback
            </Text>
            <SettingsRow
              title="Gapless Playback"
              subtitle="Allow transitions between songs"
              toggle={{ value: gaplessPlayback, onToggle: setGaplessPlayback }}
            />
            <SettingsRow
              title="Automix"
              subtitle="Smooth transitions between tracks"
              toggle={{ value: automix, onToggle: setAutomix }}
              lastRow
            />
          </View>

          {/* ── Audio Quality Section ── */}
          <View>
            <Text
              style={{ fontFamily: 'System' }}
              className="text-white text-base font-bold pt-6 pb-3"
            >
              Audio Quality
            </Text>
            <SettingsRow
              title="WiFi Streaming"
              label="Very High"
              labelColor="text-[#1ed760]"
            />
            <SettingsRow
              title="Cellular Streaming"
              label="Automatic"
              labelColor="text-[#1ed760]"
              lastRow
            />
          </View>

          {/* ── Storage Section ── */}
          <View>
            <Text
              style={{ fontFamily: 'System' }}
              className="text-white text-base font-bold pt-6 pb-3"
            >
              Storage
            </Text>
            <StorageBar />
          </View>

          {/* ── Version Footer ── */}
          <View className="pt-10 pb-4 items-center">
            <Text
              style={{ fontFamily: 'System' }}
              className="text-[#64748b] text-[10px] uppercase tracking-[1px] text-center"
            >
              Version 8.8.82.634
            </Text>
          </View>

          {/* ── Bottom Navigation Bar ── */}
          <View className="flex-row justify-between items-end pt-6 pb-4 px-8">
            {/* Home — inactive */}
            <View className="items-center gap-[4px]">
              <House size={28} color="#b3b3b3" />
              <Text
                style={{ fontFamily: 'System' }}
                className="text-[10px] text-[#b3b3b3]"
              >
                Home
              </Text>
            </View>

            {/* Search — active */}
            <View className="items-center gap-[4px]">
              <Search size={28} color="#ffffff" />
              <Text
                style={{ fontFamily: 'System' }}
                className="text-[10px] text-white"
              >
                Search
              </Text>
            </View>

            {/* Library — inactive */}
            <View className="items-center gap-[4px]">
              <Library size={28} color="#b3b3b3" />
              <Text
                style={{ fontFamily: 'System' }}
                className="text-[10px] text-[#b3b3b3]"
              >
                Your Library
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
