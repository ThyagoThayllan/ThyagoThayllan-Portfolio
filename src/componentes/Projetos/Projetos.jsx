import styles from './Projetos.module.css'
import euImg from '../../imgs/euimg.jpg'
import htmlImg from '../../imgs/html.png'
import cssImg from '../../imgs/css.png'
import javascriptImg from '../../imgs/javascript.png'
import reactImg from '../../imgs/react.png'
import typescriptImg from '../../imgs/typescript.png'
import vscodeImg from '../../imgs/vscode.png'

export const Projetos = () => {
  return (
    <div className={styles.container} id='projetos'>
      <div className={styles.title}>
        <img src={vscodeImg} />
        <h1>Meus Projetos</h1>
      </div>
      <div className={styles.projetosContainer}>
        <div className={styles.image}>
          <img src={euImg} />
        </div>
        <div className={styles.descricao}>
          <h2>Nome do Projeto</h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam vero ullam, inventore incidunt voluptatum eius dolorum sunt vel? Illum voluptates harum sed reprehenderit, voluptatibus dolorem aliquam impedit similique perferendis.</p>

          <div className={styles.linguagensUtilizadas}>
            <p><b><i>Linguagens utilizadas:</i></b></p>
            <div>
              <img src={htmlImg} className={styles.html} />
              <img src={cssImg}  />
              <img src={javascriptImg} className={styles.javascript} />
              <img src={reactImg} className={styles.react} />
              <img src={typescriptImg} className={styles.typescript} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
