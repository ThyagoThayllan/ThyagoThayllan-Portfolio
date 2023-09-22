import documentoImg from '../../imgs/documento.svg'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img src={documentoImg} />
                <h1>Thyago Thayllan</h1>
            </div>
            <nav className={styles.navbar}>
                <ul>
                    <li><a href="#perfil" className={styles.recebeAfter}>Perfil</a></li>
                    <li><a href="#projetos" className={styles.recebeAfter}>Projetos</a></li>
                    <li><a href="#tecnologias" className={styles.recebeAfter}>Habilidades</a></li>
                    <li><a href="#contatos" className={styles.recebeAfter}>Contatos</a></li>
                    <li>
                        <a className={styles.gitHubDiv} href="https://github.com/ThyagoThayllan" target="_blank">
                            GitHub
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
