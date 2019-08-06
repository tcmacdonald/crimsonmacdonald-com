import React, { Component } from 'react';
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

const FormWrapper = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    margin-top: -7em;
  }
`;

class ContactPage extends Component {
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
        <FormWrapper>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScZEkWFpJlEmTTqfF6tTIHhfQW_cfOwxbCcsEKhEgIYhwxjpA/viewform?embedded=true"
            width="100%"
            height="1015"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </FormWrapper>
      </Layout>
    );
  }
}

export default ContactPage;

export const pageQuery = graphql`
  query ContactQuery {
    page: prismicContactPage {
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
