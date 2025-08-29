import React, { useState } from "react";
import "./story.css";
import storyimg from "../../assets/logo.png";

const Story = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="dox">
      <div className="story">
        <div className="story_sub d">
          <img src={storyimg} alt="" className="nav_imgs" />
          {/* <h2 className="welcome_letter">welcome letter</h2> */}
        </div>

        <div className="story_sub">
          <p className="welcome_paragraph">
            <span style={{ fontSize: "30px", fontWeight: "bold" }}>
              Dear Family & Friends
            </span>
            <div className="space"></div>
            We are beyond excited to welcome you to Spetses, Greece, for what
            will be the most meaningful weekend of our lives. Having you here
            with us — many traveling across oceans to join — means more than we
            can ever say.
            <div className="space"></div>
            This will be a celebration not only of our wedding day but of
            friendship, family, and the memories we’ve shared with each of you.
            We cannot imagine beginning this new chapter without you by our
            side.
            {expanded && (
              <>
                <div className="space"></div>
                This guide is here to make your journey simple and your stay
                unforgettable. Inside you’ll find everything from travel
                instructions to Spetses history, food, and tips for getting
                around. Please don’t worry about the details — everything you
                need is here, and once you arrive you’ll see how simple and
                magical Spetses really is.
                <div className="space"></div>
                We are filled with joy and anticipation, and we cannot wait to
                celebrate, laugh, and make memories together in this beautiful
                place.
                <div className="space"></div>
              </>
            )}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="see-more-btn"
            style={{ margin: "10px 0", cursor: "pointer",textDecoration:"underline" }}
          >
            {expanded ? "See Less" : "See More"}
          </button>

          <p className="welcome_paragraph">
            With love and excitement,
            <br />
            Kelliann & Michael
          </p>

          <button className="master" style={{marginTop:"20px"}}>rsvp</button>
        </div>
      </div>

      {/* <img src="https://i.imgur.com/OiDVBOy.png" alt="" className="ss"/> */}
    </div>
  );
};

export default Story;
