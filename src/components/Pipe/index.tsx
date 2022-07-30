import * as S from './styles'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Pipe = ({ children }: { children: string }) => {
  const [clicked, setClicked] = useState(0)

  return (
    <button
      style={{
        background: 'unset',
        cursor: 'pointer',
        padding: 0,
        border: '1px solid red',
        maxHeight: 'fit-content'
      }}
      onClick={() => {
        setClicked((previousClicked) =>
          previousClicked === 270 ? 360 : previousClicked + 90
        )
      }}
    >
      <motion.div
        style={{
          display: 'flex'
        }}
        animate={{ rotate: clicked }}
      >
        <S.Char>{children}</S.Char>
      </motion.div>
    </button>
  )
}

export default Pipe
