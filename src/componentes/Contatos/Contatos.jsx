import styles from './Contatos.module.css'
import telefoneImg from '../../imgs/telefone.png'
import telefone2 from '../../imgs/telefone2.png'
import whatsapp from '../../imgs/whatsapp.png'
import email from '../../imgs/o-email.png'
import linkedin2 from '../../imgs/linkedin2.png'
import github2 from '../../imgs/github2.png'

export const Contatos = () => {
  return (
    <div className={styles.content} id='contatos'>
      <header className={styles.header}>
        <img src={telefoneImg} />
        <h1>Contatos</h1>
      </header>

      <form action="https://formsubmit.co/thayllanst@outlook.com" method="POST" className={styles.form}>
        {/* <input type="hidden" name="_next" value="https://thyago-thayllan-portfolio.vercel.app/thanks.html" /> */}
        <h1>Fale comigo por email</h1>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" name="nome" placeholder='Digite seu nome' required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder='Digite seu email' required />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea name="mensagem" placeholder='Digite sua mensagem' required />
        </div>
        <button type="submit">Enviar</button>
      </form>

      <div className={styles.contatos}>
        <div>
          <img src={telefone2} />
          <p><a href="tel:+5588992447375">(88) 992447375</a></p>
        </div>
        <div>
          <img src={whatsapp} />
          <p><a href="tel:+5588992447375">(88) 992447375</a></p>
        </div>
        <div>
          <img src={email} />
          <p> <a href="mailto:thayllanst@outlook.com">
            thayllanst@outlook.com
          </a></p>
        </div>
        <div>
          <img src={linkedin2} />
          <p><a target='_blank' href="https://www.linkedin.com/in/thyago-thayllan-mendes-de-sousa-2058b0239/">
            LinkedIn
          </a></p>
        </div>
        <div>
          <img src={github2} />
          <p><a target='_blank' href='https://github.com/ThyagoThayllan'>
            GitHub
          </a></p>
        </div>
      </div>
    </div>
  )
}
