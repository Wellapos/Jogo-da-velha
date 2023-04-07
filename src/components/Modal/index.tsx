import { useMediaQuery } from '@mui/material'
import ReactModal from 'react-modal'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: JSX.Element[]
}

ReactModal.setAppElement('#root')

export const Modal = ({ open, onClose, children }: ModalProps) => {
  const smallBreakpoint = useMediaQuery('(max-width: 600px)')

  const smallWidth = smallBreakpoint ? '100%' : '30vw'

  const smallHeight = smallBreakpoint ? '100%' : '30vh'

  return (
    <ReactModal
      isOpen={open}
      contentLabel='Modal'
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: '#ffffffb0',
          width: '100%',
          height: '100%'
        },
        content: {
          backgroundColor: 'white',
          width: smallWidth,
          height: smallHeight,
          position: 'fixed',
          top: '0',
          left: '0',
          transform: 'translate(calc(50vw - 50%), calc(50vh - 50%))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          border: 'none'
        }
      }}
    >
      {children}
    </ReactModal>
  )
}
