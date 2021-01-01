import styled from "styled-components/macro";

export const Container = styled.div`
  color: white;
  background-size: cover;

  background-image: url(${(backgroundImage) =>
    backgroundImage.backgroundImage});
  position: relative;
  border-bottom: 8px solid #222;

  @media (max-width: 600px) {
    height: 500px;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  padding-top: 10px;
  justify-content: space-between;
  margin: 0 56px;
  align-items: center;

  @media (max-width: 600px) {
    margin: 0 25px;
    height: 60px;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-left: 10px;
`;

export const Link = styled.a`
  margin: 10px 0px;
  padding: 10px 25px;
  text-align: center;
  border: none;
  background-color: #e50914;
  color: white;
  height: fit-content;
  font-weight: 400;
  border-radius: 3px;
  text-decoration: none;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  max-width: 640px;
  margin: 0 auto;

  @media (max-width: 600px) {
      font-size: 28px;
  }
}
`;
export const SubTitle = styled.h3`
  text-align: center;
  font-size: 28px;    
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 18px;
}
}
`;

export const Body = styled.div`
  widht: 100%;
  max-width: 950px;
  margin: auto;
  padding: 75px 40px;

  @media (max-width: 600px) {
    padding: 30px 40px;
  }
`;
