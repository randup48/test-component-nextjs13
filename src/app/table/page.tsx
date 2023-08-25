'use client';

import { DatePicker, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

const data: {}[] = [
  {
    tahun: '2021',
    jan: 1,
    feb: 1,
    mar: 1,
  },
  {
    tahun: '2022',
    jan: 1,
    feb: 1,
    mar: 1,
  },
  {
    tahun: '2023',
    jan: 1,
    feb: 1,
    mar: 1,
  },
];

const columns: ColumnsType<{}> = [
  {
    title: 'Tahun',
    dataIndex: 'tahun',
    key: 'tahun',
    width: 120,
    fixed: 'left',
  },
  {
    title: 'Januari',
    dataIndex: 'jan',
    key: 'jan',
  },
  {
    title: 'Februari',
    dataIndex: 'feb',
    key: 'feb',
  },
  {
    title: 'Maret',
    dataIndex: 'mar',
    key: 'mar',
  },
];

export default function Page() {
  return (
    <section>
      <p>table</p>

      <section className='mt-3'>
        <DatePicker />
        <Table
          className='my-3'
          columns={columns}
          dataSource={data}
          scroll={{ x: 600 }}
        />
      </section>
    </section>
  );
}
