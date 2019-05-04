import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { Layout, Listing, Wrapper, Title } from "../components";
import website from "../../config/website";

const Hero = styled.header`
  background-color: ${props => props.theme.colors.greyLight};
  display: flex;
  align-items: center;
`;

const HeroInner = styled(Wrapper)`
  padding-top: 13rem;
  padding-bottom: 13rem;
  h1 {
    margin-bottom: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 6rem;
    padding-bottom: 6rem;
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

const Social = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  font-family: "Source Sans Pro", -apple-system, "BlinkMacSystemFont",
    "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  li {
    display: inline;
    &:not([data-name="social-entry-0"]) {
      margin-left: 2.5rem;
      @media (max-width: ${props => props.theme.breakpoints.s}) {
        margin-left: 1.75rem;
      }
    }
    a {
      font-style: normal;
      color: ${props => props.theme.colors.greyDark};
      font-size: 1.333rem;
      font-weight: 600;
      &:hover,
      &:focus {
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
      }
      @media (max-width: ${props => props.theme.breakpoints.s}) {
        font-size: 1.2rem;
      }
    }
  }
`;

class About extends Component {
  render() {
    const {
      data: { page, social }
    } = this.props;
    return (
      <Layout>
        <Hero>
          <HeroInner>
            <h1>{page.data.title.text}</h1>
            <HeroText
              dangerouslySetInnerHTML={{ __html: page.data.body.html }}
            />
            <Social>
              {social.edges.map((s, index) => (
                <li
                  data-name={`social-entry-${index}`}
                  key={s.node.primary.label.text}
                >
                  <a href={s.node.primary.link.url}>
                    {s.node.primary.label.text}
                  </a>
                </li>
              ))}
            </Social>
          </HeroInner>
        </Hero>
      </Layout>
    );
  }
}

export default About;

About.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired
  }).isRequired
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
  }
`;
