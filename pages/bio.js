import Head from "next/head";
import styles from "../styles/Bio.module.css";
import Main from "../components/Main";
import Hero from "../components/Hero";
import Heading2 from "../components/Heading2";
import Text from "../components/Text";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bio - JESSE REAL</title>
        <meta name="description" content="Biography for Jesse Real" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero title="Bio" backgroundImage="/loan-7AIDE8PrvA0-unsplash.jpg" />
      <Main>
        <div className={styles.textContainer}>
          <Heading2 style={{ textAlign: "center" }}>
            JESSE 'REAL' REHAUT AKA (FUNK) <br />
            DRUMMER | DJ | ROOTS MUSICIAN
          </Heading2>
          <Text style={{ textAlign: "center" }}>Naarm/Melbourne</Text>
          <br />
          <Text>
            JESSE 'REAL' REHAUT AKA (FUNK), a half Mauritian, half Lebanese
            Drummer, DJ and Roots musician from Naarm/Melbourne, has been
            dedicated to creating rhythms from the moment he received his first
            drum kit from his father at age fourteen. Recognised as one-fifth of
            the Australian Funk band Jakubi—who was notably scouted in 2015 by
            American record executive L.A. Reid (Epic Records
            CEO/TLC/Outkast/Usher)—Jesse has already made a distinct mark on the
            global music scene. He has worked closely with idols Jimmy Jam &amp;
            Terry Lewis (Michael Jackson/Janet Jackson/Prince/Usher/The Time),
            Macy Gray (recording artist) and Scott Storch (The Roots/Dr. Dre/50
            Cent/Beyonce/Nas) and supported legendary artists such as Sublime,
            Ska and Funk pioneers, Fishbone and eight-piece Gulf Coast Soul
            band, The Suffers. With a career built on hard work, passion, and
            natural-born talent, it is no surprise that Jesse has performed
            sold-out shows around the world, playing at some of the most
            respected venues (The Rock 'n' Roll Hall of Fame/ Super Bowl LII)
            and signing with major labels (Epic Records/Perspective Records).
            Jesse is currently performing at arena show level, with in-demand
            Australian acts Tash Sultana and Adrian Eagle, notably playing on
            MTV Unplugged and Fender Sessions.
          </Text>
          <Text>
            Rehaut's parents knew from a young age that music would be his
            passion for life. Growing up in a family of singers and musicians,
            his unwavering love for drums was observed early on. His father was
            also a drummer, his mother a singer and grandmother a performer in
            an eight-piece band consisting of Lebanese and Palestinian members.
            Jesse's mother recalls her son working seven days a week just to
            afford to pay for cymbals. He received his first drum lesson at the
            age of seventeen, when he began private sessions with Cat Empire's
            Will Hull-Brown. This period was a turning point for Jesse, being
            introduced to the genres of Latin, Funk, Reggae, Soul, Roots &amp;
            Jazz and taking his musical talents to the next level.
          </Text>
          <Text>
            Jakubi—A collective of Melbourne musicians—was formed in 2012.
            During this time, Jesse worked in cafes during the day and ran
            events and DJed across Melbourne at night. He held residencies in
            clubs and was heavily involved in Melbourne's live music scene. The
            band quickly built a loyal following, releasing their first single,
            'Can't Afford It', in 2013 and soon after self- funding their first
            US tour. Within no time, they were signing major record label deals,
            selling out 300-500 cap rooms in New York City and Los Angeles, and
            sharing the stage with their idols and other recognised music acts.
            Notably, the band spent six months working intensely with Jimmy Jam
            &amp; Terry Lewis, spending 5-6 days a week in the studio, working
            one-on-one, jamming together into the early hours of the morning,
            writing songs and eating every meal together. This collaboration was
            a significant experience in Jesse's music career.
          </Text>
          <Text>
            In 2018 Jesse received an advance from the label, allowing him to
            seek private lessons with Robi Parolin while studying music at
            Drumtek, Northcote. Only learning to read music for the first time,
            he performed his recital in front of highly respected drum set
            educator Frank Corniola. He memorably recalls Frank telling him, 'It
            takes a long time to sound like yourself,' igniting his own pursuit
            to further craft his sound. The same year, he took one-on-one
            lessons with Cuban multi- instrumentalist Redy Cobas, learning Bembe
            / Merengue / Rumba / Son / Songo rhythms while jamming together in a
            hot, sweaty room in Havana. Cobas would set up one rhythm, and they
            would jam the whole day, repeating these sessions every day
            throughout Jesse's month-long stay. While learning the Afro Cuban
            and Latin rhythms, having not been able to communicate verbally,
            they connected through the language of these grooves.
          </Text>
          <Text>
            Jesse continues to bring his soulful energy to venues worldwide
            while touring with Tash Sultana and Adrian Eagle. Jesse recently
            returned from a tour with Tash, who is currently playing across 13
            countries, with 49 upcoming shows, across the US, Canada, Europe,
            New Zealand, and Australia. When he is not on the road, he intends
            to continue DJing, creating, crafting and merging his drumming,
            looping and DJ sensibilities while expanding his knowledge of the
            traditional music styles of Mauritius, Sega and Seggae—where he
            plans to spend a month or two later this year.
          </Text>
          <Text>
            Even with such significant accomplishments, Jesse has always
            remained humble about his journey, stating that he is just 'a very
            passionate and polite half Mauritian, half Lebanese kid from
            Doveton, with endless amounts of drive and determination.' Declaring
            that's all you need to make your dreams come true while advocating
            that 'the world needs more Funk.' Jesse's enthusiasm and loving
            nature are highly contagious and respected by all who encounter him.
            Soul and Funk pump through his veins while the laid back pure
            enjoyment of making music flows through his beats and musical
            talents.
          </Text>
        </div>
      </Main>
    </>
  );
}
