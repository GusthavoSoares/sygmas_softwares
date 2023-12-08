import styles from '../src/global/global.module.scss'



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body className={styles.reset}>
                {children}
            </body>
        </html>
    )
}