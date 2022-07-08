import { ReactNode } from 'react'
import Header from '../components/Header'
import SideBarItem from '../components/SideBarItem'
import { useForm } from '../Contexts/FormContext'
import * as C from './styles'

type Props = {
  children: ReactNode
}

const Theme = ({ children }: Props) => {
  const {state} = useForm()


  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Sidebar>
            <SideBarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />
            <SideBarItem
              title="Profissional"
              description="Seu nível"
              icon="mail"
              path="/step2"
              active={state.currentStep === 2}
            />
            <SideBarItem
              title="Contatos"
              description="Como te achar"
              icon="book"
              path="/step3"
              active={state.currentStep === 3}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  )

}


export default Theme