import styled, { css } from 'styled-components'

export const LevelSelectWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    background-color: ${theme.colors.black};
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 10px;
  `}
`

export const MapWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    background-color: ${theme.colors.darkGray};
    padding: 20px;
    border-radius: 12px;
    margin: 40px;
    max-width: 90%;
    overflow: scroll;
  `}
`
