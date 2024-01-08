import { useState } from "react";
import styles from "./Projetos.module.css";
import htmlImg from "../../imgs/html.png";
import cssImg from "../../imgs/css.png";
import javascriptImg from "../../imgs/javascript.png";
import reactImg from "../../imgs/react.png";
import typescriptImg from "../../imgs/typescript.png";
import vscodeImg from "../../imgs/vscode.png";
import cronometroImg from "../../imgProjetos/timer.png";
import cepImg from "../../imgProjetos/ProcuradorDeEndereco.png";
import imcImg from "../../imgProjetos/IMC.png";
import filmslibraryImg from "../../imgProjetos/filmslibrary.png";
import githubfinderImg from "../../imgProjetos/githubfinderImg.png";
import todolistImg from "../../imgProjetos/todolist.png";
import contadorImg from "../../imgProjetos/contadorImg.png";
import pokedex1 from "../../imgProjetos/pokedex1.png";

export const Projetos = () => {
  const [projetoAtual, setProjetoAtual] = useState(0);

  const projetos = [
    {
      titulo: "Pokedéx",
      descricao:
        "Conectado a API PokéAPI, este projeto mostra todos os Pokémons. Também mostra suas evoluções, podendo montar um time, procurar por nome ou por tipo.",
      linguagens: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
      linkAcessar: "https://pokedexapp-sepia.vercel.app/",
      linkGitHub: "https://github.com/ThyagoThayllan/pokedexapp",
      imagem: pokedex1,
    },
    {
      titulo: "Biblioteca de Filmes",
      descricao:
        "Conectado a API The Movie Database, este projeto mostra os Melhores Filmes, busca por filmes e mostra dados sobre o filme, como sua receita e orçamento gasto.",
      linguagens: ["HTML", "CSS", "JavaScript", "React"],
      linkAcessar: "https://filmslibrary.vercel.app/",
      linkGitHub: "https://github.com/ThyagoThayllan/filmslibrary",
      imagem: filmslibraryImg,
    },
    {
      titulo: "Procurador de Endereço",
      descricao:
        "Este projeto busca o endereço somente com o CEP. Passando o CEP, é feita uma requisição na API ViaCEP e retorna, logo abaixo do input, o endereço.",
      linguagens: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
      linkAcessar: "https://consultador-de-endereco.vercel.app/",
      linkGitHub: "https://github.com/ThyagoThayllan/Consultador-de-Endereco",
      imagem: cepImg,
    },
    {
      titulo: "GitHub Finder",
      descricao:
        "Conectado a API do GitHub, este projeto busca, e retorna abaixo do input, o perfil de um usuário do GitHub.",
      linguagens: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
      linkAcessar: "https://git-hub-finder-phi-gilt.vercel.app/",
      linkGitHub: "https://github.com/ThyagoThayllan/GitHub-Finder",
      imagem: githubfinderImg,
    },
    {
      titulo: "To Do List",
      descricao:
        "Uma lista de tarefas. Adiciona tarefas à fazer, deleta e muda seu estado para pendente (X) ou completa (V).",
      linguagens: ["HTML", "CSS", "JavaScript", "React"],
      linkAcessar: "https://to-do-list-2-two.vercel.app/",
      linkGitHub: "https://github.com/ThyagoThayllan/ToDoList-2",
      imagem: todolistImg,
    },
    {
      titulo: "Cronômetro",
      descricao:
        "Cronômetro com opções de 'Iniciar', 'Resetar', 'Pausar' e 'Continuar'.",
      linguagens: ["HTML", "CSS", "JavaScript"],
      linkAcessar: "https://thyagothayllan.github.io/timer/",
      linkGitHub: "https://github.com/ThyagoThayllan/timer",
      imagem: cronometroImg,
    },
    {
      titulo: "Calculador de IMC",
      descricao:
        "Digitando seu nome, altura e peso, esta calculadora calcula seu IMC e retorna se está com peso normal, sobrepeso ou obeso.",
      linguagens: ["HTML", "CSS", "JavaScript"],
      linkAcessar: "https://thyagothayllan.github.io/IMC-Calculator/",
      linkGitHub: "https://github.com/ThyagoThayllan/IMC-Calculator",
      imagem: imcImg,
    },
    {
      titulo: "Conta Palavras e Caracteres",
      descricao:
        "Um simples contador com um botão para definir se contará caracteres ou palavras",
      linguagens: ["HTML", "CSS", "JavaScript"],
      linkAcessar:
        "https://thyagothayllan.github.io/Contador-de-Caracteres-e-Palavras/",
      linkGitHub:
        "https://github.com/ThyagoThayllan/Contador-de-Caracteres-e-Palavras",
      imagem: contadorImg,
    },
  ];

  // Função para avançar para o próximo projeto
  const proximoProjeto = () => {
    setProjetoAtual((projetoAtual + 1) % projetos.length);
  };

  // Função para retroceder para o projeto anterior
  const projetoAnterior = () => {
    setProjetoAtual((projetoAtual - 1 + projetos.length) % projetos.length);
  };

  const projeto = projetos[projetoAtual];

  const getImageForLinguagem = (linguagem) => {
    switch (linguagem) {
      case "HTML":
        return htmlImg;
      case "CSS":
        return cssImg;
      case "JavaScript":
        return javascriptImg;
      case "React":
        return reactImg;
      case "TypeScript":
        return typescriptImg;
      default:
        return "";
    }
  };

  return (
    <div className={styles.container} id="projetos">
      <div className={styles.title}>
        <img src={vscodeImg} />
        <h1>Meus Projetos</h1>
      </div>
      <div className={styles.forTheButtons}>
        <button onClick={projetoAnterior} className={styles.buttonBackAndNext}>
          &#10094;
        </button>
        <div className={styles.projetosContainer}>
          {/* ------PROJETO */}
          <div className={styles.image}>
            <img src={projeto.imagem} />
          </div>
          <div className={styles.descricao}>
            <h2>{projeto.titulo}</h2>

            <p className={styles.p}>{projeto.descricao}</p>

            <div className={styles.linguagensUtilizadas}>
              <p>
                <b>
                  <i>Tecnologias utilizadas:</i>
                </b>
              </p>
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
              <a
                href={projeto.linkAcessar}
                target="_blank"
                className={styles.acessar}
              >
                Acessar
              </a>
              <a
                href={projeto.linkGitHub}
                target="_blank"
                className={styles.github}
              >
                GitHub
              </a>
            </div>
          </div>
          {/* -------FIM DO PROJETO */}
        </div>
        <button onClick={proximoProjeto} className={styles.buttonBackAndNext}>
          &#10095;
        </button>
      </div>
      <div className={styles.buttonsDiv}>
        <button className={styles.toggleButton} onClick={projetoAnterior}>
          &#10094;
        </button>
        <button className={styles.toggleButton} onClick={proximoProjeto}>
          &#10095;
        </button>
      </div>
    </div>
  );
};
