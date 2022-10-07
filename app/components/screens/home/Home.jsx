import React from 'react';
import Circles from '../../ui/circles/Circles';
import MetaTitle from '../../ui/MetaTitle';
import AboutMe from './about-me/AboutMe';
import Grid from './grid/Grid';
import styles from './Home.module.scss';

const Home = ({ links, me }) => {
    return (
        <section className={styles.section}>
            <MetaTitle title='Все ссылки тут' />
            <div className={styles.container}>
                <AboutMe me={me} />
                <Grid links={links} />
            </div>
            <Circles />
        </section>
    );
};

export default Home;
