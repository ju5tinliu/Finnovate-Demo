import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '../components/PrimaryButton';
import { SpeedPill } from '../components/SpeedPill';
import { TrustBadge } from '../components/TrustBadge';
import { VenmoComparison } from '../components/VenmoComparison';
import { formatMoney, generateReference } from '../mock/clubData';

export function ConfirmScreen({ navigation, route }) {
  const { club, amountCents, reason } = route.params ?? {};
  const [loading, setLoading] = useState(false);

  if (club == null || amountCents == null || reason == null) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-org-paper px-6">
        <Text className="text-center text-base text-zinc-600">Missing payment details.</Text>
        <View className="mt-4 w-full">
          <PrimaryButton label="Go back" onPress={() => navigation.goBack()} variant="outline" />
        </View>
      </SafeAreaView>
    );
  }

  function confirmPayment() {
    setLoading(true);
    const reference = generateReference();
    setTimeout(() => {
      setLoading(false);
      navigation.replace('Success', { club, amountCents, reason, reference });
    }, 900);
  }

  return (
    <SafeAreaView className="flex-1 bg-org-paper" edges={['top', 'left', 'right']}>
      <ScrollView className="flex-1 px-5" contentContainerStyle={{ paddingBottom: 32 }}>
        <Text className="mt-2 text-2xl font-bold text-org-ink">Confirm payment</Text>
        <Text className="mt-1 text-sm text-zinc-600">
          You&apos;re about to submit a university protected transfer.
        </Text>

        <View className="mt-5 rounded-2xl border border-org-line bg-white px-4 py-4">
          <Row label="To" value={club} />
          <Divider />
          <Row label="Amount" value={formatMoney(amountCents)} emphasize />
          <Divider />
          <Row label="For" value={reason} />
        </View>

        <View className="mt-5">
          <TrustBadge />
        </View>

        <View className="mt-4 flex-row flex-wrap gap-3">
          <SpeedPill />
        </View>

        <View className="mt-5">
          <VenmoComparison />
        </View>

        <View className="mt-2 rounded-xl bg-white px-3 py-3">
          <Text className="text-center text-xs leading-4 text-zinc-500">
            Unlike Venmo: funds are not treated as personal peer to peer volume on a treasurer&apos;s
            individual account, reducing surprise tax reporting risk for your org.
          </Text>
        </View>

        <View className="mt-8 gap-3">
          <PrimaryButton label="Confirm university protected payment" onPress={confirmPayment} loading={loading} />
          <PrimaryButton label="Edit details" onPress={() => navigation.goBack()} variant="outline" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Row({ label, value, emphasize }) {
  return (
    <View>
      <Text className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{label}</Text>
      <Text className={`mt-1 text-base text-org-ink ${emphasize ? 'text-xl font-bold' : ''}`}>
        {value}
      </Text>
    </View>
  );
}

function Divider() {
  return <View className="my-4 h-px bg-org-line" />;
}
