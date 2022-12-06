import styles from './AboutMe.module.scss';
import Image from 'next/image';
import EmailButton from './email-button/EmailButton';
import DescButton from './email-button/desc-button/DescButton';
import { useEffect, useState } from 'react';

const AboutMe = ({ me }) => {
    const [meDesc, setMeDesc] = useState('');
    useEffect(() => {
        setMeDesc(me[0].description);
    }, []);
    return (
        <>
            {me ? (
                <div className={styles.me}>
                    <div className={styles['image-wrapper']}>
                        <Image
                            src={`/avatar.jpeg`}
                            width={152}
                            height={175}
                            className={styles.image}
                            alt='avatar'
                            quality={100}
                        />
                    </div>
                    <div className={styles.heading}>
                        <span>Frontend React developer </span>
                        <Image src={`/icons/verified.svg`} alt='ok' height={16} width={16} />
                    </div>
                    <article>
                        <a href='tel:+9999152567'>+7 999 915 25 67</a>
                    </article>
                    <EmailButton />
                    {<DescButton description={meDesc} />}
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </>
    );
};

export default AboutMe;
