import styles from './WorksListItem.module.css'
import Button from '../UI/Button';
import Tag from '../UI/Tag';
import React, { useRef, useEffect, useState } from 'react';

const WorksListItem = ({ image, title, subtitle, description, tags, textColor, bgColor }) => {

    const popupRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        let poprefCurrent = popupRef.current ;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                  } else {
                    setIsVisible(false); // Reset when leaving the viewport
                  }
            },
            { rootMargin: '50px', threshold:0.1 } // Adjust the threshold as needed
        );

        if (poprefCurrent) {
            observer.observe(poprefCurrent);
        }

        return () => {
            if (poprefCurrent) {
                observer.unobserve(poprefCurrent);
            }
        };
    }, []);
    return (
        <div className={styles['works-list__item']} style={{ backgroundColor: bgColor }}>
            <div className={styles['img-block']}>
                <div className={styles['img-w']}>
                    <img alt="IoT" src={image} />
                </div>

            </div>
            <div className={`${styles['text__w']} ${isVisible ? `${styles.popup}` : ''}`} ref={popupRef}>
                <div className={styles.text}>
                    <h3 style={{ color: textColor }}>{title}</h3>
                    <p className={styles.subtitle} >{subtitle}</p>
                    <div className={styles.tags}>
                        {tags.map(tag => <Tag key={tag} tag={tag}></Tag>)}
                    </div>
                    <div className={styles.content} style={{ color: textColor }}>
                        <p>
                            {description}
                        </p>
                    </div>
                    <Button title={'See full case study'} className={styles['btn_white']} hover={styles['hover_class']}></Button>
                </div>
            </div>
        </div>
    );
}

export default WorksListItem