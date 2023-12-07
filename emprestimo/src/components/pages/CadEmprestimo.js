
// import { useNavigate } from 'react-router-dom';

import ProjetoForm from '../project/ProjectForm';

import styles from  './CadEmprestimo.module.css'

function CadEmprestimo(){

    // const history = useNavigate();

    function createPost() {
        // Inicializando projeto costs e serviços

        // fetch('http://localhost:5000/emprestimos', {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json',
        //     },
        //     body: JSON.stringify(),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data)
        //         //redirecionar

        //         history('/lista', { state: { message: 'Empréstimo cadastrado com sucesso' } });
        //     })
        //     .catch(err => console.log(err))
    }

    return(
        <section className={styles.novoprojeto_conteiner}>
            <h1>Cadastrar Empréstimo</h1>
            <p>Cadastre certo</p>
            <ProjetoForm handleSubmit={createPost} btnText="cadastrar Empréstimo" />

        </section>
    )
}

export default CadEmprestimo