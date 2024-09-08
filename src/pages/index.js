import React from 'react';
import PropTypes from 'prop-types';
import {styled} from 'styled-components';
// import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';
import { Layout } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
//   <main style={pageStyles}>
//   <title>Home Page</title>
//   <h1>Hello Rohit</h1>
// </main>
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      Hello World
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Jobs /> */}
      {/* <Featured /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

export default IndexPage;
