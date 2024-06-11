import React from 'react'
import { changeAlert } from '../../store/actions/alert.action' // importando a função changeAlert 
import { Modal, Typography } from '@material-ui/core' // importando o Modal e Typograph para poder exibir o texto da mensagem
import { useSelector, useDispatch} from 'react-redux'
import { MdError, MdCheckCircle } from 'react-icons/md'

export default function Alert() {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.alertReducer)

  if(alert.open) {
    setTimeout(() => dispatch( changeAlert({ open: false}) ), alert.time);
  }

  // as propriedades 'open' e 'onClose' estão documentadas no material ui
  return (
    <Modal
      open = { alert.open }
      onClose = {() => dispatch( changeAlert({ open: false }) )}
      className = "d-flex flex-column align-items-center justify-content-center h-100"
    >
        <div className="bg-white rounded-lg d-flex align-items-center outline-none p-4">
            {(alert.class === 'success') && 
                <MdCheckCircle style={{ fontSize: '2.5rem' }} className="me-3 text-success" />
            }
            {(alert.class === 'error') && 
                <MdError style={{ fontSize: '2.5rem' }} className="me-3 text-danger" />
            }            
            <Typography className="font-weight-bold" variant="subtitle2">
                {alert.msg}
            </Typography>
        </div>
    </Modal>
  )
}
