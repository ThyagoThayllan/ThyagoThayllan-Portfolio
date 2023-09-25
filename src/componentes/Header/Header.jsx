import { useState } from 'react'
import documentoImg from '../../imgs/documento.svg'
import styles from './Header.module.css'



export const Header = () => {

    const [mobileMenuOpened, setMobileMenuOpened] = useState(false)

    const openAndCloseMobileMenu = () => {
        setMobileMenuOpened(!mobileMenuOpened)
    }

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
                    <li><a href="#tecnologias" className={styles.recebeAfter}>Tecnologias</a></li>
                    <li><a href="#contatos" className={styles.recebeAfter}>Contatos</a></li>
                    <li>
                        <a className={styles.gitHubDiv} href="https://github.com/ThyagoThayllan" target="_blank">
                            GitHub
                        </a>
                    </li>
                </ul>
            </nav>
            {mobileMenuOpened === false
                ? (<div className={styles.mobileMenuIcon} onClick={openAndCloseMobileMenu}>
                    &#9776;
                </div>)
                : (<div className={styles.mobileMenu}>
                    <p onClick={openAndCloseMobileMenu}>
                        &#10006;
                    </p>
                    <ul>
                        <li><a href="#perfil">Perfil</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#tecnologias">Tecnologias</a></li>
                        <li><a href="#contatos">Contatos</a></li>
                    </ul>

                </div>)}


        </header>
    )
}
