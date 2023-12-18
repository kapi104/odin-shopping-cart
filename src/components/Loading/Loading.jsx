import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';

const Loading = () => {
  return (
    <div data-testid="loading">
      <Icon path={mdiLoading}></Icon>
    </div>
  );
};

export default Loading;
