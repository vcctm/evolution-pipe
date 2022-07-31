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
  const [clicked, setClicked] = useState(0)

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
        setClicked((previousClicked) =>
          previousClicked === 270 ? 360 : previousClicked + 90
        )
        handleRotatePipe && handleRotatePipe(lineIndex, pipeIndex)
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

export const Pipe = React.memo(PipeComponent)
