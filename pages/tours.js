import DocumentHead from "../components/DocumentHead";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <>
      <DocumentHead
        title="Toours - JESSE REAL LiVES"
        metaDescription="Tour Schedule for Jesse Real"
      />
      <Navigation />
      <main>
        <h1>Tours</h1>
      </main>
    </>
  );
}
