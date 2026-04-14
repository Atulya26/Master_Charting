import type { CSSProperties } from 'react';

import { TooltipPopover } from '../../components/TooltipPopover';
import type { TooltipRow } from '../../types';

export interface ChartHoverCardV3Props {
  title: string;
  rows: TooltipRow[];
  totalLabel?: string;
  totalValue?: string | number;
  left: number;
  top: number;
}

export function ChartHoverCardV3({
  title,
  rows,
  totalLabel,
  totalValue,
  left,
  top
}: ChartHoverCardV3Props) {
  const style: CSSProperties = {
    position: 'fixed',
    left,
    top,
    zIndex: 20,
    pointerEvents: 'none'
  };

  return (
    <div className="cl-v3-hover-card" style={style}>
      <TooltipPopover
        title={title}
        rows={rows}
        totalLabel={totalLabel}
        totalValue={totalValue}
      />
    </div>
  );
}
