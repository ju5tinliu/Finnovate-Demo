import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '../components/PrimaryButton';
import { TrustBadge } from '../components/TrustBadge';
import { formatMoney } from '../mock/clubData';

export function SuccessScreen({ navigation, route }) {
  const { club, amountCents, reason, reference } = route.params ?? {};

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'left', 'right']}>
      <View className="flex-1 justify-between px-5 pb-6 pt-4">
        <View>
          <View className="mb-6 items-center">
            <View className="mb-4 h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
              <Text className="text-3xl">✓</Text>
            </View>
            <Text className="text-center text-2xl font-bold text-org-ink">Payment submitted</Text>
            <Text className="mt-2 text-center text-sm leading-5 text-zinc-600">
              Your gift is being processed on university protected rails.
            </Text>
          </View>

          <View className="rounded-2xl border border-org-line bg-org-paper px-4 py-4">
            <Text className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Reference number
            </Text>
            <Text
              className="mt-1 font-mono text-xl font-bold text-org-ink"
              accessibilityLabel={`Reference number ${reference}`}
            >
              {reference}
            </Text>
            <View className="my-4 h-px bg-org-line" />
            <Text className="text-sm text-zinc-600">
              <Text className="font-semibold text-org-ink">To: </Text>
              {club}
            </Text>
            <Text className="mt-2 text-sm text-zinc-600">
              <Text className="font-semibold text-org-ink">Amount: </Text>
              {formatMoney(amountCents)}
            </Text>
            <Text className="mt-2 text-sm text-zinc-600">
              <Text className="font-semibold text-org-ink">For: </Text>
              {reason}
            </Text>
          </View>

          <View className="mt-5">
            <TrustBadge compact />
          </View>
        </View>

        <PrimaryButton
          label="Done"
          onPress={() => {
            navigation.popToTop();
          }}
        />
      </View>
    </SafeAreaView>
  );
}
