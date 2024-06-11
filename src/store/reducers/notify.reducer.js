import { actionTypes } from '../actions/notify.action'

const initialState = {
    open: false,
    horizontal: 'center',
    vertical: 'top',
    class: 'success',
    time: 30000,
    msg: '(mensagem de sucesso ou erro vai aqui)'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionTypes.CHANGE:
    return { ...state, ...payload }

  default:
    return state
  }
}
