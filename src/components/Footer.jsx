import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  max-width: ${props => props.theme.maxWidth};
  margin: 6rem auto 0 auto;
  padding: 0 0 2rem 0;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding: 0 2rem 1rem 2rem;
  }
  color: ${props => props.theme.colors.grey};
`;

class Footer extends Component {
  render() {
    const { children } = this.props;
    return <StyledFooter>{children}</StyledFooter>;
  }
}

export default Footer;

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};
