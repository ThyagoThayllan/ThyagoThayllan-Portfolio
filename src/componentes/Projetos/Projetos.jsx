import { useState } from 'react'
import styles from './Projetos.module.css'
import htmlImg from '../../imgs/html.png'
import cssImg from '../../imgs/css.png'
import javascriptImg from '../../imgs/javascript.png'
import reactImg from '../../imgs/react.png'
import typescriptImg from '../../imgs/typescript.png'
import vscodeImg from '../../imgs/vscode.png'
import cronometroImg from '../../imgProjetos/timer.png'
import cepImg from '../../imgProjetos/ProcuradorDeEndereco.png'
import imcImg from '../../imgProjetos/IMC.png'


export const Projetos = () => {
  const [projetoAtual, setProjetoAtual] = useState(0)

  const projetos = [
    {
      titulo: 'Cronômetro',
      descricao: 'Cronômetro com opções de "Iniciar", "Resetar", "Pausar" e "Continuar". Tecnologias usadas: HTML, CSS, JavaScript.',
      linguagens: ['HTML', 'CSS', 'JavaScript'],
      linkAcessar: 'https://thyagothayllan.github.io/timer/',
      linkGitHub: 'https://github.com/ThyagoThayllan/timer',
      imagem: cronometroImg
    },
    {
      titulo: 'Calculador de IMC',
      descricao: 'Digitando seu nome, altura e peso, esta calculadora calcula seu IMC e retorna se está com peso normal, sobrepeso ou obeso. Tecnologias usadas: HTML, CSS, JavaScript.',
      linguagens: ['HTML', 'CSS', 'JavaScript'],
      linkAcessar: 'https://thyagothayllan.github.io/IMC-Calculator/',
      linkGitHub: 'https://github.com/ThyagoThayllan/IMC-Calculator',
      imagem: imcImg
    },
    {
      titulo: 'Procurador de Endereço',
      descricao: 'Este projeto busca o endereço somente com o CEP. Passando o CEP, é feita uma requição na API ViaCEP e retorna, logo abaixo do input, o endereço. Tecnologias usadas: HTML, CSS, JavaScript, React, TypeScript.',
      linguagens: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
      linkAcessar: 'https://consultador-de-endereco.vercel.app/',
      linkGitHub: 'https://github.com/ThyagoThayllan/Consultador-de-Endereco',
      imagem: cepImg
    },
  ];

  // Função para avançar para o próximo projeto
  const proximoProjeto = () => {
    setProjetoAtual((projetoAtual + 1) % projetos.length);
  };

  // Função para retroceder para o projeto anterior
  const projetoAnterior = () => {
    setProjetoAtual((projetoAtual - 1 + projetos.length) % projetos.length)
  }

  const projeto = projetos[projetoAtual]

  const getImageForLinguagem = (linguagem) => {
    switch (linguagem) {
      case 'HTML':
        return htmlImg;
      case 'CSS':
        return cssImg;
      case 'JavaScript':
        return javascriptImg;
      case 'React':
        return reactImg;
      case 'TypeScript':
        return typescriptImg;
      default:
        return '';
    }
  }


  return (
    <div className={styles.container} id='projetos'>
      <div className={styles.title}>
        <img src={vscodeImg} />
        <h1>Meus Projetos</h1>
      </div>
      <div className={styles.forTheButtons}>
        <button onClick={projetoAnterior} className={styles.buttonBackAndNext}>&#10094;</button>
        <div className={styles.projetosContainer}>

          {/* ------PROJETO */}
          <div className={styles.image}>
            <img src={projeto.imagem} />
          </div>
          <div className={styles.descricao}>
            <h2>{projeto.titulo}</h2>

            <p className={styles.p}>{projeto.descricao}</p>

            <div className={styles.linguagensUtilizadas}>
              <p><b><i>Linguagens utilizadas:</i></b></p>
              <div>
                {projeto.linguagens.map((linguagem, index) => (
                  <img
                    className={styles.img}
                    key={index}
                    src={getImageForLinguagem(linguagem)}
                  />
                ))}
              </div>
            </div>
            <div className={styles.buttons}>
              <a href={projeto.linkAcessar} target='_blank' className={styles.acessar}>Acessar</a>
              <a href={projeto.linkGitHub} target='_blank' className={styles.github}>GitHub</a>
            </div>
          </div>
          {/* -------FIM DO PROJETO */}
        </div>
        <button onClick={proximoProjeto} className={styles.buttonBackAndNext}>&#10095;</button>
      </div>
      {/* Buttons */}
      <div className={styles.radioButtons}>
        <input type="radio" className={styles.radioButton} name="radio-btn" id="radio1" checked={projetoAtual === 0} onChange={() => setProjetoAtual(0)} />
        <input type="radio" className={styles.radioButton} name="radio-btn" id="radio2" checked={projetoAtual === 1} onChange={() => setProjetoAtual(1)} />
        <input type="radio" className={styles.radioButton} name="radio-btn" id="radio3" checked={projetoAtual === 2} onChange={() => setProjetoAtual(2)} />
      </div>
      <div className={styles.buttonsDiv}>
        <button className={styles.toggleButton} onClick={projetoAnterior}>&#10094;</button>
        <button className={styles.toggleButton} onClick={proximoProjeto}>&#10095;</button>
      </div>
      {/* Radio Buttons */}
    </div>
  )
}
