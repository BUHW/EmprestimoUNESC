import { Link } from 'react-router-dom'

import Conteiner from './Container'

import styles from './NavBar.module.css'

import logoUnesc from '../../img/LogoUnescGimp.png'

function NavBar(){
    return(
        <nav className={styles.navbar}>
            <Conteiner>
                <Link to="/">
                    <img className={styles.logo_unesc} src={logoUnesc} alt="Logo unesc" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">
                            Home
                        </Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/cadastrar">
                            Cadastrar Empréstimo
                        </Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/lista">
                            Listar Emprestimos
                        </Link>
                    </li>

                    <li className={styles.item}>
                        <a href="https://www.unesc.net/home" target='_blank'>
                            Portal Unesc
                        </a>
                    </li>
                </ul>
            </Conteiner>
        </nav>
    )
}

export default NavBar