import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SpeedPill } from '../components/SpeedPill';
import { TrustBadge } from '../components/TrustBadge';
import {
  CURRENT_FUNDRAISER,
  MOCK_TRANSACTIONS,
  formatMoney,
  formatShortDate,
} from '../mock/clubData';

export function DashboardScreen() {
  const { name, collectedCents, goalCents } = CURRENT_FUNDRAISER;
  const pct = Math.min(100, Math.round((collectedCents / goalCents) * 100));

  return (
    <SafeAreaView className="flex-1 bg-org-paper" edges={['top', 'left', 'right']}>
      <ScrollView className="flex-1 px-5" contentContainerStyle={{ paddingBottom: 32 }}>
        <View className="mt-2 flex-row items-center justify-between">
          <View>
            <Text className="text-xs font-semibold uppercase tracking-wide text-org-red">OrgPay</Text>
            <Text className="text-2xl font-bold text-org-ink">Club dashboard</Text>
          </View>
          <View className="rounded-full border border-org-line bg-white px-3 py-1">
            <Text className="text-xs font-medium text-zinc-600">Demo view</Text>
          </View>
        </View>

        <Text className="mt-1 text-sm text-zinc-600">Read only preview for treasurers.</Text>

        <View className="mt-5 rounded-2xl border border-org-line bg-white px-4 py-4">
          <Text className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Active fundraiser
          </Text>
          <Text className="mt-1 text-lg font-semibold text-org-ink">{name}</Text>
          <Text className="mt-3 text-3xl font-bold text-org-ink">{formatMoney(collectedCents)}</Text>
          <Text className="text-sm text-zinc-500">collected toward {formatMoney(goalCents)} goal</Text>
          <View className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-100">
            <View className="h-full rounded-full bg-org-red" style={{ width: `${pct}%` }} />
          </View>
          <Text className="mt-2 text-xs text-zinc-500">{pct}% of goal</Text>
        </View>

        <View className="mt-4 flex-row flex-wrap gap-3">
          <SpeedPill />
        </View>

        <View className="mt-4">
          <TrustBadge />
        </View>

        <Text className="mb-3 mt-8 text-lg font-semibold text-org-ink">Recent transactions</Text>
        {MOCK_TRANSACTIONS.map((tx) => (
          <View
            key={tx.id}
            className="mb-3 rounded-2xl border border-org-line bg-white px-4 py-3"
          >
            <View className="flex-row items-start justify-between">
              <View className="flex-1 pr-2">
                <Text className="text-base font-semibold text-org-ink">{tx.from}</Text>
                <Text className="text-sm text-zinc-500">{tx.reason}</Text>
              </View>
              <Text className="text-base font-bold text-org-ink">{formatMoney(tx.amountCents)}</Text>
            </View>
            <View className="mt-3 flex-row flex-wrap items-center justify-between gap-2">
              <Text className="font-mono text-xs text-zinc-500">{tx.reference}</Text>
              <View className="flex-row items-center gap-2">
                <Text className="text-xs text-zinc-400">{formatShortDate(tx.at)}</Text>
                <View
                  className={`rounded-full px-2 py-0.5 ${
                    tx.status === 'settled' ? 'bg-emerald-50' : 'bg-amber-50'
                  }`}
                >
                  <Text
                    className={`text-xs font-semibold ${
                      tx.status === 'settled' ? 'text-emerald-800' : 'text-amber-800'
                    }`}
                  >
                    {tx.status === 'settled' ? 'Settled' : 'Pending'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}

        <View className="mt-4 rounded-xl border border-dashed border-org-line bg-white px-3 py-3">
          <Text className="text-center text-xs leading-4 text-zinc-500">
            All amounts shown are mock data. Production balances would sync from your university
            ledger.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
