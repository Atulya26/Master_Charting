import { Fragment, useId, useState } from 'react';
import type { ReactNode } from 'react';

import { chartTokens } from '../../theme/tokens';
import { formatNumberCompact } from '../../utils/chart';
import { ChartHoverCardV3 } from '../components/ChartHoverCardV3';
import { ChartShellV3 } from '../components/ChartShellV3';
import type {
  DonutSegmentV3,
  FillStyleModeV3,
  LegendPositionV3,
  LegendMarkerModeV3,
  V3HeaderProps
} from '../types';
import {
  buildLegendItemsFromDonutSegments,
  formatTooltipValue,
  getDonutLabel,
  getEstimatedHoverCardHeight,
  getViewportHoverCardPosition,
  getSvgFillDefinition,
  resolveFillLegendMarker,
  resolveFillStyle
} from '../utils';

export interface DonutChartV3Props extends V3HeaderProps {
  title?: string;
  description?: string;
  segments: DonutSegmentV3[];
  width?: number | string;
  size?: number;
  thickness?: number;
  centerLabel?: string;
  centerSubLabel?: string;
  showCardBackground?: boolean;
  showHeader?: boolean;
  showLegend?: boolean;
  showTitle?: boolean;
  showLabels?: boolean;
  legendPosition?: LegendPositionV3;
  labelMode?: 'value' | 'percent' | 'label' | 'label-percent';
  fillStyle?: FillStyleModeV3;
  legendMarker?: LegendMarkerModeV3;
  roundedCaps?: boolean;
  showHoverCard?: boolean;
}

export function DonutChartV3({
  title = 'Pie Chart Example',
  description,
  segments,
  width = 379,
  size = 180,
  thickness = 16,
  centerLabel,
  centerSubLabel,
  showCardBackground = true,
  showHeader = true,
  showLegend = true,
  showTitle = true,
  showLabels = true,
  legendPosition = 'bottom',
  labelMode = 'value',
  fillStyle = 'inherit',
  legendMarker = 'auto',
  roundedCaps = false,
  showHoverCard = false,
  ...headerProps
}: DonutChartV3Props) {
  const [hoveredSegmentIndex, setHoveredSegmentIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const total = Math.max(
    segments.reduce((sum, segment) => sum + segment.value, 0),
    1
  );
  const svgId = useId().replace(/:/g, '');
  const legendItems = showLegend
    ? buildLegendItemsFromDonutSegments(segments, fillStyle, legendMarker)
    : [];
  const center = size / 2;
  const radius = center - thickness / 2 - 2;
  const circumference = 2 * Math.PI * radius;
  const defs: ReactNode[] = [];
  let cumulative = 0;
  const gapLength = roundedCaps ? Math.max(thickness * 0.7, 6) : 0;
  const hoveredSegment =
    hoveredSegmentIndex !== null ? segments[hoveredSegmentIndex] : null;
  const hoverCardPosition = mousePos
    ? getViewportHoverCardPosition(mousePos.x, mousePos.y, 196, getEstimatedHoverCardHeight(2))
    : null;

  return (
    <ChartShellV3
      width={width}
      showCardBackground={showCardBackground}
      showHeader={showHeader}
      showTitle={showTitle}
      title={title}
      legendItems={legendItems}
      legendPosition={legendPosition}
      description={description}
      {...headerProps}
    >
      <div
        className="cl-v3-donut"
        style={{ position: 'relative' }}
        onMouseLeave={
          showHoverCard ? () => { setHoveredSegmentIndex(null); setMousePos(null); } : undefined
        }
      >
        <div style={{ position: 'relative', width: size, height: size, margin: '0 auto' }}>
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            role="img"
            aria-label={title}
            style={{ overflow: 'visible' }}
          >
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={chartTokens.neutral.surfaceTint}
              strokeWidth={thickness}
            />
            {segments.map((segment, index) => {
              const resolvedFillStyle = resolveFillStyle(
                segment.fillStyle ?? 'solid',
                fillStyle
              );
              const paintId = `donut-v3-${svgId}-${index}`;
              const paint = getSvgFillDefinition(
                paintId,
                resolvedFillStyle,
                segment.color,
                segment.strokeColor ?? segment.color
              );
              const length = (segment.value / total) * circumference;
              const visibleLength = Math.max(length - gapLength, 0);
              const dashArray = `${visibleLength} ${Math.max(circumference - visibleLength, 0)}`;
              const dashOffset = -((cumulative / total) * circumference);
              const segmentStart = cumulative;
              const segmentMid = segmentStart + segment.value / 2;
              cumulative += segment.value;
              const angle = (segmentMid / total) * Math.PI * 2 - Math.PI / 2;
              const labelRadius = radius + thickness / 2 + 18;
              const labelX = center + Math.cos(angle) * labelRadius;
              const labelY = center + Math.sin(angle) * labelRadius;

              if (paint.definition) {
                defs.push(paint.definition);
              }

              return (
                <Fragment key={`${segment.label}-${index}`}>
                  <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke={paint.fill}
                    strokeWidth={thickness}
                    strokeDasharray={dashArray}
                    strokeDashoffset={dashOffset}
                    transform={`rotate(-90 ${center} ${center})`}
                    opacity={
                      segment.active === false
                        ? 0.4
                        : hoveredSegmentIndex === null || hoveredSegmentIndex === index
                          ? 1
                          : 0.65
                    }
                    strokeLinecap={roundedCaps ? 'round' : undefined}
                    onMouseMove={
                      showHoverCard
                        ? (event) => { setHoveredSegmentIndex(index); setMousePos({ x: event.clientX, y: event.clientY }); }
                        : undefined
                    }
                  />
                  {showLabels && segment.showLabel !== false ? (
                    <text
                      x={labelX}
                      y={labelY}
                      textAnchor={labelX > center ? 'start' : 'end'}
                      dominantBaseline="middle"
                      fontFamily={chartTokens.fontFamily}
                      fontSize="12"
                      fontWeight="600"
                      fill="#242424"
                    >
                      {getDonutLabel(segment, total, labelMode)}
                    </text>
                  ) : null}
                </Fragment>
              );
            })}
            <defs>{defs}</defs>
            <text
              x={center}
              y={center - 4}
              textAnchor="middle"
              fontFamily={chartTokens.fontFamily}
              fontSize="20"
              fontWeight="600"
              fill="#242424"
            >
              {centerLabel ?? `${formatNumberCompact(total)}M`}
            </text>
            <text
              x={center}
              y={center + 14}
              textAnchor="middle"
              fontFamily={chartTokens.fontFamily}
              fontSize="12"
              fontWeight="400"
              fill="#6a6b6d"
            >
              {centerSubLabel ?? 'Target'}
            </text>
          </svg>
          {showHoverCard && hoveredSegment ? (
            <ChartHoverCardV3
              title={hoveredSegment.legendLabel ?? hoveredSegment.label}
              rows={[
                {
                  label: 'Value',
                  value: formatTooltipValue(hoveredSegment.value),
                  color: hoveredSegment.color,
                  strokeColor: hoveredSegment.strokeColor,
                  marker: resolveFillLegendMarker(
                    resolveFillStyle(hoveredSegment.fillStyle ?? 'solid', fillStyle),
                    legendMarker
                  )
                },
                {
                  label: 'Share of total',
                  value: `${Math.round((hoveredSegment.value / total) * 100)}%`
                }
              ]}
              left={hoverCardPosition?.left ?? 12}
              top={hoverCardPosition?.top ?? 12}
            />
          ) : null}
        </div>
      </div>
    </ChartShellV3>
  );
}
