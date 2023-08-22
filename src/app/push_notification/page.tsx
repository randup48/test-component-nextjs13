import { NotificationOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default function Page() {
  return (
    <section>
      <p>push notification</p>

      <Button className='mt-3' icon={<NotificationOutlined />}>
        Notif Others
      </Button>
    </section>
  );
}
