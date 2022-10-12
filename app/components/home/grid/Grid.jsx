import React from 'react';

import styles from './Grid.module.scss';
import GridItem from './GridItem';

const Grid = ({ links }) => {
    return (
        links && (
            <div className={styles.grid}>
                {links.map((link) => (
                    <GridItem key={link._id} item={link} />
                ))}
            </div>
        )
    );
};

export default Grid;
