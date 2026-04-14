import { useState } from 'react';

import { chartTokens } from '../../theme/tokens';
import { ChartHoverCardV3 } from '../components/ChartHoverCardV3';
import { ChartShellV3 } from '../components/ChartShellV3';
import type { LegendPositionV3, PointerScaleRangeV3, V3HeaderProps } from '../types';
import {
  clamp,
  formatTooltipValue,
  getEstimatedHoverCardHeight,
  getViewportHoverCardPosition,
  getPointerScaleStops
} from '../utils';

export interface PointerScaleV3Props extends V3HeaderProps {
  title?: string;
  description?: string;
  value: number;
  min?: number;
  max?: number;
  target?: number;
  width?: number | string;
  showCardBackground?: boolean;
  showHeader?: boolean;
  showTitle?: boolean;
  showLegend?: boolean;
  legendPosition?: LegendPositionV3;
  ranges?: PointerScaleRangeV3[];
  centerLabel?: string;
  showHoverCard?: boolean;
}

const defaultScaleRanges: PointerScaleRangeV3[] = [
  { from: 0, to: 35, color: chartTokens.sequential.default.lightest, label: 'Low' },
  { from: 35, to: 70, color: chartTokens.sequential.default.default, label: 'Medium' },
  { from: 70, to: 100, color: chartTokens.sequential.default.darker, label: 'High' }
];

export function PointerScaleV3({
  title = 'Pointer Scale',
  description,
  value,
  min = 0,
  max = 100,
  target,
  width = 379,
  showCardBackground = true,
  showHeader = true,
  showTitle = true,
  showLegend = true,
  legendPosition = 'bottom',
  ranges = defaultScaleRanges,
  centerLabel,
  showHoverCard = false,
  ...headerProps
}: PointerScaleV3Props) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const stops = getPointerScaleStops(ranges);
  const clampedValue = clamp(value, min, max);
  const clampedTarget =
    typeof target === 'number' ? clamp(target, min, max) : undefined;
  const activeRange =
    ranges.find((range) => clampedValue >= range.from && clampedValue <= range.to) ??
    ranges[ranges.length - 1];
  const valueRatio = (clampedValue - min) / (max - min || 1);
  const hoverRows = [
    {
      label: 'Current',
      value: centerLabel ?? formatTooltipValue(clampedValue),
      color: activeRange.color,
      marker: 'solid' as const
    },
    {
      label: 'Band',
      value: activeRange.label ?? `${activeRange.from}-${activeRange.to}`,
      color: activeRange.color,
      marker: 'solid' as const
    },
    ...(typeof clampedTarget === 'number'
      ? [
          {
            label: 'Target',
            value: formatTooltipValue(clampedTarget)
          }
        ]
      : []),
    {
      label: 'Scale',
      value: `${min} - ${max}`
    }
  ];
  const hoverCardPosition = mousePos
    ? getViewportHoverCardPosition(mousePos.x, mousePos.y, 196, getEstimatedHoverCardHeight(hoverRows.length))
    : null;

  const legendItems = showLegend ? ranges.map(range => ({
    label: range.label ?? `${range.from}-${range.to}`,
    marker: 'solid' as const,
    color: range.color,
    active: true
  })) : [];

  return (
    <ChartShellV3
      width={width}
      showCardBackground={showCardBackground}
      showHeader={showHeader}
      showTitle={showTitle}
      title={title}
      description={description}
      legendItems={legendItems}
      legendPosition={legendPosition}
      {...headerProps}
    >
      <div
        className="cl-v3-pointer"
        style={{ position: 'relative' }}
        onMouseMove={showHoverCard ? (event) => { setHovered(true); setMousePos({ x: event.clientX, y: event.clientY }); } : undefined}
        onMouseLeave={showHoverCard ? () => { setHovered(false); setMousePos(null); } : undefined}
      >
        <div className="cl-v3-pointer__value">{centerLabel ?? `${Math.round(clampedValue)}`}</div>
        <div className="cl-v3-pointer__track">
          {stops.map((stop) => (
            <span
              key={`${stop.from}-${stop.to}`}
              className="cl-v3-pointer__segment"
              style={{
                width: `${((stop.to - stop.from) / (max - min || 1)) * 100}%`,
                background: stop.color
              }}
            />
          ))}
          <span
            className="cl-v3-pointer__needle"
            style={{
              left: `${((clampedValue - min) / (max - min || 1)) * 100}%`
            }}
          />
          {typeof clampedTarget === 'number' ? (
            <span
              className="cl-v3-pointer__target"
              style={{
                left: `${((clampedTarget - min) / (max - min || 1)) * 100}%`
              }}
            />
          ) : null}
        </div>
        <div className="cl-v3-pointer__range-labels" style={{ display: 'flex', marginTop: '4px' }}>
          {stops.map((stop) => (
            <span
              key={`label-${stop.from}-${stop.to}`}
              style={{
                width: `${((stop.to - stop.from) / (max - min || 1)) * 100}%`,
                textAlign: 'center',
                fontSize: '11px',
                color: chartTokens.text.subtle,
                fontFamily: chartTokens.fontFamily
              }}
            >
              {stop.label}
            </span>
          ))}
        </div>
        <div className="cl-v3-pointer__labels">
          <span>{min}</span>
          <span>{max}</span>
        </div>
        {showHoverCard && hovered ? (
          <ChartHoverCardV3
            title={title}
            rows={hoverRows}
            left={hoverCardPosition?.left ?? 0}
            top={hoverCardPosition?.top ?? 0}
          />
        ) : null}
      </div>
    </ChartShellV3>
  );
}
