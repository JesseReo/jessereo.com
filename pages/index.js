import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeHero from "../components/HomeHero";
import Main from "../components/Main";
import Heading2 from "../components/Heading2";
import Heading3 from "../components/Heading3";
import imgTash from "../images/bio-tash5.jpg";
import imgCuba from "../images/bio-cuba1.jpg";
import imgPerspective from "../images/bio-perspective9.jpg";
import imgEpic from "../images/bio-perspective7.jpg";
import Text from "../components/Text";
import Pagination from "../components/Pagination";

export default function Home() {
  return (
    <>
      <Head>
        <title>JESSE REO</title>
        <meta
          name="description"
          content="The homepage of Jesse Reo, the honest hommus adonis"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HomeHero />

      <Main fullWidth style={{ color: "#fff" }}>
        <div style={{ textAlign: "center" }}>
          <Heading2>JESSE REO</Heading2>
          <Heading3> Touring and session musician</Heading3>
        </div>

        <Spacer />

        <div className={styles.sectionContainer}>
          <Section className={styles.layout1}>
            <SectionItem className={styles.layout1__line}>
              <SectionImage className={styles.layout1__image}>
                <Image
                  src={imgTash}
                  alt="Tash tour"
                  layout="fill"
                  objectFit="cover"
                />
              </SectionImage>
            </SectionItem>
            <SectionItem>
              <SectionText className={styles.layout1__text}>
                <TextDate>2019 - current</TextDate>
                <TextHeading>Currently on tour with Tash Sultana</TextHeading>
                <TextBody>
                  Most recently Jesse has been bringing his soulful energy
                  touring worldwide with Tash Sultana. So far they have played
                  xx shows across xx different countries.
                  <br />
                  <br />
                  <Link href="/tours">
                    <a>Tour dates</a>
                  </Link>
                </TextBody>
              </SectionText>
            </SectionItem>
          </Section>

          <Spacer />

          <Section className={styles.layout2}>
            <SectionItem className={styles.layout2__line}>
              <SectionImage className={styles.layout2__image}>
                <Image
                  src={imgCuba}
                  alt="Cuba"
                  layout="fill"
                  objectFit="cover"
                />
              </SectionImage>
            </SectionItem>
            <SectionItem>
              <SectionText className={styles.layout2__text}>
                <TextDate>2018</TextDate>
                <TextHeading>Lessons with Redy Cobas</TextHeading>
                <TextBody>
                  Jesse took one-on-one lessons with Cuban multi instrumentalist
                  Redy Cobas, learning Bembe / Merengue / Rumba / Son / Songo
                  rhythms while jamming together in a hot, sweaty room in
                  Havana.
                  <br />
                  <br />
                  <Link href="/bio#cuba">
                    <a>Read more</a>
                  </Link>
                </TextBody>
              </SectionText>
            </SectionItem>
          </Section>

          <Spacer />

          <Section className={styles.layout1}>
            <SectionItem className={styles.layout1__line}>
              <SectionImage className={styles.layout1__image}>
                <Image
                  src={imgPerspective}
                  alt="Perspective"
                  layout="fill"
                  objectFit="cover"
                />
              </SectionImage>
            </SectionItem>
            <SectionItem>
              <SectionText className={styles.layout1__text}>
                <TextDate>2016 - 2018</TextDate>
                <TextHeading>
                  Perspective Records / Jakubi U.S. Tour
                </TextHeading>
                <TextBody>
                  In 2016, Jakubi Signs major recored label with Perspective
                  records.spent six months working intensely with Jimmy Jam &
                  Terry Lewis, spending 5-6 days a week in the studio, working
                  one-on-one, jamming together into the early hours of the
                  morning, writing songs and eating every meal together.
                  <br />
                  <br />
                  <Link href="/bio#perspective">
                    <a>Read more</a>
                  </Link>
                </TextBody>
              </SectionText>
            </SectionItem>
          </Section>

          <Spacer />

          <Section className={styles.layout2}>
            <SectionItem className={styles.layout2__line}>
              <SectionImage className={styles.layout2__image}>
                <Image
                  src={imgEpic}
                  alt="Epic"
                  layout="fill"
                  objectFit="cover"
                />
              </SectionImage>
            </SectionItem>
            <SectionItem>
              <SectionText className={styles.layout2__text}>
                <TextDate>2012 - 2016</TextDate>
                <TextHeading>Epic Records / Jakubi U.S. Tour</TextHeading>
                <TextBody>
                  Jesse is a founding member of Jakubi and signs with major
                  record label deal with Epic Records. Scouted by LA Reid,
                  Jakubi tours the U.S. four times selling out 300-500 cap rooms
                  from New York City to Los Angeles.In between tours, writing
                  and working with Macy Gray and Scott Storch (The Roots / Dr.
                  Dre / 50 Cent / Beyonce / Nas) and supported legendary artists
                  such as Sublime, Fishbone, The Suffers.
                  <br />
                  <br />
                  <Link href="/bio#epic">
                    <a>Read more</a>
                  </Link>
                </TextBody>
              </SectionText>
            </SectionItem>
          </Section>

          <Spacer />
          <Spacer />
          <Spacer />

          <Pagination id="home" className={styles.pagination} />
        </div>
      </Main>
    </>
  );
}

const Section = (props) => (
  <section className={`${styles.section} ${props.className ?? ""}`}>
    {props.children}
  </section>
);

const SectionItem = (props) => (
  <div className={`${styles.section__item} ${props.className ?? ""}`}>
    {props.children}
  </div>
);

const SectionText = (props) => (
  <div className={`${styles.section__text} ${props.className ?? ""}`}>
    {props.children}
  </div>
);

const SectionImage = (props) => (
  <div className={`${styles.section__image} ${props.className ?? ""}`}>
    {props.children}
  </div>
);

const TextDate = (props) => (
  <div className={styles.textDate}>{props.children}</div>
);

const TextHeading = (props) => (
  <div className={styles.textHeading}>{props.children}</div>
);

const TextBody = (props) => (
  <Text className={styles.textBody}>{props.children}</Text>
);

const Spacer = () => <div className={styles.spacer} />;
