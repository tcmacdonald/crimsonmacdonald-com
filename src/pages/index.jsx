import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Layout, Listing, Wrapper, Title } from '../components';
import website from '../../config/website';

const Hero = styled.header`
  background-color: ${props => props.theme.colors.greyLight};
  display: flex;
  align-items: flex-start;
`;

const HeroText = styled.div`
  font-size: 1.7rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1.4rem;
    margin-bottom: 6rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.25rem;
  }
`;

const HeroWrapper = styled(Wrapper)`
  padding-top: 5rem;
  padding-bottom: 7rem;
`;

const ImageWrapper = styled.div`
  width: 180px;
  height: 260px;
  border: solid 0.5rem #fff;
  overflow: hidden;
`;

const Left = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    margin-top: 2rem;
    margin-right: 2rem;
  }
  @media (min-width: ${props => props.theme.breakpoints.min.l}) {
    float: left;
    width: 250px;
  }
`;

const Right = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.min.l}) {
    float: left;
    width: 750px;
  }
`;

const IndexWrapper = Wrapper.withComponent('main');

class Index extends Component {
  render() {
    const {
      data: { thumbnail, homepage, posts },
    } = this.props;
    return (
      <Layout>
        <Hero>
          <HeroWrapper>
            <Left>
              <ImageWrapper>
                <Img fixed={thumbnail.childImageSharp.fixed} className="tn" />
              </ImageWrapper>
            </Left>
            <Right>
              <h1>{homepage.data.title.text}</h1>
              <HeroText
                dangerouslySetInnerHTML={{ __html: homepage.data.content.html }}
              />
            </Right>
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
    thumbnail: file(relativePath: { eq: "crimson.jpg" }) {
      childImageSharp {
        fixed(width: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
