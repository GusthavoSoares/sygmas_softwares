import styles from './TextInfo.module.scss'

interface TextInfoInterface {
    text?: string
}

export default function TextInfo({ text }: TextInfoInterface) {
    return (
        <p className={styles.sucess}>{text}</p>
    )
}