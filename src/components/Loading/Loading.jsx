import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div data-testid="loading" className={styles.loading}>
      <Icon path={mdiLoading} color="grey"></Icon>
    </div>
  );
};

export default Loading;
