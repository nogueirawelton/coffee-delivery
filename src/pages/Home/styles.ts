import styled from 'styled-components';

export const HeroContainer = styled.section`
  padding-block: 3rem;
  background: url(./src/assets/hero-bg.webp);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;

  @media (min-width: 768px) {
    padding-block: 4rem;
  }

  & > div {
    max-width: 1600px;
    margin-inline: auto;
    justify-content: space-between;
    padding-inline: 1.5rem;
    display: flex;
    gap: 2rem;

    @media (min-width: 550px) {
      padding-inline: 5rem;
    }

    @media (min-width: 1024px) {
      padding-inline: 10rem;
    }

    & > div:first-child {
      max-width: 540px;
    }

    & > div:last-child {
      display: none;
      min-width: 375px;

      @media (min-width: 1024px) {
        display: block;
      }
    }

    h1 {
      font-weight: 800;
      font-size: 2rem;
      line-height: 1.2;
      color: ${(props) => props.theme['gray-900']};

      @media (min-width: 550px) {
        font-size: 2.5rem;
      }

      @media (min-width: 768px) {
        font-size: 2.75rem;
      }
    }

    p {
      margin-top: 1.5rem;
      font-size: 1.125rem;
      color: ${(props) => props.theme['gray-800']};
    }
  }
`;

export const Advantages = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 4rem;
  gap: 1.5rem 2rem;

  @media (min-width: 425px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CoffeesContainer = styled.section`
  max-width: 1600px;
  margin-inline: auto;
  padding-inline: 1.5rem;

  @media (min-width: 550px) {
    padding-inline: 5rem;
  }

  @media (min-width: 1024px) {
    padding-inline: 10rem;
  }

  h2 {
    font-size: 2rem;
  }

  & > div {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
    margin-top: 4rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1080px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1440px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
