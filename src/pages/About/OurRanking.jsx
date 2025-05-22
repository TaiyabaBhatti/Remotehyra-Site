import React from "react";
import Headline from "../../components/ui/Headline";
import RankingCard from "./RankingCard";

import static1 from "../../assets/lottie/about-card-1.png";
import static2 from "../../assets/lottie/about-card-2.png";
import static3 from "../../assets/lottie/about-card-3.png";
import static4 from "../../assets/lottie/about-card-4.png";
import Wrapper from "../../components/ui/Wrapper";

export default function OurRanking() {
  return (
    <section className="bg-darkbrown">
      <Wrapper>
        <Headline
          title="Leading the market with unmatched results"
          classTitle="section-black"
        />

        <div className="flex flex-row flex-wrap  gap-y-5 items-center  justify-center gap-x-5">
          <RankingCard title="Project Taken" numeric="100+" icon={static1} />
          <RankingCard title="Happy Clients" numeric="98%" icon={static4} />
          <RankingCard title="Team Members" numeric="25+" icon={static2} />
          <RankingCard title="Experience" numeric="5+" icon={static3} />
        </div>
      </Wrapper>
    </section>
  );
}
