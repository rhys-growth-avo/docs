import styles from './Footer.module.scss';
import { FunctionComponent } from 'react';
import Link from '../components/Link';
import Image from 'next/image';
import FaqSvg from '../public/images/svg/faq.svg';

import classNames from 'classnames';

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.col}>
        <Link href="/help/troubleshooting" passHref>
          <div className={classNames(styles.iconText, styles.link)}>
            <Image
              alt="Rescue ring"
              src={FaqSvg}
              width={20}
              height={20}
            ></Image>
            <div>Support</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
