import * as C from './styles'
import Theme from "../../Theme"
import { useForm, FormActions } from '../../Contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'


const FormStep3 = () => {

  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    if (state.name === '') {
      navigate("/", { replace: true })
      return
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      })
    }
  }, [])

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      console.log(state)
    } else {
      alert('Preencha os dados')
    }
  }

  const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type:FormActions.setEmail,
      payload:e.target.value
    })
  }

  const handleGitHubChange = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type:FormActions.setGithub,
      payload:e.target.value
    })
  }
  

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha seus contatos para conseguirmos entrar em contato.</p>

        <hr />

        <label>
          Qual seu email?
          <input
            type={'email'}
            value={state.email}
            onChange={handleEmailChange}
            autoFocus
          />
        </label>

        <label>
          Qual seu GitHub?
          <input
            type={'text'}
            value={state.github}
            onChange={handleGitHubChange}
            autoFocus
          />
        </label>

        <Link to={'/step2'} className='backButton'>Voltar</Link>
        <button onClick={handleNextStep}>Finalizar cadastro</button>
      </C.Container>
    </Theme>
  )

}


export default FormStep3