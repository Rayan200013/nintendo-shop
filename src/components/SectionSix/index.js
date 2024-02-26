import React, { useState } from "react";

const SectionSix = () => {
  return (
    <section className="bg-white pb-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col  m-8 rounded">
          <p className="text-xsm text-heavy font-sans font-regular">
            WARNING: If you have epilepsy or have had seizures or other unusual
            reactions to flashing lights or patterns, consult a doctor before
            playing video games. All users should read the Health and Safety
            Information available in the system settings before using this
            software.
          </p>
          <br></br>
          <p className="text-xsm text-heavy font-sans font-regular">
            Nintendo Switch Online membership (sold separately) and Nintendo
            Account required for online play. Not available in all countries.
            Internet access required for online features. Terms apply.
            nintendo.com/switch-online
          </p>
          <br></br>

          <p className="text-xsm text-heavy font-sans font-regular">
            Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
