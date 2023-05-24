import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Bio.module.css";
import Main from "../components/Main";
import Hero from "../components/Hero";
import Heading2 from "../components/Heading2";
import Heading3 from "../components/Heading3";
import Text from "../components/Text";
import Stack from "../components/Stack";
import heroImg from "../images/hero-bio.jpg";
import bioIntro from "../images/bio-intro.png";
import BigLink from "../components/BigLink";
import BioSvg from "../images/bio.svg";
import VideoSvg from "../images/videos.svg";
import Carousel, { CarouselImage } from "../components/Carousel";
import bioTash1 from "../images/bio-tash1.jpg";
import bioTash2 from "../images/bio-tash2.jpg";
import bioTash3 from "../images/bio-tash3.jpg";
import bioTash4 from "../images/bio-tash4.jpg";
import bioTash5 from "../images/bio-tash5.jpg";
import bioTash6 from "../images/bio-tash6.jpg";
import bioCuba1 from "../images/bio-cuba1.jpg";
import bioCuba2 from "../images/bio-cuba2.jpg";
import bioCuba3 from "../images/bio-cuba3.jpg";
import bioCuba4 from "../images/bio-cuba4.jpg";
import bioCuba5 from "../images/bio-cuba5.jpg";
import bioCuba6 from "../images/bio-cuba6.jpg";
import bioPerspective1 from "../images/bio-perspective1.jpg";
import bioPerspective2 from "../images/bio-perspective2.jpg";
import bioPerspective3 from "../images/bio-perspective3.jpg";
import bioPerspective4 from "../images/bio-perspective4.jpg";
import bioPerspective5 from "../images/bio-perspective5.jpg";
import bioPerspective6 from "../images/bio-perspective6.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>BIO - JESSE REO</title>
        <meta name="description" content="Biography for Jesse Reo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero title="bIO" titleImage={<BioSvg />} backgroundImage={heroImg} />
      <Main>
        <Stack>
          <Heading2 style={{ textAlign: "center" }}>JESSE REO</Heading2>
          <Heading3 style={{ textAlign: "center" }}>
            DRUMMER | DJ | ROOTS MUSICIAN
          </Heading3>
          <Text style={{ textAlign: "center" }}>Naarm/Melbourne</Text>
          <br />
          <div className={styles.introImage}>
            <Image src={bioIntro} alt="" />

            <br />
            <br />

            <Text style={{ textAlign: "center" }}>
              JESSE &apos;REO&apos; REHAUT AKA (FUNK), the half Mauritian, half
              Lebanese Drummer, DJ and Roots musician from Naarm/Melbourne, has
              been dedicated to creating rhythms from the moment he received his
              first drum kit from his father at age fourteen.
            </Text>
          </div>

          <Spacer />

          <Text>
            Recognised as one-fifth of the Australian Funk band{" "}
            <strong>
              Jakubi—who was notably scouted in 2015 by American record
              executive L.A. Reid
            </strong>{" "}
            (Epic Records CEO/TLC/Outkast/Usher)—Jesse has already made a
            distinct mark on the global music scene.
            <br />
            <br />
            He has worked closely with idols
            <strong>Jimmy Jam & Terry Lewis</strong> (Michael Jackson/Janet
            Jackson/Prince/Usher/The Time), recording artist Macy Gray and Scott
            Storch (The Roots/Dr. Dre/ 50 Cent/Beyonce/Nas) and supported
            legendary artists such as{" "}
            <strong>
              Sublime, Ska and Funk pioneers, Fishbone and eight-piece Gulf
              Coast Soul band, The Suffers.
            </strong>
            <br />
            <br />
            With a career built on hard work, passion, and natural-born talent,
            it is no surprise that Jesse has performed sold-out shows around the
            world, playing at some of the most respected venues (The Rock
            &amp;n&amp; Roll Hall of Fame/Super Bowl LII) and{" "}
            <strong>
              signing with major labels (Epic Records/Perspective Records)
            </strong>
            . Jesse is currently performing at arena show level, with in-demand
            Australian acts Tash Sultana and Adrian Eagle, recently playing on
            MTV Unplugged and Fender Sessions.
          </Text>

          <Spacer />

          <Carousel
            cycle
            prevNextButtons
            pagination
            data={[
              <CarouselImage key="perspective1" src={bioPerspective1.src} />,
              <CarouselImage key="perspective2" src={bioPerspective2.src} />,
              <CarouselImage key="perspective3" src={bioPerspective3.src} />,
              <CarouselImage key="perspective4" src={bioPerspective4.src} />,
              <CarouselImage key="perspective5" src={bioPerspective5.src} />,
              <CarouselImage key="perspective6" src={bioPerspective6.src} />,
            ]}
          />

          <Spacer />

          <Callout style={{ maxWidth: "613px" }}>
            Jesse is currently performing at arena show level
          </Callout>

          <Spacer />

          <Carousel
            cycle
            prevNextButtons
            pagination
            data={[
              <CarouselImage key="perspective1" src={bioPerspective1.src} />,
              <CarouselImage key="perspective2" src={bioPerspective2.src} />,
              <CarouselImage key="perspective3" src={bioPerspective3.src} />,
              <CarouselImage key="perspective4" src={bioPerspective4.src} />,
              <CarouselImage key="perspective5" src={bioPerspective5.src} />,
              <CarouselImage key="perspective6" src={bioPerspective6.src} />,
            ]}
          />

          <Spacer />

          <Text>
            Rehaut&apos;s parents knew from a young age that music would be his
            passion for life. Growing up in a family of singers and musicians,
            his unwavering love for drums was observed early on. His father was
            also a drummer, his mother a singer and grandmother a performer in
            an eight-piece band consisting of Lebanese and Palestinian members.
            <br />
            <br />
            Jesse&apos;s mother recalls her son working seven days a week just
            to afford to pay for cymbals. He received his first drum lesson at
            the age of seventeen, when he began private sessions with The Cat
            Empire&apos;s Will Hull-Brown.
            <br />
            <br />
            This period was a turning point for Jesse, being introduced to the
            genres of Latin, Funk, Reggae, Soul, Roots & Jazz and taking his
            musical talents to the next level.
          </Text>

          <Spacer />

          <Callout style={{ maxWidth: "834px" }}>
            This collaboration was a significant experience in Jesse&apos;s
            music career.
          </Callout>

          <Spacer />

          <Text>
            Jakubi—A collective of Melbourne musicians—was formed in 2012.
            During this time, Jesse worked in cafes during the day and ran
            events and DJed across Melbourne at night. He held residencies in
            clubs and was heavily involved in Melbourne&apos;s live music scene.
            <br />
            <br />
            The band quickly built a loyal following, releasing their first
            single, &apos;Can&apos;t Afford It&apos;, in 2013 and soon after
            self funding their first US tour. Within no time, they were{" "}
            <strong>
              signing major record label deals, selling out 300-500 cap rooms
              from New York City to Los Angeles
            </strong>{" "}
            and everywhere in-between, while sharing the stage with their idols
            and other recognised music acts.
            <br />
            <br />
            Notably, the band spent six months working intensely with Jimmy Jam
            & Terry Lewis, spending 5-6 days a week in the studio, working
            one-on-one, jamming together into the early hours of the morning,
            writing songs and eating every meal together. This collaboration was
            a significant experience in Jesse&apos;s music career.
          </Text>

          <Spacer />

          <Carousel
            cycle
            prevNextButtons
            pagination
            data={[
              <CarouselImage key="bioCuba1" src={bioCuba1.src} />,
              <CarouselImage key="bioCuba2" src={bioCuba2.src} />,
              <CarouselImage key="bioCuba3" src={bioCuba3.src} />,
              <CarouselImage key="bioCuba4" src={bioCuba4.src} />,
              <CarouselImage key="bioCuba5" src={bioCuba5.src} />,
              <CarouselImage key="bioCuba6" src={bioCuba6.src} />,
            ]}
          />

          <Spacer />

          <Text>
            In 2018 Jesse received an advance from the label, allowing him to
            seek <strong>private lessons with Robi Parolin </strong> while
            studying music at Drumtek, Northcote. Only learning to read music
            for the first time,{" "}
            <strong>
              he performed his recital in front of highly respected drum set
              educator Frank Corniola.
            </strong>{" "}
            He memorably recalls Frank telling him, &apos;It takes a long time
            to sound like yourself,&apos; igniting his own pursuit to further
            craft his sound.
            <br />
            <br />
            The same year,{" "}
            <strong>
              he took one-on-one lessons with Cuban multi instrumentalist Redy
              Cobas
            </strong>
            , learning Bembe / Merengue / Rumba / Son / Songo rhythms while
            jamming together in a hot, sweaty room in Havana. Cobas would set up
            one rhythm, and they would jam the whole day, repeating these
            sessions every day throughout Jesse&apos;s month-long stay. While
            learning the Afro Cuban and Latin rhythms, having not been able to
            communicate verbally, they connected through the language of these
            grooves.
          </Text>

          <Spacer />

          <Carousel
            cycle
            prevNextButtons
            pagination
            data={[
              <CarouselImage key="bioTash1" src={bioTash1.src} />,
              <CarouselImage key="bioTash2" src={bioTash2.src} />,
              <CarouselImage key="bioTash3" src={bioTash3.src} />,
              <CarouselImage key="bioTash4" src={bioTash4.src} />,
              <CarouselImage key="bioTash5" src={bioTash5.src} />,
              <CarouselImage key="bioTash6" src={bioTash6.src} />,
            ]}
          />

          <Spacer />

          <Text>
            <strong>
              Jesse continues to bring his soulful energy to venues worldwide
              with artist Tash Sultana
            </strong>{" "}
            — Recently returning from her tour which is currently playing across
            <strong>
              13 countries, with 49 upcoming shows, across the US, Canada,
              Europe, New Zealand, and Australia.
            </strong>
            <br />
            <br />
            When he is not on the road, he intends to continue DJing, creating,
            crafting and merging his drumming, looping and DJ sensibilities
            while expanding his knowledge of the traditional music styles of
            Mauritius, Sega and Seggae—where he plans to spend a month or two
            later this year.
          </Text>

          <Spacer />

          <Callout style={{ maxWidth: "917px" }}>
            Declaring that&apos;s all you need to make your dreams come true
            while advocating that <br /> &apos;THE WORLD NEEDS MORE FUNK.&apos;
          </Callout>

          <Spacer />

          <Text>
            Even with such significant accomplishments, Jesse has always
            remained humble about his journey, stating that he is just &apos;a
            very passionate and polite half Mauritian, half Lebanese kid from
            Doveton, with endless amounts of drive and determination.&apos;
            Declaring that&apos;s all you need to make your dreams come true
            while advocating that &apos;THE WORLD NEEDS MORE FUNK.&apos;
            <br />
            <br />
            Jesse&apos;s enthusiasm and loving nature are highly contagious and
            respected by all who encounter him. Soul and Funk pump through his
            veins while the laid back pure enjoyment of making music flows
            through his beats and musical talents.
          </Text>
        </Stack>
      </Main>

      <BigLink
        href="/videos"
        color="#eb1400"
        label="videos"
        labelImg={<VideoSvg alt="videos" />}
        arrow
      />
    </>
  );
}

const Callout = (props) => {
  return (
    <div className={styles.callout} style={props.style}>
      {props.children}
    </div>
  );
};

const Spacer = () => <div className={styles.spacer} />;
