import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const SectionTwo = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <section className="bg-white py-12 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column */}
          <div className="lg:w-1/2 mx-6 my-6">
            <h2 className="text-3xl font-bold mb-4">
              You're moving to the valley...
            </h2>
            <div className="mb-4">
              <div>
                <p>
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
                  <p>
                    work together to build a thriving farm, share resources, and
                    build relationships with townspeople or each other. As more
                    hands are better than one, players have the option to scale
                    profit margin on produce sold for a more challenging
                    experience.
                  </p>
                )}
              </div>
              <button
                className="text-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mt-4"
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
            <button className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded inline-flex items-center">
              Explore this game's official website
            </button>
          </div>
          {/* Right Column */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 ">
            <img
              src="https://via.placeholder.com/400"
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
