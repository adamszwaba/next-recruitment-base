import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Recruitment Next App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {session ? (
        <div> Logged in</div>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </>
  );
};

export default Home;
