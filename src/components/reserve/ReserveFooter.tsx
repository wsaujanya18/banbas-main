import styles from './ReserveFooter.module.css';
import CommonButton from '../common/button/CommonButton';

type ReserveFooterProps = {
  show: boolean;
};

const ReserveFooter = ({ show }: ReserveFooterProps) => {
  return (
    <nav className={`${styles.reserveNav} ${show ? styles.show : ''}`}>
      <div className={styles.reserveButtonContainer}>
        <CommonButton
          padding="16px 24px"
          content="RESERVE"
          url="/reserve"
          type="normal"
        />
      </div>
    </nav>
  );
};

export default ReserveFooter;
