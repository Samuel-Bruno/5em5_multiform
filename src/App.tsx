import Routes from "./routes"
import { FormProvider } from './Contexts/FormContext'

const App = () => {


  return (
    <FormProvider>
      <Routes />
    </FormProvider>
  )

}


export default App