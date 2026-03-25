import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '../components/PrimaryButton';
import { VenmoComparison } from '../components/VenmoComparison';

const STORAGE_KEY = '@orgpay_onboarding_complete';

export async function markOnboardingComplete() {
  await AsyncStorage.setItem(STORAGE_KEY, '1');
}

export async function getOnboardingComplete() {
  const v = await AsyncStorage.getItem(STORAGE_KEY);
  return v === '1';
}

export function OnboardingScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'left', 'right']}>
      <ScrollView
        className="flex-1 px-5 pt-2"
        contentContainerStyle={{ paddingBottom: 32 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="mb-6 mt-2">
          <View className="mb-2 self-start rounded-full bg-org-red/10 px-3 py-1">
            <Text className="text-xs font-semibold uppercase tracking-wide text-org-red">
              For student organizations
            </Text>
          </View>
          <Text className="text-3xl font-bold leading-tight text-org-ink">Welcome to OrgPay</Text>
          <Text className="mt-3 text-base leading-6 text-zinc-600">
            Collect fundraising safely through your university, fast for donors, structured for
            treasurers.
          </Text>
        </View>

        <View className="mb-6 rounded-2xl border border-org-line bg-org-paper px-4 py-4">
          <Text className="mb-2 text-lg font-semibold text-org-ink">The problem with personal apps</Text>
          <Text className="text-sm leading-5 text-zinc-600">
            Venmo and Zelle payouts can land on personal accounts. When activity adds up, treasurers and
            families may face unexpected tax reporting, including forms often associated with the $600
            threshold.
          </Text>
          <View className="my-4 h-px bg-org-line" />
          <Text className="mb-2 text-lg font-semibold text-org-ink">How OrgPay helps</Text>
          <Text className="text-sm leading-5 text-zinc-600">
            OrgPay routes gifts through your institution&apos;s financial rails so funds stay
            organization grade, not mixed with personal wallets. Typical settlement in seconds, not the
            long manual flow you may be used to.
          </Text>
        </View>

        <View className="mb-6">
          <VenmoComparison />
        </View>

        <View className="mb-2 rounded-2xl border border-dashed border-org-line bg-white px-4 py-4">
          <Text className="mb-1 text-sm font-semibold text-org-ink">Link your club (demo)</Text>
          <Text className="text-sm leading-5 text-zinc-600">
            In production, you&apos;d connect with your Northeastern ID and org roster. This demo skips
            real authentication.
          </Text>
        </View>

        <PrimaryButton
          label="Continue with university link (demo)"
          onPress={async () => {
            await markOnboardingComplete();
            navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
          }}
        />

        <Text className="mt-4 text-center text-xs leading-4 text-zinc-400">
          Demo concept only, not tax, legal, or financial advice.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
