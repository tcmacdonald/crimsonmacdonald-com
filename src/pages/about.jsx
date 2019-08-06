import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { Layout, Wrapper } from '../components';

const Hero = styled.header`
  background-color: ${props => props.theme.colors.greyLight};
  display: flex;
  align-items: center;
`;

const HeroInner = styled(Wrapper)`
  padding-top: 5rem;
  padding-bottom: 7rem;
  h1 {
    margin-bottom: 2rem;
  }
`;

const HeroText = styled.div`
  font-size: 1.7rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1.4rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.25rem;
  }
`;

class About extends Component {
  render() {
    const {
      data: { page },
    } = this.props;
    return (
      <Layout>
        <Hero>
          <HeroInner>
            <h1>{page.data.title.text}</h1>
            <HeroText
              dangerouslySetInnerHTML={{ __html: page.data.body.html }}
            />
          </HeroInner>
        </Hero>
      </Layout>
    );
  }
}

export default About;

About.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query AboutQuery {
    page: prismicAboutPage {
      data {
        title {
          text
        }
        body {
          html
        }
      }
    }
  }
`;
