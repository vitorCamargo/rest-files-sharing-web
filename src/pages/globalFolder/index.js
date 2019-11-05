import React from 'react';
import { Typography } from 'antd';

import MainLayout from '../../components/layout';

import './style.css';

const { Text } = Typography;

const GlobalFolder = props => {
  return (
    <MainLayout page = "globalFolder" loading = {false}>
      <Text>oioio</Text>
    </MainLayout>
  );
};

export default GlobalFolder;