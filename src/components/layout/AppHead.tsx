import Head from "next/head";

export function AppHead() {
  return (
    <Head>
      <title>Feedback App</title>
      <meta name="description" content="Feedback App" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
