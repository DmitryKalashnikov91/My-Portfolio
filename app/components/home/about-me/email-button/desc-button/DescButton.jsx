import React from 'react';
import { useOutside } from '../../../../../../app/hooks/useOutside';
import styles from './DescButton.module.scss';
import cn from 'classnames';
import parse from 'html-react-parser';

const DescButton = ({ description }) => {
    const { isShow, setIsShow, ref } = useOutside(false);

    return (
        <div className={styles.parent} ref={ref}>
            <button
                onClick={() => setIsShow(!isShow)}
                className={cn({
                    [styles.active]: isShow,
                })}>
                <span>About me</span>
            </button>
            {isShow && <article>{parse(description)}</article>}
        </div>
    );
};

export default DescButton;
