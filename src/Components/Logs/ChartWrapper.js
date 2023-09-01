import React from 'react';
import { ResponsiveContainer } from 'recharts';

const ChartWrapper = ({ children }) => {
  return (
    <div style={{ width: '100%', height: '100%', maxWidth: '60%', maxHeight: '40%' }}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
};

export default ChartWrapper;
