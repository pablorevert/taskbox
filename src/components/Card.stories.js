import React from 'react';

import Card from './Card';

export default {
  component: Card,
  title: 'SFDM/Card',
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Título',
    subtitle: 'subtitulo',
    unit: 'vz',
    value: 88,
    min: 84,
    max: null
};

