import * as S from './styles'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

interface IPipeProps {
  children: string
  handleRotatePipe?: (x: number, y: number) => void
  lineIndex: number
  pipeIndex: number
}

function PipeComponent({
  children,
  handleRotatePipe,
  lineIndex,
  pipeIndex
}: IPipeProps) {
  const [clicked, setClicked] = useState(1)

  return (
    <button
      style={{
        background: 'unset',
        cursor: 'pointer',
        padding: 0,
        border: 'unset',
        maxHeight: 'fit-content'
      }}
      onClick={() => {
        setClicked((previousClicked) => (previousClicked === 0 ? 1 : 1))
        handleRotatePipe && handleRotatePipe(pipeIndex, lineIndex)
      }}
    >
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        animate={{ opacity: clicked }}
      >
        <S.Char>{children}</S.Char>
      </motion.div>
    </button>
  )
}

export const Pipe = React.memo(PipeComponent)
