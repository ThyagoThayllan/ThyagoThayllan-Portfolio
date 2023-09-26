import styles from './Perfil.module.css'
import minhaFoto from '../../imgs/euimg.png'
import linkedinImg from '../../imgs/linkedin.png'
import githubImg from '../../imgs/github.png'
import htmlImg from '../../imgs/html.png'
import cssImg from '../../imgs/css.png'
import javascriptImg from '../../imgs/javascript.png'
import reactImg from '../../imgs/react.png'
import typescriptImg from '../../imgs/typescript.png'
import avatarImg from '../../imgs/avatar.png'

export const Perfil = () => {
    return (
        <div className={styles.content} id="perfil">
            <div className={styles.contentPerfil}>
                <div className={styles.title}>
                    <img src={avatarImg} />
                    <h1>Meu Perfil</h1>
                </div>
                <div className={styles.perfilContent}>
                    <div className={styles.perfil}>
                        <img src={minhaFoto} />
                        <div>
                            <h2>Thyago Thayllan Mendes de Sousa</h2>
                            <p>Desenvolvedor Front-End</p>
                        </div>
                    </div>
                    <div className={styles.infoPerfil}>
                        <p>
                            Olá, meu nome é Thyago Thayllan, sou Desenvolvedor Front-End e tenho 19 anos. Tenho experiência e conhecimentos em HTML, CSS, JavaScript, React e TypeScript. Explore meu portfólio para ver meus projetos e minha paixão por criar experiências web incríveis!
                        </p>
                        <div className={styles.linguagens}>
                            <img src={htmlImg} />
                            <img src={cssImg} />
                            <img src={javascriptImg} />
                            <img src={reactImg} />
                            <img src={typescriptImg} />
                        </div>
                        <div className={styles.links}>
                            <a href="https://www.linkedin.com/in/thyago-thayllan-mendes-de-sousa-2058b0239/" target="_blank" className={styles.linkLinkedin}>
                                <img src={linkedinImg} className={styles.linkedin} />
                                <p><b>Linkedin</b></p>
                            </a>
                            <a href="https://github.com/ThyagoThayllan" target='_blank' className={styles.linkGithub}>
                                <img src={githubImg} className={styles.github} />
                                <p><b>GitHub</b></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
