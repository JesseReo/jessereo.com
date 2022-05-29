import Head from "next/head";
import styles from "../styles/Dj.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Text from "../components/Text";
import EmailLink from "../components/EmailLink";

export default function Dj() {
  return (
    <>
      <Head>
        <title>DJ - JESSE REAL</title>
        <meta
          name="description"
          content="DJ mixes, music and information for Jesse Real"
        />
      </Head>
      <Hero title="DJ" backgroundImage="url(/loan-7AIDE8PrvA0-unsplash.jpg)" />
      <Main>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          hendrerit, diam in suscipit pulvinar, felis tortor viverra orci, vitae
          tincidunt augue velit eu lorem. Aliquam placerat cursus ante ac
          euismod. Mauris quam turpis, facilisis non odio blandit, scelerisque
          cursus justo. Sed eu ornare nunc, sed placerat dolor. Fusce congue
          ipsum in sagittis euismod. Nunc nisi tortor, volutpat in vehicula ut,
          varius eget ex. Donec id est massa. Quisque id diam condimentum justo
          faucibus sagittis nec id justo. Duis efficitur libero sed dui
          ultricies blandit. Mauris accumsan nisi orci, quis auctor tellus
          eleifend quis. Donec sodales tincidunt aliquet.
        </Text>
        <div className={styles.djMixes}>
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1269291343&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
        </div>
        <Text>
          To make a booking email <EmailLink />
        </Text>
      </Main>
    </>
  );
}
