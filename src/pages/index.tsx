import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import '@fontsource/oxygen/400.css';
import '@fontsource/oxygen/300.css';
import 'normalize.css';
import { StaticImage } from 'gatsby-plugin-image';

const Wrapper = styled(`div`)`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
    font-family: 'Oxygen', sans-serif;
    font-size: 16px;
  }
`;

const NavBar = styled(`nav`)`
  position: absolute;
  display: flex;
  padding: 3rem 10rem;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled(`h2`)`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.25px;
`;

const Button = styled(`a`)`
  background-color: hsl(16, 44%, 51%);
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

const Container = styled(`div`)`
  height: 100vh;
`;

const Title = styled(`h1`)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  font-size: 6rem;
  font-weight: 300;
  letter-spacing: -1.5px;
`;

const Content = styled(`div`)`
  width: 100%;
  background: hsl(180, 11%, 18%);
  min-height: 100vh;
  z-index: 2;
`;

const ContentImages = styled(`div`)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 60vh;
  text-align: center;
`;

const ContentHeader = styled(`h5`)`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0px;
`;

const ContentSubheader = styled(`h6`)`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.15px;
`;

const Text = styled(`p`)`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding: 2rem 20rem;
`;

const Home: FC<PageProps> = () => (
  <Wrapper>
    <NavBar>
      <Logo>parallax-bay</Logo>
      <Button>Sign up</Button>
    </NavBar>
    <Container>
      <Title>Guacamole.</Title>
      <StaticImage
        src="../images/background.png"
        alt="Background"
        css={css`
          position: absolute;
          width: 100%;
          height: 100vh;
          object-fit: cover;
          z-index: -2;
        `}
      />
      <StaticImage
        src="../images/subject.png"
        alt="Background"
        css={css`
          position: absolute;
          width: 100%;
          height: 100vh;
          object-fit: cover;
          z-index: -1;
        `}
      />
    </Container>
    <Content>
      <ContentImages>
        <div>
          <StaticImage
            src="../images/one.jpg"
            alt="one"
            css={css`
              width: 50%;
            `}
          />
          <ContentHeader>Zadar</ContentHeader>
          <ContentSubheader>Lorem ipsum</ContentSubheader>
        </div>
        <div>
          <StaticImage
            src="../images/two.jpg"
            alt="two"
            css={css`
              width: 50%;
            `}
          />
          <ContentHeader>Murter</ContentHeader>
          <ContentSubheader>Lorem ipsum</ContentSubheader>
        </div>
      </ContentImages>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint corrupti
        mollitia possimus eius odio dolores labore inventore iure tempora
        voluptatem eveniet, amet aperiam unde voluptates, molestiae repellat
        fuga quibusdam voluptate minus earum. Facere fuga earum delectus,
        asperiores aut eligendi doloremque.
      </Text>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
        incidunt officia, a quidem culpa repellendus alias quo iure,
        necessitatibus ad magni recusandae fuga. Minus, assumenda fugiat!
        Officia quis quisquam temporibus doloribus sequi neque itaque officiis
        perspiciatis, tempora harum dolorem tempore!
      </Text>
    </Content>
  </Wrapper>
);

export default Home;
