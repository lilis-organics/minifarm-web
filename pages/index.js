import Layout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

const Index = props => (
  <Layout>
    <p>Happy coding with serverless and nextjs!</p>

    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      h1,
      p,
      a {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  };
};

Index.propTypes = {
  shows: PropTypes.json
};

export default Index;
