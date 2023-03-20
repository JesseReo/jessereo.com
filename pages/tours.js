import Head from "next/head";
import styles from "../styles/Tours.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Heading2 from "../components/Heading2";
import heroImg from "../images/hero-tours.jpg";
import BigLink from "../components/BigLink";
import ToursSvg from "../images/tours.svg";
import ContactSvg from "../images/contact.svg";

export default function Tours() {
  const upcomingEvents = getUpcomingEvents(eventData);
  const pastEvents = getPastEvents(eventData);

  return (
    <>
      <Head>
        <title>TOURS - JESSE REAL</title>
        <meta name="description" content="Tour Schedule for Jesse Real" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero title="TOurs" titleImage={<ToursSvg />} backgroundImage={heroImg} />
      <Main>
        <div className={styles.heading}>
          <Heading2>UpcOmIng events</Heading2>
        </div>
        <EventList data={upcomingEvents} />

        <div className={styles.heading} style={{ marginTop: "120px" }}>
          <Heading2>Past events</Heading2>
        </div>
        <EventList data={pastEvents} />
      </Main>
      <BigLink
        href="/contact"
        color="#00ba56"
        label="contact"
        labelImg={<ContactSvg alt="contact" />}
        arrow
      />
    </>
  );
}

function getUpcomingEvents(data) {
  const today = new Date(new Date().toDateString());

  var mutated = data
    .filter(function (item) {
      const itemDate = new Date(new Date(item.date).toDateString());
      return itemDate >= today;
    })
    .sort((a, b) => {
      const dateA = new Date(new Date(a.date).toDateString());
      const dateB = new Date(new Date(b.date).toDateString());
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
      return 0;
    });

  return mutated;
}

function getPastEvents(data) {
  const today = new Date(new Date().toDateString());

  var mutated = data
    .filter(function (item) {
      const itemDate = new Date(new Date(item.date).toDateString());
      return itemDate < today;
    })
    .sort((a, b) => {
      const dateA = new Date(new Date(a.date).toDateString());
      const dateB = new Date(new Date(b.date).toDateString());
      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      return 0;
    });

  return mutated;
}

const EventList = (props) => {
  return props.data.map((item) => {
    const formattedDate = formatEventDate(item.date);
    return (
      <div key={`event-${item.date}`} className={styles.event}>
        <div className={styles.date}>{formattedDate}</div>
        <div className={styles.venue}>{item.venue}</div>
        <div className={styles.location}>
          {item.city && <>{item.city}, </>}
          {item.state && <>{item.state}, </>}
          {item.country && <>{item.country} </>}
        </div>
      </div>
    );
  });
};

function formatEventDate(date) {
  const eventDate = new Date(date);
  const day = eventDate.getUTCDate();
  const month = eventDate.toLocaleString("default", { month: "short" });
  const year = eventDate.getUTCFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
}

const eventData = [
  {
    date: "2022-06-10",
    venue: "The Chelsea at the Cosmopolitan",
    city: "Las Vegas",
    state: "NV",
    country: "USA",
  },
  {
    date: "2022-06-11",
    venue: "Sandy City Amphitheater",
    city: "Sandy",
    state: "UT",
    country: "USA",
  },
  {
    date: "2022-06-12",
    venue: "Red Rocks Amphitheatre",
    city: "Morrison",
    state: "CO",
    country: "USA",
  },
  {
    date: "2022-06-14",
    venue: "The Palace",
    city: "St. Paul",
    state: "MN",
    country: "USA",
  },
  {
    date: "2022-06-15",
    venue: "Riviera Theatre Chicago",
    city: "Chicago",
    state: "IL",
    country: "USA",
  },
  {
    date: "2022-06-17",
    venue: "Agora Theatre",
    city: "Cleveland",
    state: "OH",
    country: "USA",
  },
  {
    date: "2022-06-18",
    venue: "Promowest Pavilion @ Ovation",
    city: "Newport",
    state: "KY",
    country: "USA",
  },
  {
    date: "2022-06-19",
    venue: "Bonnaroo Music Festival",
    city: "Manchester",
    state: "TN",
    country: "USA",
  },
  {
    date: "2022-06-21",
    venue: "Bonnaroo Music Festival",
    city: "Manchester",
    state: "TN",
    country: "USA",
  },
  {
    date: "2022-06-22",
    venue: "Asbury Hall @ Babeville",
    city: "Buffalo",
    state: "NY",
    country: "USA",
  },
  {
    date: "2022-06-24",
    venue: "The Fillmore",
    city: "Philadelphia",
    state: "PA",
    country: "USA",
  },
  {
    date: "2022-06-25",
    venue: "The Anthem",
    city: "Washington",
    state: "DC",
    country: "USA",
  },
  {
    date: "2022-06-26",
    venue: "Pier 17",
    city: "New York",
    state: "NY",
    country: "USA",
  },
  {
    date: "2022-06-28",
    venue: "State Theatre",
    city: "Portland",
    state: "ME",
    country: "USA",
  },
  {
    date: "2022-06-29",
    venue: "House Of Blues",
    city: "Boston",
    state: "MA",
    country: "USA",
  },
  {
    date: "2022-06-30",
    venue: "Festival International de Jazz de Montréal",
    city: "Montreal",
    state: "QC",
    country: "Canada",
  },

  {
    date: "2022-07-02",
    venue: "Sherblues and Folk Festival",
    city: "Sherbrooke",
    state: "QC",
    country: "Canada",
  },
  {
    date: "2022-07-04",
    venue: "History",
    city: "Toronto",
    state: "ON",
    country: "Canada",
  },
  {
    date: "2022-07-05",
    venue: "History",
    city: "Toronto",
    state: "ON",
    country: "Canada",
  },
  {
    date: "2022-07-07",
    venue: "Festival d&apos;été International de Québec",
    city: "Québec",
    state: "QC",
    country: "Canada",
  },
  {
    date: "2022-07-08",
    venue: "RBC Ottawa Bluesfest",
    city: "Ottawa",
    state: "ON",
    country: "Canada",
  },
  {
    date: "2022-07-09",
    venue: "Winnipeg Folk Festival",
    city: "Winnipeg",
    state: "MB",
    country: "Canada",
  },
  {
    date: "2022-07-12",
    venue: "Edmonton Convention Centre",
    city: "Edmonton",
    state: "AB",
    country: "Canada",
  },
  {
    date: "2022-07-15",
    venue: "Royal Theatre",
    city: "Victoria",
    state: "BC",
    country: "Canada",
  },
  {
    date: "2022-07-16",
    venue: "Orpheum Theatre",
    city: "Vancouver",
    state: "BC",
    country: "Canada",
  },
  {
    date: "2022-07-17",
    venue: "McMenamins Grand Lodge",
    city: "Forest Grove",
    state: "OR",
    country: "USA",
  },
  {
    date: "2022-07-19",
    venue: "Paramount Theatre",
    city: "Seattle",
    state: "WA",
    country: "USA",
  },
  {
    date: "2022-07-21",
    venue: "Fox Theater",
    city: "Oakland",
    state: "CA",
    country: "USA",
  },
  {
    date: "2022-07-22",
    venue: "Fox Theater",
    city: "Oakland",
    state: "CA",
    country: "USA",
  },
  {
    date: "2022-07-23",
    venue: "Hollywood Palladium",
    city: "Los Angeles",
    state: "CA",
    country: "USA",
  },
  {
    date: "2022-07-24",
    venue: "Fox Theater",
    city: "Pomona",
    state: "CA",
    country: "USA",
  },

  {
    date: "2022-08-19",
    venue: "Dockville",
    city: "Hamburg",
    country: "Germany",
  },
  {
    date: "2022-08-21",
    venue: "Lowlands",
    city: "Biddinghuizen",
    country: "Netherlands",
  },
  {
    date: "2022-08-22",
    venue: "Openluchttheater Rivierenhof",
    city: "Antwerp",
    country: "Belgium",
  },
  {
    date: "2022-08-23",
    venue: "Openluchttheater Rivierenhof",
    city: "Antwerp",
    country: "Belgium",
  },
  {
    date: "2022-08-25",
    venue: "Spazio211",
    city: "Turin",
    country: "Italy",
  },
  {
    date: "2022-02-19",
    venue: "California Vibrations Festival",
    city: "Gabrielino/Tongva Country (Long Beach)",
    state: "CA",
    country: "USA",
  },
  {
    date: "2023-03-03",
    venue: "Vanfest",
    city: "Wiradjuri Country (Bathurst)",
    state: "NSW",
    country: "AUS",
  },
  {
    date: "2023-04-01",
    venue: "Vintage Vibes",
    city: "Woodside",
    state: "SA",
    country: "AUS",
  },
  {
    date: "2023-04-08",
    venue: "Lazy Mountain",
    city: "Dharawal Country (Berry)",
    state: "NSW",
    country: "AUS",
  },
  {
    date: "2023-04-09",
    venue: "Blues Fest",
    city: "Bundjalung Country (Byron Bay)",
    state: "NSW",
    country: "AUS",
  },
];
