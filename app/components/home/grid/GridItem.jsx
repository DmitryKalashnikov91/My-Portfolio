import Image from 'next/image';
import styles from './Grid.module.scss';

const GridItem = ({ item }) => {
    return (
        <>
            {item ? (
                <a
                    href={item.link}
                    rel='noopener noreferrer'
                    target='_blank'
                    className={styles.item}>
                    <div
                        className={styles.gradient}
                        style={{
                            backgroundImage: `linear-gradient(to right, ${item.gradient.from} 0%, ${item.gradient.to} 51%, ${item.gradient.from} 100%)`,
                        }}>
                        <Image
                            className={styles.svg}
                            src={item.icon.path}
                            alt='link'
                            width={item.icon.width}
                            height={100}
                        />
                    </div>
                    <div className={styles.title}>{item.title}</div>
                </a>
            ) : (
                <h2>Loading...</h2>
            )}
        </>
    );
};

export default GridItem;
