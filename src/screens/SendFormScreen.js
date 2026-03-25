import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '../components/PrimaryButton';
import { SpeedPill } from '../components/SpeedPill';
import { TrustBadge } from '../components/TrustBadge';

function parseAmountToCents(raw) {
  const cleaned = raw.replace(/[^0-9.]/g, '');
  if (!cleaned) return null;
  const n = Number.parseFloat(cleaned);
  if (!Number.isFinite(n) || n <= 0) return null;
  return Math.round(n * 100);
}

export function SendFormScreen({ navigation }) {
  const [club, setClub] = useState('NU Dance Team');
  const [amount, setAmount] = useState('25');
  const [reason, setReason] = useState('Spring Formal 2026');
  const [error, setError] = useState('');

  function onContinue() {
    setError('');
    const trimmedClub = club.trim();
    const trimmedReason = reason.trim();
    if (!trimmedClub) {
      setError('Enter a recipient club name.');
      return;
    }
    if (!trimmedReason) {
      setError('Enter a fundraiser or reason.');
      return;
    }
    const cents = parseAmountToCents(amount);
    if (cents == null) {
      setError('Enter a valid amount greater than zero.');
      return;
    }
    navigation.navigate('Confirm', {
      club: trimmedClub,
      amountCents: cents,
      reason: trimmedReason,
    });
  }

  return (
    <SafeAreaView className="flex-1 bg-org-paper" edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          className="flex-1 px-5"
          contentContainerStyle={{ paddingBottom: 28 }}
          keyboardShouldPersistTaps="handled"
        >
          <Text className="mt-2 text-2xl font-bold text-org-ink">Send or request</Text>
          <Text className="mt-1 text-sm text-zinc-600">
            Money moves on university protected rails, not your personal Venmo.
          </Text>

          <View className="mt-5">
            <TrustBadge compact />
          </View>

          <View className="mt-5 flex-row flex-wrap gap-3">
            <SpeedPill />
          </View>

          {error ? (
            <View className="mt-5 rounded-xl border border-red-200 bg-red-50 px-3 py-3">
              <Text className="text-sm font-medium text-red-900">{error}</Text>
            </View>
          ) : null}

          <View className="mt-6">
            <Text className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Recipient club
            </Text>
            <TextInput
              value={club}
              onChangeText={setClub}
              placeholder="e.g. NU Dance Team"
              placeholderTextColor="#a1a1aa"
              className="rounded-xl border border-org-line bg-white px-4 py-3.5 text-base text-org-ink"
              autoCapitalize="words"
              accessibilityLabel="Recipient club name"
            />
          </View>

          <View className="mt-4">
            <Text className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Amount (USD)
            </Text>
            <TextInput
              value={amount}
              onChangeText={setAmount}
              placeholder="0.00"
              placeholderTextColor="#a1a1aa"
              keyboardType="decimal-pad"
              className="rounded-xl border border-org-line bg-white px-4 py-3.5 text-base text-org-ink"
              accessibilityLabel="Payment amount"
            />
          </View>

          <View className="mt-4">
            <Text className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Fundraiser or reason
            </Text>
            <TextInput
              value={reason}
              onChangeText={setReason}
              placeholder="e.g. Spring Formal tickets"
              placeholderTextColor="#a1a1aa"
              className="rounded-xl border border-org-line bg-white px-4 py-3.5 text-base text-org-ink"
              accessibilityLabel="Fundraiser or reason"
            />
          </View>

          <View className="mt-8">
            <PrimaryButton label="Review payment" onPress={onContinue} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
