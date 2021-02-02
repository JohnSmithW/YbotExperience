import { store } from '@risingstack/react-easy-state';

const state = store({
  info: { name: null, lastName: null, organization: null },
  details: { country: { id: 0, name: 'United States of America', code: '+1' }, phoneNumber: '', email: '' },
  countryList: {
    selected: { id: 0, name: 'United States of America', code: '+1' },
    list: [
      { id: 0, name: 'United States of America', code: '+1' },
      { id: 1, name: 'Australia', code: '+61' },
      { id: 2, name: 'Hong Kong', code: '+852' },
      // { id: 3, name: 'United Kingdom', code: '+44' },
      { id: 3, name: 'Other', code: '' },
    ],
  },
  isOther: false,
  isScrolled: false,
  tutorial: {
    isOpen: false,
    tips: [
      { number: 1, text: 'Service' },
      { number: 2, text: 'Product' },
      { number: 3, text: 'Retail' },
      { number: 4, text: 'Hospitality' },
      { number: 5, text: 'Financial Services' },
      { number: 6, text: 'Public Sector' },
      { number: 7, text: 'Energy' },
      { number: 8, text: 'Software' },
      { number: 0, text: 'ybot' },
    ],

    isTutorial: false,
  },
  option: 0,
  userOption: 1,
  isEdit: false,
  isHovered: false,
  popUp: { isOpen: false, text: '', type: false },
  smsSent: false,
  startInterval: true,
  optionsList: [
    {
      id: 0,
      list: [
        { id: 0, option: 1 },
        { id: 1, option: 2 },
        { id: 2, option: 3 },
      ],
    },
    {
      id: 1,
      list: [
        { id: 0, option: 4 },
        { id: 1, option: 5 },
        { id: 2, option: 6 },
      ],
    },
    {
      id: 3,
      list: [
        { id: 0, option: 7 },
        { id: 1, option: 8 },
        { id: 2, option: 9 },
      ],
    },
    {
      id: 4,
      list: [
        { id: 0, option: '*' },
        { id: 1, option: 0 },
        { id: 2, option: '#' },
      ],
    },
  ],
});

export default state;
