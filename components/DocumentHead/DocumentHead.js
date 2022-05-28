import Head from "next/head";

function DocumentHead(props) {
  return (
    <Head>
      <title>{props.title || `JESSE REAL LIVES`}</title>
      <meta
        name="description"
        content={props.metaDescription || `description`}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default DocumentHead;
