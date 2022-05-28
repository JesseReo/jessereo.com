import DocumentHead from "../components/DocumentHead";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <>
      <DocumentHead
        title="Blog - JESSE REAL LiVES"
        metaDescription="Blog and interesting articles written by Jesse Real for up and coming drummers"
      />
      <Navigation />
      <main>
        <h1>Blog</h1>
      </main>
    </>
  );
}
