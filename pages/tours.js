import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Tours.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Heading3 from "../components/Heading3";
import heroImg from "../images/hero-tours.jpg";
import BigLink from "../components/BigLink";
import ToursSvg from "../images/tours.svg";
import ContactSvg from "../images/contact.svg";

export default function Tours() {
  const [activeTab, setActiveTab] = useState("future");
  const futureEvents = getEvents(eventData, "future");
  const pastEvents = getEvents(eventData, "past");

  return (
    <>
      <Head>
        <title>TOURS - JESSE REO</title>
        <meta name="description" content="Tour Schedule for Jesse Reo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero title="TOurs" titleImage={<ToursSvg />} backgroundImage={heroImg} />
      <Main>
        <div className={styles.tabHeadings}>
          <div
            className={`${styles.tabButton} ${
              activeTab === "future" ? styles.tabActive : ""
            }`}
            onClick={() => {
              setActiveTab("future");
            }}
          >
            <Heading3>Upcoming</Heading3>
          </div>
          <Heading3> &nbsp;&nbsp; / &nbsp;&nbsp;</Heading3>
          <div
            className={`${styles.tabButton} ${
              activeTab === "past" ? styles.tabActive : ""
            }`}
            onClick={() => {
              setActiveTab("past");
            }}
          >
            <Heading3>Past</Heading3>
          </div>
        </div>

        <div style={{ display: activeTab === "future" ? "block" : "none" }}>
          <EventList data={futureEvents} />
        </div>

        <div style={{ display: activeTab === "past" ? "block" : "none" }}>
          <EventList data={pastEvents} />
        </div>
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

const EventList = (props) => {
  return props.data.map((item) => {
    const formattedDate = formatEventDate(item.date);
    return (
      <div key={`event-${item.date}-${item.venue}`} className={styles.event}>
        <div>
          <div className={styles.date}>{formattedDate}</div>
          <div className={styles.venue}>{item.venue}</div>
        </div>
        <div>
          <div className={styles.location}>
            {item.city && <>{item.city}, </>}
            {item.state && <>{item.state}, </>}
            {item.country && <>{item.country} </>}
          </div>
        </div>
      </div>
    );
  });
};

/* Get events
 *
 * @param data - array - the event data as an array.
 * @param filter - 'future' | 'past' - filter by futire or past events.
 * @return array - array of filterered events. future events are sorted ascending, past events are sorted descending.
 */
function getEvents(data, filter = "future") {
  const today = new Date(new Date().toDateString());

  var mutated = data
    .filter(function (item) {
      const itemDate = new Date(new Date(item.date).toDateString());
      const result = {
        future: itemDate >= today,
        past: itemDate < today,
      };
      return result[filter];
    })
    .sort((a, b) => {
      const dateA = new Date(new Date(a.date).toDateString());
      const dateB = new Date(new Date(b.date).toDateString());
      const result = {
        future: dateA > dateB ? 1 : -1,
        past: dateA < dateB ? 1 : -1,
      };
      return result[filter];
    });

  return mutated;
}

/* Format event date
 *
 * @param date - date as a string eg. 2023-01-01
 * @return string - eg. JAN 01, 2023
 */
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
  {
    date: "2023-05-28",
    venue: "Greenroom Festival",
    city: "Yokohama",
    state: "",
    country: "Japan",
  },
  {
    date: "2023-06-14",
    venue: "Bergenfest",
    city: "Bergen",
    state: "",
    country: "Norway",
  },
  {
    date: "2023-06-16",
    venue: "Hurricane Festival",
    city: "Scheeßel",
    state: "",
    country: "Germany",
  },
  {
    date: "2023-06-17",
    venue: "Southside Festival",
    city: "Neuhausen ob Eck",
    state: "",
    country: "Germany",
  },
  {
    date: "2023-06-18",
    venue: "Pinkpop Festival",
    city: "Landgraaf",
    state: "",
    country: "Netherlands",
  },
  {
    date: "2023-06-21",
    venue: "Release Athens Festival",
    city: "Athens",
    state: "",
    country: "Greece",
  },
  {
    date: "2023-06-23",
    venue: "Zorlu Performing Arts Center",
    city: "İstanbul",
    state: "",
    country: "Türkiye",
  },
  {
    date: "2023-06-25",
    venue: "Couleur Café",
    city: "Brussels",
    state: "",
    country: "Belgium",
  },
  {
    date: "2023-06-26",
    venue: "Eventim Apollo",
    city: "London",
    state: "",
    country: "United Kingdom",
  },
  {
    date: "2023-06-27",
    venue: "The Civic at The Halls Wolverhampton",
    city: "Wolverhampton",
    state: "",
    country: "United Kingdom",
  },
  {
    date: "2023-06-30",
    venue: "OpenAir St. Gallen",
    city: "St. Gallen",
    state: "",
    country: "Switzerland",
  },
  {
    date: "2023-07-02",
    venue: "Garorock Festival",
    city: "Marmande",
    state: "",
    country: "France",
  },
  {
    date: "2023-07-06",
    venue: "Cruïlla Festival",
    city: "Barcelona",
    state: "",
    country: "Spain",
  },
  {
    date: "2023-07-07",
    venue: "Mad Cool Festival",
    city: "Madrid",
    state: "",
    country: "Spain",
  },
  {
    date: "2023-07-08",
    venue: "NOS Alive",
    city: "Algés",
    state: "",
    country: "Lisbon",
  },
  {
    date: "2023-07-14",
    venue: "Waldbühne",
    city: "Berlin",
    state: "",
    country: "Germany",
    support: "Fat Freddy's Drop",
  },
  {
    date: "2023-07-15",
    venue: "Letnia Scena Progresji",
    city: "Warsaw",
    state: "",
    country: "Poland",
  },
  {
    date: "2023-07-17",
    venue: "Arena Wien Open Air",
    city: "Vienna",
    state: "",
    country: "Austria",
  },
  {
    date: "2023-07-19",
    venue: "Hala Park",
    city: "Zagreb",
    state: "",
    country: "Croatia",
  },
  {
    date: "2023-07-21",
    venue: "Electric Castle",
    city: "Cluj-Napoca",
    state: "",
    country: "Romania",
  },
  {
    date: "2023-07-23",
    venue: "Sequoie Music Park",
    city: "Bologna",
    state: "",
    country: "Italy",
  },
  {
    date: "2023-07-25",
    venue: "Autodromo Nazionalek",
    city: "Monza",
    state: "",
    country: "Italy",
    support: "Bruce Springsteen & Tesky Brothers",
  },
  {
    date: "2023-07-26",
    venue: "Cavea of the Auditorium Parco della Musica",
    city: "Monza",
    state: "",
    country: "Rome",
  },
  {
    date: "2023-08-22",
    venue: "The Rady Shell at Jacobs Park",
    city: "San Diego",
    state: "CA",
    country: "USA",
  },
  {
    date: "2023-08-23",
    venue: "Avila Beach Golf Resort",
    city: "Avila Beach",
    state: "CA",
    country: "USA",
  },
  {
    date: "2023-08-25",
    venue: "Frost Amphitheater",
    city: "Palo Alto",
    state: "CA",
    country: "USA",
  },
  {
    date: "2023-08-26",
    venue: "Britt Festival Pavilion",
    city: "Jacksonville",
    state: "OR",
    country: "USA",
  },
  {
    date: "2023-08-27",
    venue: "THING Fest",
    city: "Port Townsend",
    state: "WA",
    country: "USA",
  },
  {
    date: "2023-08-29",
    venue: "Orpheum Theatre",
    city: "Vancouver",
    state: "BC",
    country: "Canada",
  },
  {
    date: "2023-08-30",
    venue: "The Cuthbert Amphitheater",
    city: "Eugene",
    state: "OR",
    country: "USA",
  },
  {
    date: "2023-09-01",
    venue: "Sandy Amphitheater",
    city: "Sandy",
    state: "UT",
    country: "USA",
  },
  {
    date: "2023-09-02",
    venue: "Dillon Amphitheate",
    city: "Dillon",
    state: "CO",
    country: "USA",
  },
  {
    date: "2023-09-03",
    venue: "Gerald R. Ford Amphitheater",
    city: "Vail",
    state: "CO",
    country: "USA",
  },
  {
    date: "2023-09-05",
    venue: "Harrah's Kansas City - Voodoo Lounge",
    city: "Kansas City",
    state: "MO",
    country: "USA",
  },
  {
    date: "2023-09-06",
    venue: "The Sylvee",
    city: "Madison",
    state: "WI",
    country: "USA",
  },
  {
    date: "2023-09-08",
    venue: "The Salt Shed",
    city: "Chicago",
    state: "IL",
    country: "USA",
  },
  {
    date: "2023-09-09",
    venue: "MegaCorp Pavilion",
    city: "Newport",
    state: "KY",
    country: "USA",
  },
  {
    date: "2023-09-10",
    venue: "Agora Theatre and Ballroom",
    city: "Cleveland",
    state: "OH",
    country: "USA",
  },
  {
    date: "2023-09-12",
    venue: "REBEL",
    city: "Toronto",
    state: "",
    country: "Canada",
  },
  {
    date: "2023-09-13",
    venue: "MTELUS",
    city: "Montreal",
    state: "",
    country: "Canada",
  },
  {
    date: "2023-09-15",
    venue: "Roadrunner",
    city: "Boston",
    state: "MA",
    country: "USA",
  },
  {
    date: "2023-09-16",
    venue: "Sea.Hear.Now. Festival",
    city: "Asbury Park",
    state: "NJ",
    country: "USA",
  },
  {
    date: "2023-09-17",
    venue: "Kings Theatre",
    city: "Brooklyn",
    state: "NY",
    country: "USA",
  },
  {
    date: "2023-09-19",
    venue: "Harrisburg University at the Forum",
    city: "Harrisburg",
    state: "PA",
    country: "USA",
  },
  {
    date: "2023-09-20",
    venue: "Ting Pavilion",
    city: "Charlottesville",
    state: "VA",
    country: "USA",
  },
  {
    date: "2023-09-22",
    venue: "Tabernacle",
    city: "Atlanta",
    state: "GA",
    country: "USA",
  },
  {
    date: "2023-09-23",
    venue: "The Pageant",
    city: "St Louis",
    state: "MO",
    country: "USA",
  },
  {
    date: "2023-09-24",
    venue: "FORMAT Festival",
    city: "Bentonville",
    state: "AR",
    country: "USA",
  },
  {
    date: "2023-09-27",
    venue: "The Fillmore New Orleans",
    city: "Bentonville",
    state: "AR",
    country: "USA",
  },
  {
    date: "2023-09-29",
    venue: "Mempho Music Festival",
    city: "Memphis",
    state: "TN",
    country: "USA",
  },
  {
    date: "2023-09-29",
    venue: "713 Music Hall",
    city: "Houston",
    state: "TX",
    country: "USA",
  },
  {
    date: "2023-09-30",
    venue: "The Pavilion at Toyota Music Factory",
    city: "Irving",
    state: "TX",
    country: "USA",
  },
  {
    date: "2023-11-25",
    venue: "Spark Arena",
    city: "Auckland",
    state: "",
    country: "USA",
  },
];
