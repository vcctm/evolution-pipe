import * as S from './styles'

const PipePuzzleTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.Wrapper>
      <S.Typography>
        Pipe <b>Puzzle</b>
      </S.Typography>
      {children}
    </S.Wrapper>
  )
}

export default PipePuzzleTemplate
