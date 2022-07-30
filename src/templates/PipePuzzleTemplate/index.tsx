import { CreateMapProvider } from '../../contexts/context'
import * as S from './styles'

const PipePuzzleTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <CreateMapProvider>
      <S.Wrapper>{children}</S.Wrapper>
    </CreateMapProvider>
  )
}

export default PipePuzzleTemplate
