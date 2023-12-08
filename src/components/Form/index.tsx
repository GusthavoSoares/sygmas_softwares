import { ReactNode } from 'react'
import styles from './Form.module.scss'

interface FormProps{
    children?: ReactNode,
    titulo:string
}


export default function Form({ children, titulo }:FormProps) {
    
    return (
        <form className={styles.form}>
            <h1 className={styles.form_text}>{titulo}</h1>
            {children}
        </form>
    )
}