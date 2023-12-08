import styles from './Input.module.scss'

interface InputProps {
    type: string,
    placeholder: string,
    limit?: number,
    pattern?: string,
    text: string,
    entry?: string,
    required: boolean,
    alias: string,
}

export default function Input({ type = "text", placeholder, limit, pattern, text, required, alias, entry }: InputProps) {
    return (
        <section className={styles.box}>
            <label htmlFor={alias}>{text}</label>
            <input type={type} className={styles.input} placeholder={placeholder}
                required={required} pattern={pattern} value={entry} maxLength={limit} name={alias} />
        </section>
    )
}