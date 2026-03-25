import { Text, View } from 'react-native';

export function VenmoComparison() {
  return (
    <View className="rounded-2xl border border-org-line bg-white px-4 py-3">
      <Text className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
        Why not Venmo or Zelle?
      </Text>
      <View className="flex-row">
        <View className="mr-3 flex-1 rounded-xl bg-red-50 px-3 py-2">
          <Text className="mb-1 text-xs font-semibold text-red-900">Personal apps</Text>
          <Text className="text-xs leading-4 text-red-800/90">
            High volumes can create personal tax reporting obligations (often discussed around the $600
            threshold for certain forms).
          </Text>
        </View>
        <View className="flex-1 rounded-xl bg-emerald-50 px-3 py-2">
          <Text className="mb-1 text-xs font-semibold text-emerald-900">OrgPay</Text>
          <Text className="text-xs leading-4 text-emerald-900/90">
            University backed flow keeps gifts on institutional rails, built for clubs, not personal
            wallets.
          </Text>
        </View>
      </View>
    </View>
  );
}
