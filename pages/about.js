import Link from 'next/link';

const About = () => (
  <div>
    <Link href="/index">
      <button style={{ fontSize: 20 }}>Home Page</button>
    </Link>
    <p>Welcome to about page</p>
  </div>
);

export default About;
