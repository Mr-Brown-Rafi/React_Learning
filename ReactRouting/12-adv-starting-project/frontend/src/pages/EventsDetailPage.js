import React from "react";
import { useParams } from "react-router-dom";


const EventsDetalPage = () => {
const params =  useParams();

  return (
    <>
      <h2>This is events EventsDetalPage.</h2>
      <p>{params.id}</p>
    </>
  );
};

export default EventsDetalPage;
