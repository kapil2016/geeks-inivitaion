import styles from './Button.module.css'
import { useState } from 'react';

const Button = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const classes = isHovered? `${styles.btn} ${props.className} ${props.hover}`:`${styles.btn} ${props.className}`
    


    return (
        <a
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={classes}
            rel="nofollow"
            href="/">
    
            <span>{props.title}</span>
            <span className={styles.arrow}>→</span>
        </a>
    )
}

export default Button;