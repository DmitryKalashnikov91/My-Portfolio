import { ArrowUp } from '../../ui/arrowUp/ArrowUp';
import Circles from '../../ui/circles/Circles';
// import MetaTitle from '../../ui/MetaTitle';
import AboutMe from './about-me/AboutMe';
import Grid from './grid/Grid';
import styles from './Home.module.scss';
import Gallery from './works/Gallery';
import Slider from './works/Slider';

const Home = ({ links, me }) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <AboutMe me={me} />
                <Grid links={links} />
            </div>
            <Circles />

            <h2>My first projects:</h2>
            <Gallery />
            <Slider />
            <ArrowUp />
        </section>
    );
};

export default Home;
