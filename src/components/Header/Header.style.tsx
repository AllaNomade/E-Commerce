import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    margin-bottom: 10px;
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1200px;
  padding: 32px 7px;
`;

export const Brand = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    padding-right: 20px;
  `}
`;

export const Cart = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    flex: 2;
    justify-content: flex-end;
  `}
`;
