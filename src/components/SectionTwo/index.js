import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets//images/image";
import CtaButton from "../ctabutton";

const SectionTwo = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <section className=" pb-12 pt-40 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column */}
          <div className="lg:w-1/2 mx-8 mb-20">
            <h2 className="text-xlg text-heavy font-sans font-bold line-height-tight mb-4">
              You're moving to the valley...
            </h2>
            <div className="mb-4">
              <div>
                <p className="font-sans font-regular text-heavy text-base line-height-snug">
                  You’ve inherited your grandfather’s old farm plot in Stardew
                  Valley. Armed with hand-me-down tools and a few coins, you set
                  out to begin your new life. Can you learn to live off the land
                  and turn these overgrown fields into a thriving home? It won’t
                  be easy. Ever since Joja Corporation came to town, the old
                  ways of life have all but disappeared. The community center,
                  once the town’s most vibrant hub of activity, now lies in
                  shambles. But the valley seems full of opportunity. With a
                  little dedication, you might just be the one to restore
                  Stardew Valley to greatness! <br></br> <br></br>Now with
                  Multiplayer! Invite 1-3 players to join you in the valley!
                  Players can
                </p>
                {isReadMore && (
                  <p className="font-sans font-regular text-heavy text-base line-height-snug">
                    work together to build a thriving farm, share resources, and
                    build relationships with townspeople or each other. As more
                    hands are better than one, players have the option to scale
                    profit margin on produce sold for a more challenging
                    experience.
                  </p>
                )}
              </div>
              <button
                className="text-primary hover:text-primaryHover text-primary font-bold py-2 px-4 rounded inline-flex items-center mt-4"
                onClick={toggleReadMore}
              >
                <FontAwesomeIcon
                  icon={isReadMore ? faMinus : faPlus}
                  className="mr-2 max-h-32"
                />
                {isReadMore ? "Read Less" : "Read More"}
              </button>
              <p>Software description provided by the publisher.</p>
            </div>
            {/* <button className="bg-primary hover:bg-primary text-white font-bold py-5 px-6 rounded-full inline-flex items-center">
              Explore this game's official website
            </button> */}
            <CtaButton padding="large">
              Explore this game's official website
            </CtaButton>
          </div>
          {/* Right Column */}
          <div className="lg:w-1/2  lg:mt-0 mx-8 mb-20">
            <img
              src={images.stardew}
              alt="Placeholder"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
