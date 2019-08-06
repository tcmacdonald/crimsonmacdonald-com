import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { Layout, Listing, Wrapper, Title } from '../components';
import website from '../../config/website';

const Hero = styled.header`
  background-color: ${props => props.theme.colors.greyLight};
  display: flex;
  align-items: center;
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

const HeroWrapper = styled(Wrapper)`
  padding-top: 5rem;
  padding-bottom: 7rem;
`;

const IndexWrapper = Wrapper.withComponent('main');

class Index extends Component {
  render() {
    const {
      data: { homepage, posts },
    } = this.props;
    return (
      <Layout>
        <Hero>
          <HeroWrapper>
            <h1>{homepage.data.title.text}</h1>
            <HeroText
              dangerouslySetInnerHTML={{ __html: homepage.data.content.html }}
            />
          </HeroWrapper>
        </Hero>
        <IndexWrapper
          id={website.skipNavId}
          style={{ paddingTop: '1rem', paddingBottom: '2rem' }}
        >
          <Title style={{ marginTop: '4rem' }}>Recent posts</Title>
          <Listing posts={posts.edges} />
        </IndexWrapper>
      </Layout>
    );
  }
}

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
    social: allPrismicHeroLinksBodyLinkItem {
      edges {
        node {
          primary {
            label {
              text
            }
            link {
              url
            }
          }
        }
      }
    }
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            date(formatString: "DD.MM.YYYY")
            categories {
              category {
                document {
                  data {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
