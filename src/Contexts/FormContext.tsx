import { createContext, ReactNode, useContext, useReducer } from "react"

type StateType = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
}
type ActionType = {
  type: FormActions;
  payload: any;
}
type ContextType = {
  state: StateType;
  dispatch: (action: ActionType) => void
}
type FormProviderType = {
  children:ReactNode
}

const initialData: StateType = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: ''
}

// Context
const FormContext = createContext<ContextType | undefined>(undefined)

// Reducer
export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub
}
const formReducer = (state:StateType, action:ActionType) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload }
    case FormActions.setName:
      return { ...state, name: action.payload }
    case FormActions.setEmail:
      return { ...state, email: action.payload }
    case FormActions.setGithub:
      return { ...state, github: action.payload }
    case FormActions.setLevel:
      return { ...state, level: action.payload }
    default:
      return state
  }
}

// Provider
export const FormProvider = ({ children }:FormProviderType) => {
  const [state, dispatch] = useReducer(formReducer, initialData)
  const value = { state, dispatch }

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}

// Context Hook
export const useForm = () => {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useForm needs to be used in FormProvider')
  }
  return context
}