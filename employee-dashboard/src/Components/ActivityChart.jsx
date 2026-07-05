import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from 'recharts';

// Mock data matching your M-F layout
const activityData = [
  { day: 'M', hours: 6.5 },
  { day: 'T', hours: 7.0 },
  { day: 'W', hours: 8.0 },
  { day: 'T', hours: 7.5 },
  { day: 'F', hours: 5.0 },
];

export default function ActivityChart() {
  return (
    // The height must be explicitly set here, or the chart will collapse and disappear
    <div className="w-full h-48 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={activityData}>
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 600 }} 
            dy={10}
          />
          <Tooltip 
            cursor={{ fill: '#F3F4F6' }}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Bar 
            dataKey="hours" 
            fill="#818CF8" 
            radius={[6, 6, 6, 6]} 
            barSize={24}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}