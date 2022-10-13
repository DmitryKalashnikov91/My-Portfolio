import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <p>Thank you for your attention</p>
                <p>This app is developed with: Next.js, SASS, Tailwind.</p>
                <p>2022</p>
            </footer>
        </>
    );
};

export default Footer;
