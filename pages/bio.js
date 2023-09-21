import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Bio.module.css";
import Text from "../components/Text";
import Heading2 from "../components/Heading2";
import Heading3 from "../components/Heading3";
import Carousel, { CarouselImage } from "../components/Carousel";
import Hero from "../components/Hero";
import heroImg from "../images/hero-bio.jpg";
import SvgFlagMauritius from "../images/flag-mauritius.svg";
import SvgFlagLebanon from "../images/flag-lebanon.svg";
import Seperator from "../components/Seperator/Seperator";
import Main from "../components/Main";
import BioSvg from "../images/bio.svg";
import Pagination from "../components/Pagination";
import bioTash1 from "../images/bio-tash1.webp";
import bioTash2 from "../images/bio-tash2.webp";
import bioTash3 from "../images/bio-tash3.webp";
import bioTash4 from "../images/bio-tash4.webp";
import bioTash5 from "../images/bio-tash5.webp";
import bioTash6 from "../images/bio-tash6.webp";
import bioCuba1 from "../images/bio-cuba1.webp";
import bioCuba2 from "../images/bio-cuba2.webp";
import bioCuba3 from "../images/bio-cuba3.webp";
import bioDrumTek from "../images/bio-drumtek.webp";
import bioPerspective1 from "../images/bio-perspective1.webp";
import bioPerspective2 from "../images/bio-perspective2.webp";
import bioPerspective3 from "../images/bio-perspective3.webp";
import bioPerspective4 from "../images/bio-perspective4.webp";
import bioPerspective5 from "../images/bio-perspective5.webp";
import bioPerspective6 from "../images/bio-perspective6.webp";
import bioPerspective7 from "../images/bio-perspective7.webp";
import bioPerspective8 from "../images/bio-perspective8.webp";
import bioPerspective9 from "../images/bio-perspective9.webp";
import bioEpic1 from "../images/bio-epic1.webp";
import bioEpic2 from "../images/bio-epic2.webp";
import bioEpic3 from "../images/bio-epic3.webp";
import bioEpic4 from "../images/bio-epic4.webp";
import bioEpic5 from "../images/bio-epic5.webp";
import bioEpic6 from "../images/bio-epic6.webp";
import bioEpic7 from "../images/bio-epic7.webp";
import bioFinal from "../images/bio-final.webp";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>BIO - JESSE REO</title>
        <meta name="description" content="Biography for Jesse Reo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero title="bIO" titleImage={<BioSvg />} backgroundImage={heroImg} />
      <Main fullWidth>
        <div className={styles.intro}>
          <Heading2 style={{ textAlign: "center" }}>JESSE REO</Heading2>
          <Heading3 style={{ textAlign: "center" }}>
            DRUMMER | DJ | ROOTS MUSICIAN
          </Heading3>
          <Text style={{ textAlign: "center" }}>Naarm/Melbourne</Text>

          <div className={styles.introFlags}>
            <SvgFlagMauritius />
            <SvgFlagLebanon />
          </div>

          <p className={styles.introTextBody}>
            JESSE &apos;REO&apos; REHAUT AKA (FUNK), the half Mauritian, half
            Lebanese Drummer, DJ and Roots musician from Naarm/Melbourne, has
            been dedicated to creating rhythms from the moment he received his
            first drum kit from his father at age fourteen.
          </p>
        </div>

        <Seperator />
        <Spacer />

        <section className={styles.section1}>
          <a id="epic" />
          <div className={styles.section1item1}>
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
              Jackson/Prince/Usher/The Time), recording artist Macy Gray and
              Scott Storch (The Roots/Dr. Dre/ 50 Cent/Beyonce/Nas) and
              supported legendary artists such as{" "}
              <strong>
                Sublime, Ska and Funk pioneers, Fishbone and eight-piece Gulf
                Coast Soul band, The Suffers.
              </strong>
              <br />
              <br />
              With a career built on hard work, passion, and natural-born
              talent, it is no surprise that Jesse has performed sold-out shows
              around the world, playing at some of the most respected venues
              (The Rock &amp;n&amp; Roll Hall of Fame/Super Bowl LII) and{" "}
              <strong>
                signing with major labels (Epic Records/Perspective Records)
              </strong>
              . Jesse is currently performing at arena show level, with
              in-demand Australian acts Tash Sultana and Adrian Eagle, recently
              playing on MTV Unplugged and Fender Sessions.
            </Text>

            <Spacer />
          </div>
          <div className={styles.section1item2}>
            <Carousel
              cycle
              prevNextButtons
              pagination
              data={[
                <CarouselImage
                  key="perspective1"
                  src={bioPerspective1.src}
                  alt="Perspective records"
                />,
                <CarouselImage
                  key="perspective2"
                  src={bioPerspective2.src}
                  alt="Perspective records"
                />,
                <CarouselImage
                  key="perspective3"
                  src={bioPerspective3.src}
                  alt="Perspective records"
                />,
                <CarouselImage
                  key="perspective4"
                  src={bioPerspective4.src}
                  alt="Perspective records"
                />,
                <CarouselImage
                  key="perspective5"
                  src={bioPerspective5.src}
                  alt="Perspective records"
                />,
                <CarouselImage
                  key="perspective6"
                  src={bioPerspective6.src}
                  alt="Perspective records"
                />,
                <CarouselImage
                  key="perspective7"
                  src={bioPerspective7.src}
                  alt="Perspective records"
                />,
                <CarouselImage
                  key="perspective8"
                  src={bioPerspective8.src}
                  alt="Perspective records"
                />,
                <CarouselImage
                  key="perspective9"
                  src={bioPerspective9.src}
                  alt="Perspective records"
                />,
              ]}
            />
          </div>
        </section>

        <Spacer />

        <Callout style={{ maxWidth: "613px" }}>
          Jesse is currently performing at arena show level
        </Callout>

        <Spacer />

        <section className={styles.section2}>
          <Carousel
            cycle
            prevNextButtons
            pagination
            aspectRatio="16/9"
            data={[
              <CarouselImage
                key="epic1"
                src={bioEpic1.src}
                alt="Epic records"
              />,
              <CarouselImage
                key="dpic2"
                src={bioEpic2.src}
                alt="Epic records"
              />,
              <CarouselImage
                key="epic3"
                src={bioEpic3.src}
                alt="Epic records"
              />,
              <CarouselImage
                key="epic4"
                src={bioEpic4.src}
                alt="Epic records"
              />,
              <CarouselImage
                key="epic5"
                src={bioEpic5.src}
                alt="Epic records"
              />,
              <CarouselImage
                key="epic6"
                src={bioEpic6.src}
                alt="Epic records"
              />,
              <CarouselImage
                key="epic7"
                src={bioEpic7.src}
                alt="Epic records"
              />,
            ]}
          />
        </section>

        <Spacer />

        <section className={styles.section3}>
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
        </section>

        <Spacer />

        <Callout style={{ maxWidth: "834px" }}>
          This collaboration was a significant experience in Jesse&apos;s music
          career.
        </Callout>

        <Spacer />

        <section className={styles.section4}>
          <a id="perspective" />
          <div className={styles.section4item1}>
            <Text>
              Jakubi—A collective of Melbourne musicians—was formed in 2012.
              During this time, Jesse worked in cafes during the day and ran
              events and DJed across Melbourne at night. He held residencies in
              clubs and was heavily involved in Melbourne&apos;s live music
              scene.
              <br />
              <br />
              The band quickly built a loyal following, releasing their first
              single, &apos;Can&apos;t Afford It&apos;, in 2013 and soon after
              self funding their first US tour. Within no time, they were{" "}
              <strong>
                signing major record label deals, selling out 300-500 cap rooms
                from New York City to Los Angeles
              </strong>{" "}
              and everywhere in-between, while sharing the stage with their
              idols and other recognised music acts.
              <br />
              <br />
              Notably, the band spent six months working intensely with Jimmy
              Jam & Terry Lewis, spending 5-6 days a week in the studio, working
              one-on-one, jamming together into the early hours of the morning,
              writing songs and eating every meal together. This collaboration
              was a significant experience in Jesse&apos;s music career.
            </Text>

            <Spacer />
          </div>
          <div className={styles.section4item2}>
            <Carousel
              cycle
              prevNextButtons
              pagination
              data={[
                <CarouselImage key="bioCuba1" src={bioCuba1.src} alt="cuba" />,
                <CarouselImage key="bioCuba2" src={bioCuba2.src} alt="cuba" />,
                <CarouselImage key="bioCuba3" src={bioCuba3.src} alt="cuba" />,
                <CarouselImage
                  key="bioDrumtek"
                  src={bioDrumTek.src}
                  alt="cuba"
                />,
              ]}
            />
          </div>
        </section>

        <Spacer />

        <section className={styles.section5}>
          <a id="cuba" />
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
        </section>

        <Spacer />

        <section className={styles.section6}>
          <Carousel
            cycle
            prevNextButtons
            pagination
            aspectRatio="16/9"
            data={[
              <CarouselImage
                key="bioTash1"
                src={bioTash1.src}
                alt="tash sultana tour"
              />,
              <CarouselImage
                key="bioTash2"
                src={bioTash2.src}
                alt="tash sultana tour"
              />,
              <CarouselImage
                key="bioTash3"
                src={bioTash3.src}
                alt="tash sultana tour"
              />,
              <CarouselImage
                key="bioTash4"
                src={bioTash4.src}
                alt="tash sultana tour"
              />,
              <CarouselImage
                key="bioTash5"
                src={bioTash5.src}
                alt="tash sultana tour"
              />,
              <CarouselImage
                key="bioTash6"
                src={bioTash6.src}
                alt="tash sultana tour"
              />,
            ]}
          />
        </section>

        <Spacer />

        <section className={styles.section7}>
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
        </section>

        <Spacer />

        <Callout style={{ maxWidth: "917px" }}>
          Declaring that&apos;s all you need to make your dreams come true while
          advocating that <br /> &apos;THE WORLD NEEDS MORE FUNK.&apos;
        </Callout>

        <Spacer />

        <section className={styles.section8}>
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
        </section>

        <Spacer />
      </Main>

      <section className={styles.section9}>
        <Image
          src={bioFinal}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="Jesse laughing"
        />

        <Pagination id="bio" className={styles.pagination} />
      </section>

      <Footer />
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
