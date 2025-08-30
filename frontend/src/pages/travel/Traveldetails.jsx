import React from "react";
import "./t.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Traveldetails = () => {
  return (
    <div className="sanka">
      <h2 className="d_title">Arriving in Athens</h2>
      <div className="travel_grid">
        <div className="travel_sub_grid">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/ce/f7/3d/caption.jpg?w=700&h=400&s=1"
            alt=""
            className="travel_img"
          />
        </div>
        <div className="travel_sub_grid">
          <p className="detai_p">
            Athens Airport is modern and easy to navigate, featuring clear
            English signage and straightforward transport connections. Luggage
            carts are available for a small fee; both coins and card payments
            are accepted.
          </p>

          <Accordion className="s" type="single" collapsible>
            <AccordionItem className="c" value="item-1">
              <AccordionTrigger className="hab">
                {" "}
                To reach Piraeus Port from Athens Airport
              </AccordionTrigger>
              <div className="liner"></div>
              <AccordionContent className="co">
                Takes about 45 to 60 minutes. Official yellow taxis are safe,
                metered, and accept card payments. Metro: Take Line 3 to
                Monastiraki, then transfer to Line 1 to Piraeus. Bus X96: This
                bus runs 24/7 between the airport and Piraeus Port.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion className="s" type="single" collapsible>
            <AccordionItem className="c" value="item-1">
              <AccordionTrigger className="hab">
                {" "}
                Car Hire at Athens Airport
              </AccordionTrigger>
              <div className="liner"></div>
              <AccordionContent className="co">
                Rental cars are available at Athens Airport from major
                providers:
                <br />
                Avis: +30 210 353 0578, avis.gr
                <br />
                Hertz: +30 210 353 4900, hertz.gr
                <br />
                Enterprise/Alamo/National: +30 210 353 3320, enterprise.gr
                <br />
                Sixt: +30 210 353 0556, sixt.gr
                <br />
                Europcar: +30 210 353 0580, europcar.com
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion className="s" type="single" collapsible>
            <AccordionItem className="c" value="item-1">
              <AccordionTrigger className="hab">
                {" "}
                Alternative Route via Kosta
              </AccordionTrigger>
              <div className="liner"></div>
              <AccordionContent className="co">
                If preferred, you can drive approximately 2.5 to 3 hours from
                Athens to Kosta through scenic countryside and coastal roads.
                There is secure parking available at Kosta, and from there, a
                15-minute water taxi ride will take you to Spetses (water taxis
                usually operate during daytime; call ahead if arriving late).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <h2 className="d_title">Ferries to Spetses</h2>

      <div className="travel_grid nos">
        <div className="travel_sub_grid">
          <img
            src="https://i.imgur.com/PdnxaQq.jpeg"
            alt=""
            className="travel_img not"
          />
        </div>
        <div className="travel_sub_grid">
          <Accordion className="s" type="single" collapsible>
            <AccordionItem className="c" value="item-1">
              <AccordionTrigger className="hab">
                {" "}
                Several ferry operators offer regular crossings to Spetses:
              </AccordionTrigger>
              <div className="liner"></div>
              <AccordionContent className="co">
                Operators: Blue Star Ferries, Alpha Lines, Hellenic Seaways
                <br />
                Features include QR boarding from your phone, assigned seats,
                and air-conditioned cabins.
                <br />
                Onboard kiosks provide water, coffee, and snacks.
                <br />
                Enjoy a scenic crossing through the Saronic Gulf.
                <br />
                Luggage can be stored on racks near seating areas at no extra
                fee.
                <br />
                It’s best to check ferry schedules after confirming your flight
                times.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion className="s" type="single" collapsible>
            <AccordionItem className="c" value="item-1">
              <AccordionTrigger className="hab">Contacts:</AccordionTrigger>
              <div className="liner"></div>
              <AccordionContent className="co">
                Blue Star Ferries: +30 210 891 9800, bluestarferries.com
                <br />
                Alpha Lines: +30 2810 346 185, alphalines.gr
                <br />
                Hellenic Seaways: +30 210 419 9000, hellenicseaways.gr
                <br />
                Piraeus Port Authority: +30 210 422 6000
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion className="s" type="single" collapsible>
            <AccordionItem className="c" value="item-1">
              <AccordionTrigger className="hab">
                Other transport options
              </AccordionTrigger>
              <div className="liner"></div>
              <AccordionContent className="co">
                Taxis are limited; it’s best to call in advance or ask your
                hotel to arrange one. Taxi line: +30 22980 73171
                <br />
                Sea taxis operate during the day at the pier; call ahead for
                late-night arrivals.
                <br />
                Rentals such as scooters, quads, and golf carts are available
                from:
                <br />
                Moto Spetses: +30 22980 74544, spetses-moto.gr
                <br />
                Delaportas Rentals: +30 22980 74066, delaportasmotospetses.gr
                <br />
                Kentros Rentals: +30 22980 74285
                <br />
                Horse carriages at the Old Harbour offer a scenic and charming
                transport alternative.
                <br />
                Summer bus service is available to beaches.
                <br />
                Walking from the port (Dapia) to most hotels takes about 10–15
                minutes following a pleasant seafront path.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Traveldetails;
