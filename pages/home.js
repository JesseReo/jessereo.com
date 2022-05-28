import DocumentHead from "../components/DocumentHead";
import Navigation from "../components/Navigation/";

export default function Home() {
  return (
    <>
      <DocumentHead
        title="JESSE REAL LiVES"
        metaDescription="The home page of Jesse Real the drummer and DJ"
      />
      <Navigation />
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
}
