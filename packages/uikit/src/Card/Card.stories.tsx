import React from 'react';

import { Story, Meta } from '@storybook/react';

import Card, { CardProps } from '~/Card';
import { Heading } from '~/Heading/styles';
import { Paragraph } from '~/Paragraph/styles';

export default {
  title: 'Layout/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Heading size="body">Pedro da Silva</Heading>
      <Paragraph size="small">Seguro de vida</Paragraph>
    </>
  ),
};
