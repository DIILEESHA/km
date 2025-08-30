import React, { useEffect, useState } from "react";
import "./it.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { client } from "../../sanity";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Itinerary = () => {
  const [itinerary, setItinerary] = useState([]);
  const [defaultTab, setDefaultTab] = useState("");

  useEffect(() => {
    client
      .fetch(`*[_type=="itinerary"] | order(date asc)`)
      .then((data) => {
        setItinerary(data);
        if (data.length > 0) setDefaultTab(data[0].day.toLowerCase()); // set first day as default
      })
      .catch(console.error);
  }, []);

  if (!itinerary.length) return <p>Loading itinerary...</p>;

  return (
    <div className="it">
      <img src="https://i.imgur.com/T8zWy9q.png" alt="" className="it_top" />
      <h1 className="title">Itinerary</h1>

      <Tabs defaultValue={defaultTab} className="sam">
        <TabsList className="tabs">
          {itinerary.map((day) => (
            <TabsTrigger
              key={day._id}
              className="val"
              value={day.day.toLowerCase()}
            >
              {day.day}, {day.date}
            </TabsTrigger>
          ))}
        </TabsList>

        {itinerary.map((day) => (
          <TabsContent
            key={day._id}
            className="saa"
            value={day.day.toLowerCase()}
          >
            <div className="valed">
              <div className="val_sub">
                <h2 className="sawan">{day.time}</h2>
              </div>

              <div className="val_sub">
                <h2 className="main_title">{day.title}</h2>
                <div className="top_grid">
                  <Accordion className="s" type="single" collapsible>
    {day.details.map((detail, index) => (
      <AccordionItem className="c" value={`item-${index}`} key={index}>
        <AccordionTrigger className="name_venue">{detail.label}</AccordionTrigger>
        <div className="liner"></div>
        <AccordionContent className="co">
          <p className="ven_name">{detail.value}</p>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
                </div>

                {day.additionalInfo && (
                  <div className="top_grid" style={{ marginTop: "1rem" }}>
                    {day.additionalInfo.map((info, index) => (
                      <div className="top_grid_sub" key={index}>
                        <div className="markup">
                          <h2 className="name_venue">{info.label}</h2>
                        </div>
                        <p className="ven_name">{info.value}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Itinerary;
