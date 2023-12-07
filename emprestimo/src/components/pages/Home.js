import LinkButton from '../layout/LinkButton'

import styles from './Home.module.css'

import HomeCircuits from '../../img/HomeCircuit.svg'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>UNESC</span> empréstimo de componentes</h1>

            <p>Comece a cadastrar Empréstimos de componentes aqui</p>

            <LinkButton to="cadastrar" text="Cadastrar Emprestimo"/>

            <img src={HomeCircuits} alt="HomeCircuits" />
        </section>
    )
}

export default Home