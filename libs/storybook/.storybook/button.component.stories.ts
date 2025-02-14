import type { Meta, StoryObj } from '@storybook/angular';
import {ButtonComponent } from '@alfabit-panjos/button';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {};
export const SecondaryButton: Story = {};
