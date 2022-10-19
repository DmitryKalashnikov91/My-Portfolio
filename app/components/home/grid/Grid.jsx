import React, { useEffect } from 'react';

import styles from './Grid.module.scss';
import GridItem from './GridItem';

const Grid = ({ links }) => {
    return (
        <>
            {links ? (
                <div className={styles.grid}>
                    {links.map((link) => (
                        <GridItem key={link._id} item={link} />
                    ))}
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </>
    );
};

export default Grid;
