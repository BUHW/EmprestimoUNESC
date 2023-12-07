import { useState, useEffect } from 'react';

import Input from '../form/Input';
import SubmitButton from "../form/SubmitButton";

import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, btnText}){

    const submit = (e) => {
        // e.preventDefault()
         handleSubmit()
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input
            type="text"
            text="Nome do Projeto"
            name="name"
            placeholder="digite o nome do projeto"
            // handleOnChange={handleChange}
            // value={project.name ? project.name : ''}
            />

            <Input
            type="text"
            text="Nome do Projeto"
            name="name"
            placeholder="digite o nome do projeto"
            // handleOnChange={handleChange}
            // value={project.name ? project.name : ''}
            />

            <Input
            type="date"
            text="Nome do Projeto"
            name="name"
            placeholder="digite o nome do projeto"
            // handleOnChange={handleChange}
            // value={project.name ? project.name : ''}
            />

            <Input
            type="text"
            text="Nome do Projeto"
            name="name"
            placeholder="digite o nome do projeto"
            // handleOnChange={handleChange}
            // value={project.name ? project.name : ''}
            />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm