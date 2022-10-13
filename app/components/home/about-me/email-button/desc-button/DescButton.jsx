import React, { useEffect, useState } from 'react';
import { useOutside } from '../../../../../../app/hooks/useOutside';
import styles from './DescButton.module.scss';
import cn from 'classnames';
import parse from 'html-react-parser';

const DescButton = ({ description }) => {
    const { isShow, setIsShow, ref } = useOutside(false);
    const [isEng, setIsEng] = useState(true);
    const toggleLang = () => {
        setIsEng((prevstate) => !prevstate);
    };
    const btnLang = isEng ? 'rus' : 'eng';
    const descriptionWithLang = isEng ? description.eng : description.rus;

    return (
        <div className={styles.parent} ref={ref}>
            <button
                onClick={() => setIsShow(!isShow)}
                className={cn({
                    [styles.active]: isShow,
                })}>
                <span>About me</span>
            </button>
            {isShow && (
                <article>
                    <button className={styles.btn_lang} onClick={toggleLang}>
                        {btnLang}
                    </button>
                    {parse(descriptionWithLang)}
                </article>
            )}
        </div>
    );
};

export default DescButton;
