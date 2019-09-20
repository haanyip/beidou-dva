import React from 'react'
interface ModalProps{
  onConfirm?:()=>void
}
export const ModalContext = React.createContext<ModalProps>({
  onConfirm: ()=>{}
});