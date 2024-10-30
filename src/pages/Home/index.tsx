import { HandPalm, Play } from 'phosphor-react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CyclesContext } from '../../contexts/CyclesContext'
import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from './styles'
import * as zod from 'zod'
import { useContext } from 'react'



const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe o nome da tarefa!'),
  minutesAmount: zod.number().min(5).max(60),
})




// "Infer" Estou automatizando algo que eu ja iria 'Falar'.
//Não precisa usar 'Interface' quando se utiliza:
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { createNewCycle, interruptCycle, activeCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { reset, watch, handleSubmit } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData){
    createNewCycle(data)
    reset()
  }



  //Observar o campo com nome ou id 'Task'
  const task = watch('task')
  const isSubmitTask = !task //Não tem nada dentro de 'task'

  //Retorno
  return (
    <HomeContainer>
        <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>

          <Countdown />
          {activeCycle ? (
            <StopCountDownButton type="button" onClick={interruptCycle}>
              {' '}
              <HandPalm size={24} />
              Interromper
            </StopCountDownButton>
          ) : (
            <StartCountDownButton type="submit" disabled={isSubmitTask}>
              {' '}
              <Play size={24} />
              Iniciar
            </StartCountDownButton>
          )}
        </form>
    </HomeContainer>
  )
}
