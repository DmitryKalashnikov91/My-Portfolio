import { useEffect } from 'react';
import styles from './Slider.module.scss';

const Slider = () => {
    let upBtn;
    let downBtn;
    let sidebar;
    let container;
    let mainSlide;
    let slidesCount;

    let activeSlideIndex = 0;

    useEffect(() => {
        upBtn = document.querySelector('#up');
        downBtn = document.querySelector('#down');
        sidebar = document.querySelector('#sidebar');
        container = document.querySelector('#container');
        mainSlide = document.querySelector('#main-slide');
        slidesCount = mainSlide.getElementsByTagName('div').length;
        sidebar.style.top = `-${(slidesCount - 1) * 60}vh`;
        upBtn.addEventListener('click', () => {
            changeSlide('up');
        });
        downBtn.addEventListener('click', () => {
            changeSlide('down');
        });
        document.addEventListener('keydown', (event) => {
            event.preventDefault();
            if (event.key === 'ArrowUp') {
                changeSlide('up');
            } else if (event.key === 'ArrowDown') {
                changeSlide('down');
            }
        });
        function changeSlide(direction) {
            if (direction === 'up') {
                activeSlideIndex++;
                if (activeSlideIndex === slidesCount) {
                    activeSlideIndex = 0;
                }
            } else if (direction === 'down') {
                activeSlideIndex--;
                if (activeSlideIndex < 0) {
                    activeSlideIndex = slidesCount - 1;
                }
            }
            const height = container.clientHeight;
            mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
            sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
        }
    }, []);

    return (
        <div className={styles.container} id='container'>
            <div className={styles.sidebar} id='sidebar'>
                <div
                    style={{
                        background: 'linear-gradient(229.99deg, #dddddd -26%, #3b3b3b 145%)',
                    }}>
                    <h1>Game</h1>
                    <p>Basketball</p>
                </div>
                <div
                    style={{ background: 'linear-gradient(215.32deg, #030303 -1%, #020101 124%)' }}>
                    <h1>It's a life</h1>
                    <p>Basketball</p>
                </div>
                <div
                    style={{ background: 'linear-gradient(221.87deg, #705161 1%, #47213b 128%);' }}>
                    <h1>Enjoy the moment</h1>
                    <p>Basketball</p>
                </div>
                <div
                    style={{
                        background: 'linear-gradient(220.16deg, #444026 -8%, #3f2805 138%);',
                    }}>
                    <h1>Love this Game</h1>
                    <p>Basketball</p>
                </div>
            </div>
            <div className={styles.main_slide} id='main-slide'>
                <div
                    style={{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1484482340112-e1e2682b4856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80)',
                    }}></div>
                <div
                    style={{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80)',
                    }}></div>
                <div
                    style={{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1587296104393-8db6cda4418d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)',
                    }}></div>
                <div
                    style={{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)',
                    }}></div>
            </div>
            <div className={styles.controls}>
                <button className={styles.down_button} id='down'>
                    <img src='/icons/arrow-down.svg' alt='down' />
                </button>
                <button className={styles.up_button} id='up'>
                    <img src='/icons/arrow-up.svg' alt='up' />
                </button>
            </div>
        </div>
    );
};

export default Slider;
