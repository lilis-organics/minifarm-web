import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <button style={{ fontSize: 20 }}>About Page</button>
    </Link>
    <p>Happy coding with serverless and nextjs!</p>
  </div>
);

export default Index;
