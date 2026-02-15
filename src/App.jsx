import { useState } from "react";
import PricingCard from "./assets/images/PricingCard";

function App() {
  const [currentPricingState, changePricingState] = useState("monthly");
  return (
    <>
      <main className="global-container text-white bg-(--blue200) h-full flex flex-col items-center justify-center">
        <header>
          <h1>Our Pricing</h1>
          {/* COMPONENT HERE */}
        </header>
        <section className="card-container flex flex-col justify-center items-center">
          <PricingCard
            pricingState={currentPricingState}
            plan={"Basic"}
            storage={"500 GB"}
            users={2}
            upload={"3 GB"}
            priceMonth={"19.99"}
            priceAnnual={199.99}
          ></PricingCard>
        </section>
      </main>
    </>
  );
}

export default App;
