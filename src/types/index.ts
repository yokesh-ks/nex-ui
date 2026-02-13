export type Size = 'sm' | 'md' | 'lg';

export type Variant = 'primary' | 'secondary' | 'danger' | 'ghost';

export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  'data-testid'?: string;
}
