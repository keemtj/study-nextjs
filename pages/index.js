// our-domian.com/
// import { useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 5, 12345 Some City",
//     description: "This is a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 10, 54321 Some City",
//     description: "This is a second meetup!",
//   },
// ];

function HomePage(props) {
  // React.js
  // 2 Cycles: empty array(cycle1) -> 2 items array(cycle2)
  // page source -> <li> is not exist
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   // send a http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  // return <MeetupList meetups={loadedMeetups} />;
  return <MeetupList meetups={props.meetups} />;
}

// 컴포넌트를 호출하기 전에 getStaticProps함수를 먼저 호출한다
// 비동기 실행
// file system, connet database
export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://jay:lJz4zWLBqx4GBuJk@cluster0.jimdy.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  // always return object
  return {
    // page component's props
    props: {
      // meetups: DUMMY_MEETUPS,
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
