import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import '@fontsource/oxygen/400.css';
import { StaticImage } from 'gatsby-plugin-image';

const Wrapper = styled(`div`)`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #000;
    font-family: 'Oxygen', sans-serif;
  }
`;

const NavBar = styled(`nav`)``;

const Button = styled(`a`)``;

const Container = styled(`div`)``;

const Title = styled(`h2`)``;

const Content = styled(`div`)``;

const ContentImages = styled(`div`)``;

const Text = styled(`p`)``;

const Home: FC<PageProps> = () => (
  <Wrapper>
    <NavBar>
      <h4>parallax-bay</h4>
      <Button>Sign up</Button>
    </NavBar>
    <Container>
      <Title>Guacamole.</Title>
      <StaticImage
        src="../images/background.png"
        alt="Background"
        css={css``}
      />
      <StaticImage src="../images/subject.png" alt="Background" css={css``} />
    </Container>
    <Content>
      <ContentImages>
        <StaticImage src="../images/one.jpg" alt="one" />
        <h4>Zadar</h4>
        <h5>Lorem ipsum</h5>
      </ContentImages>
      <ContentImages>
        <StaticImage src="../images/two.jpg" alt="two" />
        <h4>Murter</h4>
        <h5>Lorem ipsum</h5>
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
