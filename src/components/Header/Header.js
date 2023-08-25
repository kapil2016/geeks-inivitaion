import styles from './Header.module.css'

const Header =()=>{
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src='https://geeksinvention.com/assets/v2/content/geeks-logo-white.svg' alt='logo'/>
            </div>
            <ul className={styles.nav}>
                <li>HOME</li>
                <li>WORKS</li>
                <li>TECHNOLOGIESS</li>
                <li>SERVICES</li>
                <li>COMPANY</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
}

export default Header ;