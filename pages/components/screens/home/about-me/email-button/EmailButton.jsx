import Image from 'next/image';
import styles from './EmailButton.module.scss';
import { APP_URL } from '../../../../../../app/constants';

const EmailButton = () => {
    return (
        <div className={styles.button}>
            <a
                href='mailto:kobe-24-8@mai.ru'
                target='_blank'
                rel='noopener noreferrer'
                title='kobe-24-8@mail.ru'>
                <span>
                    <Image src={`${APP_URL}/icons/email.svg`} width={18} alt='button' height={18} />
                </span>
            </a>
        </div>
    );
};

export default EmailButton;
