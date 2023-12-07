import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href=""><FaFacebook />  <span>Facebook</span></a>
                </li>

                <li>
                    <a href=""><FaInstagram />  <span>Intagran</span></a>
                </li>

                <li>
                    <a href=""><FaLinkedin /> <span>Linkedin</span></a>
                </li>
            </ul>

            <p className={styles.copy_right}> <span>Costs</span> &copy; 2023</p>
        </footer>
    )
}

export default Footer