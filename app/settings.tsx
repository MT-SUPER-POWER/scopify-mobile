import { useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowLeft, ChevronRight, User } from 'lucide-react-native';

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
      style={[
        styles.toggleOuter,
        value ? styles.toggleOuterOn : styles.toggleOuterOff,
      ]}
    >
      <View
        style={[
          styles.toggleThumb,
          value ? styles.toggleThumbOn : styles.toggleThumbOff,
        ]}
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
  labelColor = '#1ed760',
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
    <View style={[styles.row, !lastRow && styles.rowBorder]}>
      <View style={styles.rowLeft}>
        <Text style={styles.rowTitle}>{title}</Text>
        {subtitle ? <Text style={styles.rowSubtitle}>{subtitle}</Text> : null}
      </View>

      {toggle ? (
        <ToggleSwitch value={toggle.value} onToggle={toggle.onToggle} />
      ) : label ? (
        <View style={styles.rowRight}>
          <Text style={[styles.rowLabel, { color: labelColor }]}>
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
// Storage Legend Item
// ---------------------------------------------------------------------------

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
    <View style={styles.legendItem}>
      <View style={[styles.dot, { backgroundColor: dotColor }]} />
      <View>
        <Text style={styles.legendLabel}>{label}</Text>
        <Text style={styles.legendValue}>{value}</Text>
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Storage Bar
// ---------------------------------------------------------------------------

function StorageBar() {
  return (
    <View style={styles.storageSection}>
      <View style={styles.storageBar}>
        <View style={styles.storageGreen} />
        <View style={styles.storageGray} />
        <View style={styles.storageDark} />
      </View>

      <View style={styles.legendRow}>
        <StorageLegendItem
          dotColor="#1ed760"
          label="Downloads"
          value="12.4 GB"
        />
        <StorageLegendItem
          dotColor="#b3b3b3"
          label="Cache"
          value="4.2 GB"
        />
        <StorageLegendItem
          dotColor="#4d4d4d"
          label="Free"
          value="8.4 GB"
        />
      </View>

      <TouchableOpacity activeOpacity={0.7} style={styles.clearCacheBtn}>
        <Text style={styles.clearCacheText}>Clear Cache</Text>
      </TouchableOpacity>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Main Screen
// ---------------------------------------------------------------------------

export default function SettingsScreen() {
  const router = useRouter();

  const [gaplessPlayback, setGaplessPlayback] = useState(true);
  const [automix, setAutomix] = useState(true);
  const [dataSaver, setDataSaver] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.back()}
          style={styles.headerBackButton}
        >
          <ArrowLeft size={24} color="#ffffff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Profile Section ── */}
        <TouchableOpacity activeOpacity={0.7} style={styles.profileSection}>
          <View style={styles.avatar}>
            <User size={28} color="#b3b3b3" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.profileName}>Alex Thompson</Text>
            <View style={styles.profileViewRow}>
              <Text style={styles.profileViewText}>View Profile</Text>
              <ChevronRight size={14} color="#94a3b8" strokeWidth={2} />
            </View>
          </View>
        </TouchableOpacity>

        {/* ── Account Section ── */}
        <View style={styles.accountSection}>
          <Text style={styles.sectionLabelFirst}>Account</Text>
          <SettingsRow
            title="Premium Plan"
            subtitle="Individual • Next bill Dec 12"
          />
          <SettingsRow
            title="Email"
            subtitle="alex.t@example.com"
            lastRow
          />
        </View>

        {/* ── Data Saver Section ── */}
        <View>
          <Text style={styles.sectionLabel}>Data Saver</Text>
          <SettingsRow
            title="Audio Quality"
            subtitle="Sets your audio quality to low (equivalent to 24kbit/s) and hides artist canvases."
            toggle={{ value: dataSaver, onToggle: setDataSaver }}
            lastRow
          />
        </View>

        {/* ── Playback Section ── */}
        <View>
          <Text style={styles.sectionLabel}>Playback</Text>
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
          <Text style={styles.sectionLabel}>Audio Quality</Text>
          <SettingsRow title="WiFi Streaming" label="Very High" />
          <SettingsRow
            title="Cellular Streaming"
            label="Automatic"
            lastRow
          />
        </View>

        {/* ── Storage Section ── */}
        <View>
          <Text style={styles.sectionLabel}>Storage</Text>
          <StorageBar />
        </View>

        {/* ── Version Footer ── */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Version 8.8.82.634</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },

  // Header
  header: {
    backgroundColor: 'rgba(18,18,18,0.95)',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBackButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    paddingRight: 40,
  },

  // Profile
  profileSection: {
    paddingHorizontal: 24,
    paddingTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#282828',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
  profileViewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  profileViewText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#94a3b8',
  },

  // Account Section (marginTop handled via accountSection style)
  accountSection: {
    marginTop: 24,
  },

  // Section Labels
  sectionLabelFirst: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 24,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    paddingTop: 24,
    paddingBottom: 12,
    paddingHorizontal: 24,
  },

  // Settings Row
  row: {
    minHeight: 56,
    paddingHorizontal: 24,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  rowLeft: {
    flex: 1,
    paddingRight: 16,
  },
  rowTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  rowSubtitle: {
    fontSize: 12,
    color: '#94a3b8',
    lineHeight: 18,
    marginTop: 2,
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rowLabel: {
    fontSize: 12,
    fontWeight: '500',
  },

  // Toggle Switch
  toggleOuter: {
    width: 40,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleOuterOn: {
    backgroundColor: '#1ed760',
  },
  toggleOuterOff: {
    backgroundColor: '#727272',
  },
  toggleThumb: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  toggleThumbOn: {
    alignSelf: 'flex-end',
  },
  toggleThumbOff: {
    alignSelf: 'flex-start',
  },

  // Storage
  storageSection: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  storageBar: {
    height: 6,
    borderRadius: 9999,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: '#282828',
  },
  storageGreen: {
    flex: 0.45,
    backgroundColor: '#1ed760',
  },
  storageGray: {
    flex: 0.25,
    backgroundColor: '#b3b3b3',
  },
  storageDark: {
    flex: 0.3,
    backgroundColor: '#4d4d4d',
  },
  legendRow: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 24,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendLabel: {
    color: '#cbd5e1',
    fontSize: 12,
  },
  legendValue: {
    color: '#64748b',
    fontSize: 12,
  },
  clearCacheBtn: {
    borderWidth: 1,
    borderColor: '#727272',
    borderRadius: 9999,
    paddingHorizontal: 33,
    paddingVertical: 11,
    marginTop: 16,
    alignSelf: 'flex-start',
  },
  clearCacheText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },

  // Footer
  footer: {
    paddingTop: 40,
    paddingBottom: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#64748b',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});
