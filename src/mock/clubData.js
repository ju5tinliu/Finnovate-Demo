/** Mock-only data for OrgPay demo */

export const CURRENT_FUNDRAISER = {
  name: 'Spring Formal 2026',
  goalCents: 1200000,
  collectedCents: 847500,
};

export const MOCK_TRANSACTIONS = [
  {
    id: 't1',
    reference: 'ORG M9K2P4',
    from: 'Alex M.',
    amountCents: 2500,
    reason: 'Spring Formal 2026',
    status: 'settled',
    at: '2026-03-22T18:04:00Z',
  },
  {
    id: 't2',
    reference: 'ORG J7WQ1N',
    from: 'Jordan L.',
    amountCents: 5000,
    reason: 'Spring Formal 2026',
    status: 'settled',
    at: '2026-03-21T14:22:00Z',
  },
  {
    id: 't3',
    reference: 'ORG R3T8VX',
    from: 'Sam K.',
    amountCents: 1500,
    reason: 'Spring Formal 2026',
    status: 'settled',
    at: '2026-03-20T09:15:00Z',
  },
  {
    id: 't4',
    reference: 'ORG B5H2LM',
    from: 'Taylor R.',
    amountCents: 10000,
    reason: 'Spring Formal 2026',
    status: 'pending',
    at: '2026-03-24T11:02:00Z',
  },
];

export function formatMoney(cents) {
  const n = cents / 100;
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export function formatShortDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function generateReference() {
  const part = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `ORG ${part}`;
}
