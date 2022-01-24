import Head from 'next/head';
import Login from '../components/Login';

export default function Home() {
  const isAuthenticated = false;

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Dapp Chat</title>
        <link rel="icon" href="/favicon.ico" />

        <h1>Welcome to the descentralized universe</h1>
      </Head>

      <Login />
    </div>
  );
}
