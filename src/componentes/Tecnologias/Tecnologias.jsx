import styles from './Tecnologias.module.css'
import fogueteImg from '../../imgs/foguete.png'
import htmlImg from '../../imgs/html.png'
import cssImg from '../../imgs/css.png'
import javascriptImg from '../../imgs/javascript.png'
import reactImg from '../../imgs/react.png'
import typescriptImg from '../../imgs/typescript.png'

export const Tecnologias = () => {
  return (
    <div className={styles.content} id='tecnologias'>
      <header className={styles.header}>
        <img src={fogueteImg} />
        <h1>Tecnologias</h1>
      </header>
      <p>
        Essas são as tecnologias que tenho conhecimento e que já desenvolvi projetos usando-as:<br />
      </p>
      <div>
        HTML, CSS, JavaScript, React, TypeScript.
      </div>
      <div className={styles.tecnologias}>
        <img src={htmlImg} />
        <img src={cssImg} />
        <img src={javascriptImg} />
        <img src={reactImg} />
        <img src={typescriptImg} />
      </div>
    </div>
  )
}
