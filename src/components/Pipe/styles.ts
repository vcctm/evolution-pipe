import styled, { css } from 'styled-components'

export const Char = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
  `}
  display: flex;
  font-size: 36px;
  line-height: 0px;
  margin: 0;
  font-family: monospace;
`
