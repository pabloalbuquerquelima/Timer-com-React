import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

// Definição do tipo Action
interface AddNewCycleAction {
  type: ActionTypes.ADD_NEW_CYCLE
  payload: {
    newCycle: Cycle
  }
}

interface InterruptCurrentCycleAction {
  type: ActionTypes.INTERRUPT_CURRENT_CYCLE
}

interface MarkCurrentAsFinishedAction {
  type: ActionTypes.MARK_CURRENT_AS_FINISHED
}

type Action =
  | AddNewCycleAction
  | InterruptCurrentCycleAction
  | MarkCurrentAsFinishedAction

export function cyclesReducer(state: CyclesState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }

    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map(cycle => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptedDate: new Date() }
          }
          return cycle
        }),
        activeCycleId: null,
      }

    case ActionTypes.MARK_CURRENT_AS_FINISHED:
      return {
        ...state,
        cycles: state.cycles.map(cycle => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishedDate: new Date() }
          }
          return cycle
        }),
        activeCycleId: null,
      }

    default:
      return state
  }
}
