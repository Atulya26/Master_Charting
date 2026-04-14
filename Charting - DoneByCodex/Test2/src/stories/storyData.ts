import { chartTokens } from '../theme/tokens';
import type {
  BarSeries,
  ChartAction,
  DonutSegment,
  LegendItem,
  LineSeriesConfig,
  SelectOption,
  TooltipRow
} from '../types';
import type {
  BarSeriesV3,
  DistributionSegmentV3,
  DonutSegmentV3,
  GaugeRangeV3,
  HistogramBinV3,
  LineSeriesConfigV3,
  MapBubblePointV3,
  PointerScaleRangeV3
} from '../v3/types';

export const chartActions: ChartAction[] = [
  { id: 'restore', label: 'Restore' },
  { id: 'line-view', label: 'Line chart view' },
  { id: 'bar-view', label: 'Bar chart view' },
  { id: 'data-view', label: 'Data view' },
  { id: 'zoom-in', label: 'Zoom in' },
  { id: 'zoom-out', label: 'Zoom out' },
  { id: 'save-image', label: 'Save image' }
];

export const compactChartActions: ChartAction[] = [
  { id: 'zoom-in', label: 'Zoom in' },
  { id: 'zoom-out', label: 'Zoom out' },
  { id: 'save-image', label: 'Save image' }
];

export const selectOptions: SelectOption[] = [
  { label: 'Select', value: 'select' },
  { label: 'Revenue', value: 'revenue' },
  { label: 'Pipeline', value: 'pipeline' }
];

export const legendMarkers: LegendItem[] = [
  {
    label: 'Solid',
    color: chartTokens.categorical.primary,
    marker: 'solid'
  },
  {
    label: 'Texture',
    color: chartTokens.categorical.primary,
    strokeColor: chartTokens.categorical.primary,
    marker: 'solid-texture'
  },
  {
    label: 'Dot line',
    color: chartTokens.categorical.secondary,
    strokeColor: chartTokens.categorical.secondary,
    marker: 'dot-line'
  },
  {
    label: 'Dashed line',
    color: chartTokens.categorical.secondary,
    strokeColor: chartTokens.categorical.secondary,
    marker: 'line-dashed'
  }
];

export const tooltipRows: TooltipRow[] = [
  {
    label: 'Placeholder',
    value: 65,
    color: chartTokens.categorical.primary,
    marker: 'solid'
  },
  {
    label: 'Placeholder',
    value: 76,
    color: chartTokens.categorical.secondary,
    marker: 'dot-line'
  }
];

export const comboCategories = Array.from({ length: 8 }, () => 'Text');

export const comboBarSeries: BarSeries[] = [
  {
    key: 'bars',
    label: 'Placeholder',
    data: [78, 78, 78, 78, 78, 78, 78, 78],
    fill: chartTokens.categorical.primary
  }
];

export const comboLineSeries: LineSeriesConfig[] = [
  {
    key: 'trend',
    label: 'Placeholder',
    data: [53, 50, 63, 44, 60, 28, 23, 28],
    stroke: chartTokens.categorical.secondary,
    showDots: true,
    lineStyle: 'solid',
    axis: 'right'
  }
];

export const groupedBarSeries: BarSeries[] = chartTokens.categorical.axisPalette
  .slice(0, 4)
  .map((palette, index) => ({
    key: `series-${index + 1}`,
    label: palette.name,
    fill: palette.fill,
    stroke: palette.stroke,
    data: [
      [5, 3, 2, 6, 4, 3],
      [3, 4.5, 9.5, 2.2, 6, 4.5],
      [6, 6, 7.2, 8.4, 7.2, 5.8],
      [2.2, 1.6, 2.3, 1, 2.4, 0.8]
    ][index]
  }));

export const groupedCategories = ['A', 'B', 'C', 'D', 'E', 'F'];

export const sequentialBarSeries: BarSeries[] = chartTokens.categorical.axisPalette
  .slice(0, 3)
  .map((palette, index) => ({
    key: `seq-${index + 1}`,
    label: palette.name,
    fill: palette.fill,
    stroke: palette.stroke,
    fillStyle: index === 1 ? 'texture' : 'solid',
    data: [
      [36, 18, 14],
      [72, 48, 38],
      [14, 38, 22]
    ][index]
  }));

export const sequentialCategories = ['Current', 'Committed', 'Forecast'];

export const donutSegments: DonutSegment[] = [
  {
    label: 'Currently expended amount',
    value: 70,
    color: chartTokens.multiHue.donutBlue
  },
  {
    label: 'Forecast for expended amount for the year 2026',
    value: 23,
    color: chartTokens.multiHue.donutBlue,
    fillStyle: 'texture'
  },
  {
    label: 'Remaining capacity',
    value: 7,
    color: '#eff2f8',
    showLabel: false
  }
];

export const v3BarCategories = ['Commercial', 'Medicaid', 'Medicare'];

export const v3BarSeries: BarSeriesV3[] = [
  {
    key: 'revenue-generated',
    label: 'Revenue generated',
    fill: chartTokens.categorical.primary,
    stroke: chartTokens.categorical.primary,
    data: [45, 40, 20]
  },
  {
    key: 'revenue-targeted',
    label: 'Revenue targeted',
    fill: chartTokens.neutral.surfaceTint,
    stroke: chartTokens.neutral.stoneLight,
    data: [70, 65, 30]
  }
];

export const v3RecaptureCategories = ['18-30', '31-45', '46-60', '61-75', '75+'];

export const v3StackedBarSeries: BarSeriesV3[] = [
  {
    key: 'female',
    label: 'Female',
    fill: chartTokens.sequential.pink.lighter,
    stroke: chartTokens.sequential.pink.default,
    data: [12, 15, 28, 34, 33]
  },
  {
    key: 'male',
    label: 'Male',
    fill: chartTokens.sequential.purple.light,
    stroke: chartTokens.sequential.purple.default,
    data: [10, 14, 26, 32, 31]
  }
];

export const v3ComboCategories = ['0-20', '21-40', '41-60', '61+'];

export const v3ComboBarSeries: BarSeriesV3[] = [
  {
    key: 'female',
    label: 'Female',
    fill: chartTokens.sequential.pink.default,
    stroke: chartTokens.sequential.pink.dark,
    data: [22000, 51000, 86000, 12000]
  },
  {
    key: 'male',
    label: 'Male',
    fill: chartTokens.categorical.secondary,
    stroke: chartTokens.categorical.secondary,
    data: [28000, 57000, 74000, 18000]
  },
  {
    key: 'other',
    label: 'Other',
    fill: chartTokens.neutral.stoneLight,
    stroke: chartTokens.neutral.nightLighter,
    data: [18000, 43000, 80000, 10000]
  }
];

export const v3ComboLineSeries: LineSeriesConfigV3[] = [
  {
    key: 'revenue-percent',
    label: 'Revenue %',
    data: [26, 12.3, 34.7, 27],
    stroke: chartTokens.text.default,
    showDots: true,
    showLabels: true,
    axis: 'right'
  }
];

export const v3DonutSegments: DonutSegmentV3[] = [
  {
    label: 'Current',
    value: 70,
    color: chartTokens.multiHue.donutBlue
  },
  {
    label: 'Projected',
    value: 23,
    color: chartTokens.multiHue.donutBlue,
    strokeColor: chartTokens.multiHue.donutBlue,
    fillStyle: 'texture'
  },
  {
    label: 'Remaining capacity',
    value: 7,
    color: chartTokens.neutral.surfaceTint,
    showLabel: false,
    showLegendItem: false
  }
];

export const v3LineCategories = ["Q1 '23", "Q2 '23", "Q3 '23", "Q4 '23"];

export const v3LineSeries: LineSeriesConfigV3[] = [
  {
    key: 'current',
    label: 'Current',
    data: [1077, 1063, 1047, 1047],
    stroke: chartTokens.sequential.warning.default,
    showDots: true,
    showLabels: true
  },
  {
    key: 'ye-projected',
    label: 'YE Projected',
    data: [1077, 1063, 1047, 1052],
    stroke: chartTokens.sequential.warning.default,
    lineStyle: 'dashed',
    showDots: false
  }
];

export const v3HistogramBins: HistogramBinV3[] = [
  { label: '0', value: 8, fill: chartTokens.sequential.default.lightest, stroke: chartTokens.sequential.default.dark, legendLabel: 'Observed distribution' },
  { label: '1-5', value: 24, fill: chartTokens.sequential.default.lighter, stroke: chartTokens.sequential.default.dark, legendLabel: 'Observed distribution' },
  { label: '6-10', value: 37, fill: chartTokens.sequential.default.light, stroke: chartTokens.sequential.default.dark, legendLabel: 'Observed distribution' },
  { label: '11-20', value: 18, fill: chartTokens.sequential.default.default, stroke: chartTokens.sequential.default.dark, legendLabel: 'Observed distribution' },
  { label: '21-30', value: 12, fill: chartTokens.sequential.default.dark, stroke: chartTokens.sequential.default.darker, legendLabel: 'Observed distribution' },
  { label: '31+', value: 9, fill: chartTokens.sequential.default.darker, stroke: chartTokens.sequential.default.darker, legendLabel: 'Observed distribution' }
];

export const v3SparklineValues = [1028, 1036, 1041, 1033, 1047, 1052, 1048];
export const v3SparklineLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export const v3GaugeRanges: GaugeRangeV3[] = [
  { from: 0, to: 30, color: chartTokens.sequential.red.dark, label: 'Needs attention' },
  { from: 30, to: 50, color: chartTokens.sequential.warning.default, label: 'Watch list' },
  { from: 50, to: 100, color: chartTokens.sequential.success.dark, label: 'On track' }
];

export const v3PointerRanges: PointerScaleRangeV3[] = [
  { from: 0, to: 10, color: chartTokens.neutral.stoneLight, label: 'Low' },
  { from: 10, to: 20, color: chartTokens.sequential.warning.default, label: 'Medium' },
  { from: 20, to: 100, color: chartTokens.sequential.red.dark, label: 'High' }
];

const baseV3MapBubblePoints: MapBubblePointV3[] = [
  {
    key: 'seattle',
    label: 'Seattle',
    legendLabel: 'Hospital',
    latitude: 47.6062,
    longitude: -122.3321,
    stateCode: 'WA',
    value: 20,
    fill: chartTokens.categorical.axisPalette[0].fill,
    stroke: chartTokens.categorical.axisPalette[0].stroke
  },
  {
    key: 'san-francisco',
    label: 'San Francisco',
    legendLabel: 'Hospital',
    latitude: 37.7749,
    longitude: -122.4194,
    stateCode: 'CA',
    value: 32,
    fill: chartTokens.categorical.axisPalette[0].fill,
    stroke: chartTokens.categorical.axisPalette[0].stroke
  },
  {
    key: 'los-angeles',
    label: 'Los Angeles',
    legendLabel: 'Hospital',
    latitude: 34.0522,
    longitude: -118.2437,
    stateCode: 'CA',
    value: 44,
    fill: chartTokens.categorical.axisPalette[0].fill,
    stroke: chartTokens.categorical.axisPalette[0].stroke
  },
  {
    key: 'phoenix',
    label: 'Phoenix',
    legendLabel: 'Affiliated ASC',
    latitude: 33.4484,
    longitude: -112.074,
    stateCode: 'AZ',
    value: 16,
    fill: chartTokens.categorical.axisPalette[2].fill,
    stroke: chartTokens.categorical.axisPalette[2].stroke
  },
  {
    key: 'denver',
    label: 'Denver',
    legendLabel: 'Affiliated ASC',
    latitude: 39.7392,
    longitude: -104.9903,
    stateCode: 'CO',
    value: 12,
    fill: chartTokens.categorical.axisPalette[2].fill,
    stroke: chartTokens.categorical.axisPalette[2].stroke
  },
  {
    key: 'dallas',
    label: 'Dallas',
    legendLabel: 'Hospital',
    latitude: 32.7767,
    longitude: -96.797,
    stateCode: 'TX',
    value: 26,
    fill: chartTokens.categorical.axisPalette[0].fill,
    stroke: chartTokens.categorical.axisPalette[0].stroke
  },
  {
    key: 'houston',
    label: 'Houston',
    legendLabel: 'Non-affiliated ASC',
    latitude: 29.7604,
    longitude: -95.3698,
    stateCode: 'TX',
    value: 18,
    fill: chartTokens.categorical.axisPalette[5].fill,
    stroke: chartTokens.categorical.axisPalette[5].stroke
  },
  {
    key: 'minneapolis',
    label: 'Minneapolis',
    legendLabel: 'Hospital',
    latitude: 44.9778,
    longitude: -93.265,
    stateCode: 'MN',
    value: 14,
    fill: chartTokens.categorical.axisPalette[0].fill,
    stroke: chartTokens.categorical.axisPalette[0].stroke
  },
  {
    key: 'chicago',
    label: 'Chicago',
    legendLabel: 'Hospital',
    latitude: 41.8781,
    longitude: -87.6298,
    stateCode: 'IL',
    value: 28,
    fill: chartTokens.categorical.axisPalette[0].fill,
    stroke: chartTokens.categorical.axisPalette[0].stroke
  },
  {
    key: 'atlanta',
    label: 'Atlanta',
    legendLabel: 'Affiliated ASC',
    latitude: 33.749,
    longitude: -84.388,
    stateCode: 'GA',
    value: 19,
    fill: chartTokens.categorical.axisPalette[2].fill,
    stroke: chartTokens.categorical.axisPalette[2].stroke
  },
  {
    key: 'new-york',
    label: 'New York',
    legendLabel: 'Hospital',
    latitude: 40.7128,
    longitude: -74.006,
    stateCode: 'NY',
    value: 38,
    fill: chartTokens.categorical.axisPalette[0].fill,
    stroke: chartTokens.categorical.axisPalette[0].stroke
  },
  {
    key: 'boston',
    label: 'Boston',
    legendLabel: 'Affiliated ASC',
    latitude: 42.3601,
    longitude: -71.0589,
    stateCode: 'MA',
    value: 10,
    fill: chartTokens.categorical.axisPalette[2].fill,
    stroke: chartTokens.categorical.axisPalette[2].stroke
  },
  {
    key: 'miami',
    label: 'Miami',
    legendLabel: 'Hospital',
    latitude: 25.7617,
    longitude: -80.1918,
    stateCode: 'FL',
    value: 34,
    fill: chartTokens.categorical.axisPalette[0].fill,
    stroke: chartTokens.categorical.axisPalette[0].stroke
  },
  {
    key: 'orlando',
    label: 'Orlando',
    legendLabel: 'Hospital',
    latitude: 28.5383,
    longitude: -81.3792,
    stateCode: 'FL',
    value: 22,
    fill: chartTokens.categorical.axisPalette[0].fill,
    stroke: chartTokens.categorical.axisPalette[0].stroke
  },
  {
    key: 'jacksonville',
    label: 'Jacksonville',
    legendLabel: 'Affiliated ASC',
    latitude: 30.3322,
    longitude: -81.6557,
    stateCode: 'FL',
    value: 16,
    fill: chartTokens.categorical.axisPalette[2].fill,
    stroke: chartTokens.categorical.axisPalette[2].stroke
  },
  {
    key: 'tampa',
    label: 'Tampa',
    legendLabel: 'Hospital',
    latitude: 27.9506,
    longitude: -82.4572,
    stateCode: 'FL',
    value: 24,
    fill: chartTokens.categorical.axisPalette[0].fill,
    stroke: chartTokens.categorical.axisPalette[0].stroke
  },
  {
    key: 'west-palm-beach',
    label: 'West Palm Beach',
    legendLabel: 'Non-affiliated ASC',
    latitude: 26.7153,
    longitude: -80.0534,
    stateCode: 'FL',
    value: 12,
    fill: chartTokens.categorical.axisPalette[5].fill,
    stroke: chartTokens.categorical.axisPalette[5].stroke
  },
  {
    key: 'fort-myers',
    label: 'Fort Myers',
    legendLabel: 'Affiliated ASC',
    latitude: 26.6406,
    longitude: -81.8723,
    stateCode: 'FL',
    value: 10,
    fill: chartTokens.categorical.axisPalette[2].fill,
    stroke: chartTokens.categorical.axisPalette[2].stroke,
    fillStyle: 'texture'
  },
  {
    key: 'tallahassee',
    label: 'Tallahassee',
    legendLabel: 'Non-affiliated ASC',
    latitude: 30.4383,
    longitude: -84.2807,
    stateCode: 'FL',
    value: 8,
    fill: chartTokens.categorical.axisPalette[5].fill,
    stroke: chartTokens.categorical.axisPalette[5].stroke
  }
];

const bubbleDetailByLegendLabel: Record<string, { costBase: number; avoidableBase: number }> = {
  Hospital: { costBase: 28400000, avoidableBase: 31.2 },
  'Affiliated ASC': { costBase: 12100000, avoidableBase: 18.4 },
  'Non-affiliated ASC': { costBase: 9400000, avoidableBase: 25.1 }
};

export const v3MapBubblePoints: MapBubblePointV3[] = baseV3MapBubblePoints.map(
  (point, index) => {
    const legendLabel = point.legendLabel ?? 'Hospital';
    const detailBase =
      bubbleDetailByLegendLabel[legendLabel] ?? bubbleDetailByLegendLabel.Hospital;
    const surgeryCost = Math.round(detailBase.costBase + point.value * 312000 + index * 87000);
    const avoidablePercent = (detailBase.avoidableBase + index * 0.7).toFixed(1);

    return {
      ...point,
      details: [
        { label: 'Network', value: legendLabel },
        { label: 'State', value: point.stateCode ?? 'US' },
        {
          label: 'Surgery cost',
          value: `$${surgeryCost.toLocaleString('en-US')}`
        },
        {
          label: 'Potential avoidable %',
          value: `${avoidablePercent}%`
        }
      ]
    };
  }
);

export const v3MapBubbleTableConfig = {
  headers: ['Facility', 'State', 'Network', 'Potential avoidable %'],
  rows: v3MapBubblePoints.map((point) => [
    point.label,
    point.stateCode ?? 'US',
    point.legendLabel ?? 'Hospital',
    point.details?.find((detail) => detail.label === 'Potential avoidable %')?.value ?? '0%'
  ])
};

export const v3DistributionSegments: DistributionSegmentV3[] = [
  { label: 'Less than $5,000', value: 55, fill: '#8798d7' },
  { label: '$5,000 to $10,000', value: 35, fill: '#db7d46' },
  { label: 'More than $10,000', value: 10, fill: '#c93030' }
];

export const v3RiskDistributionSegments: DistributionSegmentV3[] = [
  { label: 'Low', value: 35, fill: chartTokens.sequential.neel.default },
  { label: 'Medium', value: 25, fill: '#f1d4c6' },
  { label: 'High', value: 20, fill: '#e29a80' },
  { label: 'Very High', value: 10, fill: '#cd6c4c' }
];
