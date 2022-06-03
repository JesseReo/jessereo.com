import Head from "next/head";
import styles from "../styles/Tours.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Heading2 from "../components/Heading2";
import Stack from "../components/Stack";
import img from "../public/images/jesse-rugs-23-art.jpg";
import BigLink from "../components/BigLink";

export default function Tours() {
  return (
    <>
      <Head>
        <title>Tours - JESSE REAL</title>
        <meta name="description" content="Tour Schedule for Jesse Real" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero title="TOurs" backgroundImage={img} />
      <Main>
        <Stack>
          <div className={styles.month}>
            <div className={styles.monthName}>
              <Heading2>June 2022</Heading2>
            </div>
            <Weekdays />
            <ol className={styles.dayGrid}>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__day}>1</li>
              <li className={styles.dayGrid__day}>2</li>
              <li className={styles.dayGrid__day}>3</li>
              <li className={styles.dayGrid__day}>4</li>
              <li className={styles.dayGrid__day}>5</li>
              <li className={styles.dayGrid__day}>6</li>
              <li className={styles.dayGrid__day}>7</li>
              <li className={styles.dayGrid__day}>8</li>
              <li className={styles.dayGrid__day}>9</li>
              <li className={styles.dayGrid__day}>
                <DayInner
                  dayNum="10"
                  event={
                    <>The Chelsea at the Cosmopolitan, Las Vegas, NV USA</>
                  }
                />
              </li>
              <li className={styles.dayGrid__day}>
                <DayInner
                  dayNum="11"
                  event={<>Sandy City Amphitheater, Sandy, UT USA</>}
                />
              </li>
              <li className={styles.dayGrid__day}>
                <DayInner
                  dayNum="12"
                  event={<>Red Rocks Amphitheatre, Morrison, CO USA</>}
                />
              </li>
              <li className={styles.dayGrid__day}>13</li>
              <li className={styles.dayGrid__day}>
                <DayInner
                  dayNum="14"
                  event={<>The Palace, St. Paul, MN USA</>}
                />
              </li>
              <li className={styles.dayGrid__day}>
                <DayInner
                  dayNum="15"
                  event={<>Riviera Theatre Chicago, IL USA</>}
                />
              </li>
              <li className={styles.dayGrid__day}>16</li>
              <li className={styles.dayGrid__day}>
                <DayInner
                  dayNum="17"
                  event={<>Agora Theatre, Cleveland, OH USA</>}
                />
              </li>
              <li className={styles.dayGrid__day}>
                <DayInner
                  dayNum="18"
                  event={<>Promowest Pavilion @ Ovation, Newport, KY USA</>}
                />
              </li>
              <li className={styles.dayGrid__day}>
                <DayInner
                  dayNum="19"
                  event={<>Bonnaroo Music Festival, Manchester, TN USA</>}
                />
              </li>
              <li className={styles.dayGrid__day}>20</li>
              <li className={styles.dayGrid__day}>
                <DayInner
                  dayNum="21"
                  event={<>Roxian Theatre, Pittsburgh, PA USA</>}
                />
              </li>
              <li className={styles.dayGrid__day}>
                <DayInner
                  dayNum="22"
                  event={<>Asbury Hall @ Babeville, Buffalo, NY USA</>}
                />
              </li>
              <li className={styles.dayGrid__day}>23</li>
              <li className={styles.dayGrid__day}>
                <DayInner
                  dayNum="24"
                  event={<>The Fillmore, Philadelphia, PA USA</>}
                />
              </li>
              <li className={styles.dayGrid__day}>
                <DayInner
                  dayNum="25"
                  event={<>The Anthem, Washington, DC USA</>}
                />
              </li>
              <li className={styles.dayGrid__day}>
                <DayInner dayNum="26" event={<>Pier 17, New York, NY USA</>} />
              </li>
              <li className={styles.dayGrid__day}>27</li>
              <li className={styles.dayGrid__day}>
                <DayInner
                  dayNum="28"
                  event={<>State Theatre, Portland, ME USA</>}
                />
              </li>
              <li className={styles.dayGrid__day}>
                <DayInner
                  dayNum="29"
                  event={<>House Of Blues, Boston, MA USA</>}
                />
              </li>
              <li className={styles.dayGrid__day}>
                <DayInner
                  dayNum="30"
                  event={
                    <>
                      Festival International de Jazz de Montréal, Montreal, QC
                      Canada
                    </>
                  }
                />
              </li>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__empty}></li>
            </ol>
          </div>

          <div className={styles.month}>
            <div className={styles.monthName}>
              <Heading2>July 2022 - coming soon</Heading2>
            </div>
            {/* <Weekdays />
            <ol className={styles.dayGrid}>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__day}>1</li>
              <li className={styles.dayGrid__day}>2</li>
              <li className={styles.dayGrid__day}>3</li>
              <li className={styles.dayGrid__day}>4</li>
              <li className={styles.dayGrid__day}>5</li>
              <li className={styles.dayGrid__day}>6</li>
              <li className={styles.dayGrid__day}>7</li>
              <li className={styles.dayGrid__day}>8</li>
              <li className={styles.dayGrid__day}>9</li>
              <li className={styles.dayGrid__day}>10</li>
              <li className={styles.dayGrid__day}>11</li>
              <li className={styles.dayGrid__day}>12</li>
              <li className={styles.dayGrid__day}>13</li>
              <li className={styles.dayGrid__day}>14</li>
              <li className={styles.dayGrid__day}>15</li>
              <li className={styles.dayGrid__day}>16</li>
              <li className={styles.dayGrid__day}>17</li>
              <li className={styles.dayGrid__day}>18</li>
              <li className={styles.dayGrid__day}>19</li>
              <li className={styles.dayGrid__day}>20</li>
              <li className={styles.dayGrid__day}>21</li>
              <li className={styles.dayGrid__day}>22</li>
              <li className={styles.dayGrid__day}>23</li>
              <li className={styles.dayGrid__day}>24</li>
              <li className={styles.dayGrid__day}>25</li>
              <li className={styles.dayGrid__day}>26</li>
              <li className={styles.dayGrid__day}>27</li>
              <li className={styles.dayGrid__day}>28</li>
              <li className={styles.dayGrid__day}>29</li>
              <li className={styles.dayGrid__day}>30</li>
              <li className={styles.dayGrid__day}>31</li>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__empty}></li>
            </ol> */}
          </div>

          <div className={styles.month}>
            <div className={styles.monthName}>
              <Heading2>August 2022 - coming soon</Heading2>
            </div>
            {/* <Weekdays />
            <ol className={styles.dayGrid}>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__day}>1</li>
              <li className={styles.dayGrid__day}>2</li>
              <li className={styles.dayGrid__day}>3</li>
              <li className={styles.dayGrid__day}>4</li>
              <li className={styles.dayGrid__day}>5</li>
              <li className={styles.dayGrid__day}>6</li>
              <li className={styles.dayGrid__day}>7</li>
              <li className={styles.dayGrid__day}>8</li>
              <li className={styles.dayGrid__day}>9</li>
              <li className={styles.dayGrid__day}>10</li>
              <li className={styles.dayGrid__day}>11</li>
              <li className={styles.dayGrid__day}>12</li>
              <li className={styles.dayGrid__day}>13</li>
              <li className={styles.dayGrid__day}>14</li>
              <li className={styles.dayGrid__day}>15</li>
              <li className={styles.dayGrid__day}>16</li>
              <li className={styles.dayGrid__day}>17</li>
              <li className={styles.dayGrid__day}>18</li>
              <li className={styles.dayGrid__day}>19</li>
              <li className={styles.dayGrid__day}>20</li>
              <li className={styles.dayGrid__day}>21</li>
              <li className={styles.dayGrid__day}>22</li>
              <li className={styles.dayGrid__day}>23</li>
              <li className={styles.dayGrid__day}>24</li>
              <li className={styles.dayGrid__day}>25</li>
              <li className={styles.dayGrid__day}>26</li>
              <li className={styles.dayGrid__day}>27</li>
              <li className={styles.dayGrid__day}>28</li>
              <li className={styles.dayGrid__day}>29</li>
              <li className={styles.dayGrid__day}>30</li>
              <li className={styles.dayGrid__day}>31</li>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__empty}></li>
              <li className={styles.dayGrid__empty}></li>
            </ol> */}
          </div>
        </Stack>
      </Main>
      <BigLink href="/contact" color="#00ba56" label="COntaCt" />
    </>
  );
}

function Weekdays() {
  return (
    <ul className={styles.weekdays}>
      <li className={styles.weekdays__item}>
        S<span className={styles.weekdays__full}>unday</span>
      </li>
      <li className={styles.weekdays__item}>
        M<span className={styles.weekdays__full}>onday</span>
      </li>
      <li className={styles.weekdays__item}>
        T<span className={styles.weekdays__full}>uesday</span>
      </li>
      <li className={styles.weekdays__item}>
        W<span className={styles.weekdays__full}>ednesday</span>
      </li>
      <li className={styles.weekdays__item}>
        T<span className={styles.weekdays__full}>hursday</span>
      </li>
      <li className={styles.weekdays__item}>
        F<span className={styles.weekdays__full}>riday</span>
      </li>
      <li className={styles.weekdays__item}>
        S<span className={styles.weekdays__full}>aturday</span>
      </li>
    </ul>
  );
}

function DayInner(props) {
  return (
    <>
      <span className={styles.dayNum}>{props.dayNum}</span>
      <div className={styles.event}>{props.event}</div>
    </>
  );
}
