import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Tours.module.css";
import eventData from "../content/event-data.json";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Heading3 from "../components/Heading3";
import heroImg from "../images/hero-tours.jpg";
import ToursSvg from "../images/tours.svg";
import Text from "../components/Text";
import Spacer from "../components/Spacer/Spacer";
import Pagination from "../components/Pagination";

export default function Tours() {
  const [active, setActive] = useState("future");
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
        <Heading3 className={styles.tabHeadings}>
          <TabButton
            label="UPCOMING"
            value="future"
            active={active}
            setActive={setActive}
          />
          <span>/</span>
          <TabButton
            label="PAST"
            value="past"
            active={active}
            setActive={setActive}
          />
        </Heading3>

        <div className={styles.eventList}>
          <EventList data={active === "future" ? futureEvents : pastEvents} />
        </div>

        <Spacer />
        <Spacer />
        <Spacer />
      </Main>

      <Pagination id="tours" className={styles.pagination} />
    </>
  );
}

const TabButton = (props) => {
  return (
    <span
      className={`${styles.tabButton} ${
        props.active === props.value ? styles.tabActive : ""
      }`}
      onClick={() => {
        props.setActive(props.value);
      }}
    >
      {props.label}
    </span>
  );
};

const EventList = (props) => {
  return props.data.map((item) => {
    const formattedDate = formatEventDate(item.date);
    return (
      <div key={`event-${item.date}-${item.venue}`} className={styles.event}>
        <div>
          <Text className={styles.date}>{formattedDate}</Text>
          <Text className={styles.venue}>{item.venue}</Text>
        </div>
        <div>
          <Text className={styles.location}>
            {item.city && <>{item.city}, </>}
            {item.state && <>{item.state}, </>}
            {item.country && <>{item.country} </>}
          </Text>
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
