import { actionTypes } from '../actions/alert.action'

const initialState = {
    open: false,
    class: 'error',
    time: 3000,
    msg: 'Mensagem de Alerta vai aqui'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionTypes.CHANGE:
    // ...state -> é o estado inicial
    // ...payload -> são os dados que enviaremos através da função CHANGE ALERT
    return { ...state, ...payload }

  default:
    return state
  }
}
