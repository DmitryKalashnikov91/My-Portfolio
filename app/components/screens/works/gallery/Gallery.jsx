import { useEffect } from 'react';
import styles from './Gallery.module.scss';

const Gallery = () => {
    let slides;

    useEffect(() => {
        slides = document.querySelectorAll('#fruit');
        const removeActiveClasses = () =>
            slides.forEach((slide) => {
                slide.classList.remove(`${styles.active}`);
            });

        for (const slide of slides) {
            slide.addEventListener('click', () => {
                removeActiveClasses();
                slide.classList.add(`${styles.active}`);
            });
        }
    }, []);

    return (
        <>
            <ul className={styles.container}>
                <li
                    id='fruit'
                    className={`${styles.slide} ` + ` ${styles.active}`}
                    style={{
                        backgroundImage: `url(
                            https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80,
                        )`,
                    }}>
                    <h3>Apple</h3>
                </li>
                <li
                    id='fruit'
                    className={styles.slide}
                    style={{
                        backgroundImage: `url(
                            https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80,
                        )`,
                    }}>
                    <h3>Lemon</h3>
                </li>
                <li
                    id='fruit'
                    className={styles.slide}
                    style={{
                        backgroundImage: `url(
                            https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80,
                        )`,
                    }}>
                    <h3>Pineapple</h3>
                </li>
                <li
                    id='fruit'
                    className={styles.slide}
                    style={{
                        backgroundImage: `url(
                            https://images.unsplash.com/photo-1421167418805-7f170a738eb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80,
                        )`,
                    }}>
                    <h3>Pear</h3>
                </li>
                <li
                    id='fruit'
                    className={styles.slide}
                    style={{
                        backgroundImage: `url(
                        https://images.unsplash.com/photo-1596404643764-2a2461483a3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80,
                        )`,
                    }}>
                    <h3>Lime</h3>
                </li>
            </ul>
        </>
    );
};

export default Gallery;
