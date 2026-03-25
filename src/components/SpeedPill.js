import { Text, View } from 'react-native';

export function SpeedPill() {
  return (
    <View className="flex-row items-center rounded-xl border border-org-line bg-white px-3 py-2">
      <Text className="mr-2 text-sm">⚡</Text>
      <View>
        <Text className="text-xs font-medium uppercase tracking-wide text-zinc-500">Estimated time</Text>
        <Text className="text-sm font-semibold text-org-ink">~5 seconds</Text>
      </View>
    </View>
  );
}
