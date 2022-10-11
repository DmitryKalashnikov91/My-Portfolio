import React from 'react';
import { ArrowUp } from '../../ui/arrowUp/ArrowUp';
import Circles from '../../ui/circles/Circles';
import MetaTitle from '../../ui/MetaTitle';
import Works from './works/Works';
import AboutMe from './about-me/AboutMe';
import Grid from './grid/Grid';
import styles from './Home.module.scss';

const Home = ({ links, me }) => {
    return (
        <section className={styles.section}>
            <MetaTitle title='Portfolio | Kalasnikov' />
            <div className={styles.container}>
                <AboutMe me={me} />
                <Grid links={links} />
            </div>
            <Circles />
            <Works />
            <ArrowUp />
        </section>
    );
};

export default Home;
