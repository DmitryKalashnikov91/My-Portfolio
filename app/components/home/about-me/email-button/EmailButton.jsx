import Image from 'next/image';
import styles from './EmailButton.module.scss';

const EmailButton = () => {
    return (
        <div className={styles.button}>
            <a
                href='mailto:kobe-24-8@mai.ru'
                target='_blank'
                rel='noopener noreferrer'
                title='kobe-24-8@mail.ru'>
                <span>
                    <Image src={`/icons/email.svg`} width={18} alt='mail' height={18} />
                </span>
            </a>
        </div>
    );
};

export default EmailButton;
