import Gallery from './Gallery/Gallery';
import Slider from './Slider/Slider';
import styles from './Works.module.scss';

const Works = () => {
    return (
        <div className={styles.works}>
            <h2 className={styles.title}>My first projects:</h2>

            <h3 className={styles.item}>Gallery</h3>
            <Gallery />
            <h3 className={styles.item}>Slider</h3>
            <Slider />
        </div>
    );
};

export default Works;
