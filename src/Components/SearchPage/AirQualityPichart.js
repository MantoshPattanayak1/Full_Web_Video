import React from 'react';
import { PieChart, Pie, Cell, Text } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
    { name: 'A', value: 80, color: '#FF6B6B' },   // Red
    { name: 'B', value: 45, color: '#00C49F'},   // Green
    { name: 'C', value: 25, color: '#6C8DD5' }    // Blue
];
const cx = 200;
const cy = 180;
const iR = 80;
const oR = 140;
const value = 50;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });

  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
  ];
};

const AirQualityPieChart = () => {
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <Text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#333"
        fontSize="12"
      >
        {`${data[index].value}%`}
      </Text>
    );
  };

  return (
    <div>
    <h2 className='font-bold text-lg'>Air Pollution</h2>
      <PieChart width={400} height={500}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle(value, data, cx, cy, iR, oR, '#d0d000')}
      </PieChart>
    </div>
  );
};

export default AirQualityPieChart;
