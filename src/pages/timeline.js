import React from 'react'
import { Timeline, Event } from '../components/timeline/time'
import { Link } from 'gatsby'
import styles from '../assets/scss/line'

export default () => (
  <div
    style={{
      paddingTop: 20,
      paddingLeft: 20,
      paddingEnd: 20,
      paddingBottom: 30,
    }}
  >
    <h1 style={{ paddingLeft: 20, paddingTop: 20, paddingBottom: 0 }}>
      Resumé Timeline
    </h1>
    <Timeline>
      <Event
        interval={'Sep 2018 – Nov 2018'}
        title={'Web development Immersive'}
        subtitle={'General Assembly'}
      >
        <ul>
          <li>
            12 weeks (3month) projected-oriented course aimed to instill the
            foundations of full stack web development into the participants
          </li>
          <li>
            Subjects learnt included, Javascript, JQuery, Html, CSS and ReactJS
            as well as NodeJS, Express, Ruby on Rails, Postgresql
          </li>
          <li>
            Please do refer to the homepage for works done by me throughout the
            duration of the course.
          </li>
        </ul>
      </Event>
      <Event
        interval={'May 2016 – Oct 2018'}
        title={'Derivatives dealer'}
        subtitle={'Simpson Spence Young'}
      >
        <ul>
          <li>Dealt mostly with TSI 62% Iron ore futures and options</li>
          <li>
            Created several spreadsheets and statistical analysis with tools
            such as Microsoft Excel and VBA to enhance productivity and trading
            probabilities at work
          </li>
          <li>
            Spent 3 months in operations whereby I provided post and pre trade
            solutions including onboarding/KYC of clients, risk and compliance,
            clearing and analysis of trading activities to ensure the desk runs
            smoothly
          </li>
        </ul>
      </Event>
      <Event
        interval={'2012 – 2016'}
        title={'BSc Maritime Studies'}
        subtitle={'Nanyang Technological University'}
      >
        <ul>
          <li>
            Broad curriculum: shipping and port management, insurance and law,
            and economics
          </li>
          <li>GPA: 4.39/5.00</li>
          <li>
            Awarded inaurgural Claes Isacson Scholarship 2014 award from GARD AS
          </li>
          <li>
            Awarded prestigious GIA Award from Maritime and Port Authority of
            Singapore (MPA)
          </li>
          <li>3rd in Asia pacific Bloomberg Aptitude test(BAT) in May 2015</li>
          <li>
            Final year project (FYP) done on statistical and quantitative
            analysis of financial returns and risk management of acquisition and
            employment of Capesize vessels
          </li>
        </ul>
      </Event>
      <Event
        interval={'2011-2015'}
        title={'Fitness Consultant'}
        subtitle={'Employed transitioned to self-employed'}
      >
        <ul>
          <li>
            Coached both individuals and group classes of up to 30 participants
            on personal training, functional strength training, TRX training as
            well as fitness boot camps
          </li>
          <li>
            Conducted multiple public speeches for up to 25 attendees each time
            for corporate clients such as Rolls Royce, W.R. Grace and GSK
          </li>
        </ul>
      </Event>
      <Event
        interval={'2007 – 2009'}
        title={'GCE A Levels'}
        subtitle={'Nanyang Junior College'}
      >
        <ul>
          <li>
            Subjects: General paper, project work, economics, physics,
            mathematics and chemistry
          </li>
          <li>Grades: B,B,A,A,A,A (in above order)</li>
          <li>
            Member of dragon-boat team placing 3rd on 10men, 20men and mixed
            boat race in National ‘A’ division competition
          </li>
        </ul>
      </Event>
      <br />
      <Link className={styles.buttonss} to="/">
        Home
      </Link>
    </Timeline>
  </div>
)
