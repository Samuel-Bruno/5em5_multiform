import * as C from './styles'
import Theme from "../../Theme"
import { useForm, FormActions } from '../../Contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useEffect } from 'react'
import SelectOption from '../../components/SelectOption'
import { Link } from 'react-router-dom'


const FormStep2 = () => {

  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    if (state.name === '') {
      navigate("/", { replace: true })
      return
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      })
    }
  }, [])

  const handleNextStep = () => {
    if (state.name !== '') {
      navigate("/step3", { replace: true })
    } else {
      alert('Preencha os dados')
    }
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz com sua situação atual</p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon='🥳'
          selected={state.level === 0}
          onClick={() => dispatch({ type: FormActions.setLevel, payload: 0 })}
        />
        <SelectOption
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon='😎'
          selected={state.level === 1}
          onClick={() => dispatch({ type: FormActions.setLevel, payload: 1 })}
        />

        <Link to={'/'} className='backButton'>Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  )

}


export default FormStep2