import type { Meta, StoryObj } from '@storybook/react';

import { GaugeChartV3 } from '../v3/charts/GaugeChartV3';
import { v3GaugeRanges } from './storyData';

const meta = {
  title: 'V3/Half Donut',
  component: GaugeChartV3,
  tags: ['autodocs']
} satisfies Meta<typeof GaugeChartV3>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Inpatient follow up',
    value: 45,
    centerLabel: '45%',
    centerSubLabel: '845 of 1,190',
    ranges: v3GaugeRanges,
    actions: [{ id: 'save-image', label: 'Save', onClick: () => {} }],
    showMenu: true
  }
};

export const WithLegend: Story = {
  args: {
    title: 'Inpatient follow up',
    value: 45,
    centerLabel: '45%',
    centerSubLabel: '845 of 1,190',
    ranges: v3GaugeRanges,
    showLegend: true,
    actions: [{ id: 'save-image', label: 'Save', onClick: () => {} }],
    showMenu: true
  }
};

export const CustomAngles: Story = {
  args: {
    title: 'Three-quarter donut',
    value: 65,
    centerLabel: '65%',
    centerSubLabel: '780 of 1,200',
    ranges: v3GaugeRanges,
    sweepAngle: 270,
    actions: [{ id: 'save-image', label: 'Save', onClick: () => {} }],
    showMenu: true
  }
};
