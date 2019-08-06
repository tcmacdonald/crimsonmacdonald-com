import React, { Component } from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { FiHome, FiTwitter } from 'react-icons/fi';
import MomsLogo from '../assets/svgs/moms.svg';

const InlineList = styled.ul`
  background: #666;
  list-style-type: none;
  margin: 0;
  padding: 0.4em 0.65em 0;
  &:after {
    content: '';
    display: table;
    clear: both;
  }
  li {
    display: inline;
    margin-right: 1em;
  }
  a {
    color: #fff;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-style: normal;
  }
`;

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <InlineList>
          <li>
            <Link to="/">
              <FiHome />
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/categories/media">Posts</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li
            css={css`
              float: right;
            `}
          >
            <a href="https://twitter.com/crimsonian">
              <FiTwitter />
            </a>
          </li>
          {/* <li
            css={css`
              float: right;
            `}
          >
            <a href="#">
              <MomsLogo />
            </a>
          </li> */}
        </InlineList>
      </nav>
    );
  }
}
