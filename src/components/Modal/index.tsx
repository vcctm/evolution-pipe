/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import Button from '../Button'
import Spinner from '../Spinner'
import * as S from './styles'

interface IModalProps {
  modalOpen: boolean
  closeModal?: (value: React.SetStateAction<boolean>) => void
  message?: string | null
}

const Modal = ({ modalOpen, closeModal, message }: IModalProps) => {
  if (!modalOpen) {
    return null
  }

  const VerifyMap = () => {
    const [password, setPassword] = useState('')
    const messages: Record<string, string | JSX.Element> = {
      ['verify: Not started']: <h1>Map not started!</h1>,
      ['verify: Incorrect.']: <h1 style={{ color: 'red' }}>Incorret!</h1>,
      ['verify: Correct.']: <h1 style={{ color: 'green' }}>Correct!</h1>
    }

    if (message?.includes('verify: Correct.')) {
      setPassword(message.split('Password:').pop()?.trim() || '')
    }

    if (!message) {
      return (
        <S.Wrapper>
          <Spinner />
        </S.Wrapper>
      )
    }
    return (
      <S.Wrapper>
        <S.VerifyWrapper>
          <S.WrapperText style={{ fontWeight: 'bold' }}>
            Map Validate:
          </S.WrapperText>
          <S.WrapperText>{messages[message] || 'invalid'}</S.WrapperText>
          <S.WrapperText>{password}</S.WrapperText>
          <Button onClick={() => closeModal!(false)}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <b>Continue</b>
              <FaArrowAltCircleRight />
            </div>
          </Button>
        </S.VerifyWrapper>
      </S.Wrapper>
    )
  }

  return createPortal(<VerifyMap />, document.getElementById('app-modal')!)
}

export default Modal
