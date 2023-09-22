import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.div}>
            <p className={styles.p}>
                Tecnologias utilizadas neste meu portfólio:<br/>
                <b>React</b>, <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b>.
            </p>
        </div>

        <p><span>&#10084;</span> Feito por <b><i>Thyago Thayllan</i></b>.</p>
    </footer>
  )
}
