import Link from "next/link"
import styles from './Link.module.scss'

interface NavProps {
    url:string,
    title: string;
}

export default function NavLink({url, title}:NavProps) {
    return (
        <Link href={url} className={styles.link}>{title}</Link>
    )
}