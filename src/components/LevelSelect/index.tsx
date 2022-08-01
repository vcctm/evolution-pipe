/* eslint-disable react/no-unescaped-entities */
import { useId } from 'react'
import { ReadyState } from 'react-use-websocket'
import { FaCaretRight } from 'react-icons/fa'
import { ILevelsEntity } from '../../types'
import Button from '../Button'
import Spinner from '../Spinner'
import * as S from './styles'

interface ILevelSelectProps {
  levels: ILevelsEntity[]
  lastMessage?: string | null
  connectionStatus?: ReadyState | null | string
  readyState?: ReadyState | null
}

const LevelSelect = ({ levels, connectionStatus }: ILevelSelectProps) => {
  const levelId = useId()

  if (connectionStatus !== 'Open') {
    return (
      <S.Wrapper>
        <Spinner />
      </S.Wrapper>
    )
  }

  return (
    <S.Wrapper>
      Select new Level:
      <S.Levels>
        {levels.map((level) => {
          return (
            <Button
              icon={<FaCaretRight />}
              key={`${levelId}-${level.level}`}
              onClick={() => level.startLevelFunction(level.level.toString())}
            >
              <b>Level: </b> {level.level}
            </Button>
          )
        })}
      </S.Levels>
    </S.Wrapper>
  )
}

export default LevelSelect
