import { Contatos } from './componentes/Contatos/Contatos'
import { Footer } from './componentes/Footer/Footer'
import { Header } from './componentes/Header/Header'
import { Perfil } from './componentes/Perfil/Perfil'
import { Projetos } from './componentes/Projetos/Projetos'
import { Tecnologias } from './componentes/Tecnologias/Tecnologias'

export const App = () => {

  return (
    <>
      <Header />
      <Perfil />
      <Projetos />
      <Tecnologias />
      <Contatos />
      <Footer />
    </>
  )
}