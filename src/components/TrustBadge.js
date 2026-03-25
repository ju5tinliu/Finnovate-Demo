import { Text, View } from 'react-native';

export function TrustBadge({ compact = false }) {
  if (compact) {
    return (
      <View className="flex-row items-center self-start rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
        <Text className="mr-1.5 text-xs">🛡️</Text>
        <Text className="text-xs font-semibold text-emerald-900">University protected</Text>
      </View>
    );
  }

  return (
    <View className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3">
      <View className="mb-1 flex-row items-center">
        <Text className="mr-2 text-lg">🛡️</Text>
        <Text className="text-base font-semibold text-emerald-950">University protected transaction</Text>
      </View>
      <Text className="text-sm leading-5 text-emerald-900/90">
        Routed through your institution&apos;s financial system, not a personal payment app. Designed to
        help organizations avoid personal tax reporting surprises on large volumes of gifts.
      </Text>
    </View>
  );
}
