import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: RGBA(0, 63, 80, 0.47);
  position: absolute;
  top: 0;
`

export const VerifyWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBg};
  `}
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  justify-content: space-between;
`

export const WrapperText = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.mainBg};
  `}
`
