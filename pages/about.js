import Layout from '../components/layout';
import PropTypes from 'prop-types';

const About = props => (
  <Layout>
    <p>Welcome to about page! ver. {props.version}</p>
  </Layout>
);

About.getInitialProps = async () => {
  return {
    version: '0.1.3'
  };
};

About.propTypes = {
  version: PropTypes.string
};

export default About;
