import BarChartComponent from '@/components/charts/bar';

export default function Page() {
  return (
    <section>
      <p>Bar chart</p>
      <BarChartComponent
        data={[
          {
            name: 'Realization',
            value: 501.9,
            value_display: '501.9',
          },
          {
            name: 'Target Jul',
            value: 301.9,
            value_display: '301.9',
          },
          {
            name: 'Target Des',
            value: 201.1,
            value_display: '201.1',
          },
        ]}
      />
    </section>
  );
}
