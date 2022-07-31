import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  width: 100vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`

export const Typography = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.lightBg};
    margin-top: ${theme.spacings.small};
    font-weight: 300;
  `}
`
