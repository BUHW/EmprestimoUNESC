import styles from './Conteiner.module.css'

function Conteiner(props){
    return(
        <section className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </section>
    )
}

export default Conteiner