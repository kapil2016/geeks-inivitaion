import styles from './Tag.module.css'
const Tag =({tag})=>{
    return (
        <span className={styles.tag}>{tag}</span>
    )
}

export default Tag ;