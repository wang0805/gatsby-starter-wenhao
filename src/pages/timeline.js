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
        12 weeks (3month) projected-oriented course aimed to instill the
        foundations of full stack web development into the participants.
        Subjects learnt included, Javascript, JQuery, Html, CSS and ReactJS as
        well as NodeJS, Express, Ruby on Rails, Postgresql . Please refer to the
        homepage for works done by me throughout the duration of the course.
      </Event>
      <Event interval={'2015 – 2016'} title={'Lorem'} subtitle={'Ipsum'}>
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </Event>
      <Event interval={'2015 – 2016'} title={'Lorem'} subtitle={'Ipsum'}>
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </Event>
      <Event interval={'2015 – 2016'} title={'Lorem'} subtitle={'Ipsum'}>
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </Event>
      <Event interval={'2015 – 2016'} title={'Lorem'} subtitle={'Ipsum'}>
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </Event>
      <br />
      <Link className={styles.buttonss} to="/">
        Home
      </Link>
    </Timeline>
  </div>
)
