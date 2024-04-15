import React from 'react';
import { Typography, Modal, CircularProgress } from '@material-ui/core';
import { changeLoading } from '../../store/actions/loading.action';
import { useSelector, useDispatch } from 'react-redux'

export default function Loading() {
  const dispatch = useDispatch(); // usado para chamar as actions
  const loading = useSelector(state => state.loadingReducer);

  return (
    <Modal
        open = { loading.open }
        onClose = {() => dispatch(changeLoading({open: false}))} // fecha o modal quando clica fora
        className = "d-flex align-items-center justify-content-center h-100"
    >
        <div className = "bg-white d-flex align-items-center rounded-lg p-3 outline-none">
            <CircularProgress size={20} className= "me-3" />
            <Typography variant="subtitle1"> { loading.msg } </Typography>
        </div>
    </Modal>
  )
}
