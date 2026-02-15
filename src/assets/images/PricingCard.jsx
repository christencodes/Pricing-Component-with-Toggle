export default function PricingCard({
  pricingState,
  plan,
  storage,
  users,
  upload,
  priceMonth,
  priceAnnual,
}) {
  return (
    <>
      <div className="pricing-card bg-white font-display text-(--gray700) flex flex-col items-center px-9 py-6 gap-3 rounded-xl md:w-150  ">
        <h3 className="font-bold text-lg">{plan}</h3>
        <h2 className="text-[72px] font-bold  ">
          <span className="text-[40px] align-middle">$</span>
          {pricingState === "monthly" ? priceMonth : priceAnnual}
        </h2>
        <section className="features flex flex-col items-center  border-t w-full border-(--gray650)/40">
          <div className="py-4 border-b border-(--gray650)/40 w-full text-center font-bold text-(--gray650)">
            {storage} Storage
          </div>
          <div className="py-4 border-b border-(--gray650)/40 w-full text-center font-bold text-(--gray650)">
            {users} Users Allowed
          </div>
          <div className="py-4 border-b border-(--gray650)/40 w-full text-center font-bold text-(--gray650)">
            Send up to {upload}
          </div>
        </section>
        <button className="w-full uppercase text-[12px] font-bold py-3 mt-4 text-white bg-linear-(--purple-gradient) rounded-md tracking-wider cursor-pointer ">
          Learn More
        </button>
      </div>
    </>
  );
}
