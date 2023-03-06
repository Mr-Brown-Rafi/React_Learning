import React from "react";
import { Link } from "react-router-dom";

const events = [
  { id: 1, title: "Event 1" },
  { id: 2, title: "Event 2" },
  { id: 3, title: "Event 3" },
  { id: 4, title: "Event 4" },
];

const EventsPage = () => {
  return (
    <>
      <h2>This is Events Page.</h2>

      <ul>
        {events.map((event) => (
          <li>
            <Link id={event.id} to={`/events/${event.title}`}>
              {event.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
