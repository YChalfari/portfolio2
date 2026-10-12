const Chevron = ({ direction = 'next' }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
    <path
      d={direction === 'prev' ? 'M14.5 6 L8.5 12 L14.5 18' : 'M9.5 6 L15.5 12 L9.5 18'}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Chevron;
