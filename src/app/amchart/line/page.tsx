import LineChartComponent from '@/components/charts/line';

export default function Page() {
  return (
    <section>
      <p>Line chart</p>
      <LineChartComponent
        data={[
          {
            date: new Date(2018, 3, 20),
            value: 90,
          },
          {
            date: new Date(2018, 3, 21),
            value: 102,
          },
          {
            date: new Date(2018, 3, 22),
            value: 65,
          },
          {
            date: new Date(2018, 3, 23),
            value: 62,
          },
          {
            date: new Date(2018, 3, 24),
            value: 55,
          },
          {
            date: new Date(2018, 3, 25),
            value: 81,
          },
        ]}
      />
    </section>
  );
}
