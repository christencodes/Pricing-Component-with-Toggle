import { useState } from "react";
import PricingCard from "./assets/images/PricingCard";
import Switch from "./Switch";

function App() {
  const [currentPricingState, changePricingState] = useState(false);

  return (
    <>
      <main className="global-container text-white bg-(--blue200) h-full min-h-fit flex flex-col items-center justify-center mx-auto gap-10 ">
        <header className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl text-(--gray650)">Our Pricing</h1>
          {/* COMPONENT HERE */}
          <Switch
            changePriceState={() => changePricingState(!currentPricingState)}
            priceState={currentPricingState}
          ></Switch>
        </header>
        <section className="card-container flex flex-col  gap-6 justify-center items-center lg:flex-row lg:w-75 lg:gap-0">
          <PricingCard
            pricingState={currentPricingState}
            plan={"Basic"}
            storage={"500 GB"}
            users={2}
            upload={"3 GB"}
            priceMonth={"19.99"}
            priceAnnual={199.99}
          ></PricingCard>

          <PricingCard
            pricingState={currentPricingState}
            plan={"Professional"}
            storage={"500 GB"}
            users={2}
            upload={"3 GB"}
            priceMonth={"24.99"}
            priceAnnual={249.99}
          ></PricingCard>

          <PricingCard
            pricingState={currentPricingState}
            plan={"Master"}
            storage={"2 TB"}
            users={10}
            upload={"20 GB"}
            priceMonth={"39.99"}
            priceAnnual={399.99}
          ></PricingCard>
        </section>
      </main>
    </>
  );
}

export default App;
