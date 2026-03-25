import { ActivityIndicator, Pressable, Text } from 'react-native';

export function PrimaryButton({ label, onPress, variant = 'primary', disabled, loading }) {
  const base =
    'items-center justify-center rounded-xl px-4 py-3.5 active:opacity-90';
  const styles =
    variant === 'primary'
      ? 'bg-org-red'
      : variant === 'outline'
        ? 'border border-org-line bg-white'
        : 'bg-org-ink';

  const textStyles =
    variant === 'outline' ? 'text-org-ink font-semibold' : 'text-white font-semibold';

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled || loading}
      onPress={onPress}
      className={`${base} ${styles} ${disabled || loading ? 'opacity-50' : ''}`}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#0F172A' : '#fff'} />
      ) : (
        <Text className={`text-center text-base ${textStyles}`}>{label}</Text>
      )}
    </Pressable>
  );
}
