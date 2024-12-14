export const STORE_LINKS = {
  appStore: '#',
  playStore: '#'
} as const;

export const FEATURES = [
  {
    title: 'Easy Group Payments',
    description: 'Split bills with multiple friends instantly. Create groups and manage shared expenses effortlessly.',
    icon: 'group',
    delay: 100
  },
  {
    title: 'Secure Payments',
    description: 'Bank-grade security ensures your money and data are always protected.',
    icon: 'security',
    delay: 200
  },
  {
    title: 'Real-time Tracking',
    description: 'Keep track of who paid what and when. Get instant notifications for payments.',
    icon: 'tracking',
    delay: 300
  }
] as const;

export const STEPS = [
  {
    step: 1,
    title: 'Create Payment',
    description: 'Enter payment details and total amount',
    delay: 100
  },
  {
    step: 2,
    title: 'Add Friends',
    description: 'Select friends from your contacts',
    delay: 200
  },
  {
    step: 3,
    title: 'Split Bill',
    description: 'Grupy calculates each person\'s share',
    delay: 300
  },
  {
    step: 4,
    title: 'Bill Paid',
    description: 'Settle bill total directly from your respective accounts',
    delay: 400
  }
] as const;