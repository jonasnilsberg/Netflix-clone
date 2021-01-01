import styled from "styled-components/macro";

export const Container = styled.div`
  color: white;
  width: 100%;
`;
export const Inner = styled.div`
  width: 85%;
  max-width: 815px;
  margin: auto;
`;
export const Frame = styled.div``;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 75px;
  font-size: 3.125rem;
`;
export const Item = styled.div`
  margin: 10px 0px;
`;
export const Header = styled.h1`
  display: flex;
  justify-content: space-between;
  user-select: none;
  font-size: 1.625rem;
  font-weight: 400;
  background: #303030;
  padding: 20px;
  margin-bottom: 1px;
  cursor: pointer;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const Body = styled.div`
  background: #303030;
  padding: 20px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 1.625rem;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
