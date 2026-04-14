import type { Meta, StoryObj } from '@storybook/react';

import { PointerScaleV3 } from '../v3/charts/PointerScaleV3';
import { v3PointerRanges } from './storyData';

const meta = {
  title: 'V3/Pointer Scale',
  component: PointerScaleV3,
  tags: ['autodocs']
} satisfies Meta<typeof PointerScaleV3>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Risk Score',
    value: 58,
    target: 70,
    ranges: v3PointerRanges,
    actions: [{ id: 'save-image', label: 'Save', onClick: () => {} }],
    showMenu: true,
    showLegend: true
  }
};
