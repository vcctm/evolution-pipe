/* eslint-disable react/no-unescaped-entities */
import { useId } from 'react'
import { ReadyState } from 'react-use-websocket'
import { ILevelsEntity } from '../../types'
import Button from '../Button'
import * as S from './styles'

interface ILevelSelectProps {
  levels: ILevelsEntity[]
  lastMessage?: string | null
  connectionStatus?: ReadyState | null | string
  readyState?: ReadyState | null
}

const LevelSelect = ({ levels, connectionStatus }: ILevelSelectProps) => {
  const levelId = useId()

  return (
    <S.Wrapper>
      {levels.map((level) => {
        return (
          <Button
            disabled={connectionStatus !== 'Open'}
            key={`${levelId}-${level.level}`}
            onClick={() => level.startLevelFunction(level.level.toString())}
          >{`Start Level ${level.level}`}</Button>
        )
      })}
    </S.Wrapper>
  )
}

export default LevelSelect
