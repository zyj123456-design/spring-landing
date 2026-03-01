interface SectionDividerProps {
  label?: string;
}

export default function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '0 clamp(1.5rem, 8vw, 7rem)',
      height: 48,
      background: 'var(--bg-primary)',
    }}>
      <div style={{
        flex: 1,
        height: 1,
        background: 'var(--border-subtle)'
      }} />
      {label && (
        <span style={{
          fontFamily: 'DM Mono',
          fontSize: 10,
          color: 'var(--text-muted)',
          letterSpacing: '0.2em',
          padding: '0 1.5rem',
          whiteSpace: 'nowrap',
          textTransform: 'uppercase'
        }}>
          {label}
        </span>
      )}
      <div style={{
        flex: 1,
        height: 1,
        background: 'var(--border-subtle)'
      }} />
    </div>
  );
}
