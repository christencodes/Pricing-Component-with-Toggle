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
      <div
        className={`${plan !== "Professional" ? "pricing-card bg-white font-display text-(--gray700) flex flex-col items-center px-9 py-6 gap-3 rounded-xl md:w-150 min-w-[300px]" : "pricing-card bg-linear-(--purple-gradient) font-display text-white flex flex-col items-center px-9 py-6 gap-3 rounded-xl md:w-150 min-w-[300px] lg:py-12 "} ${plan === "Basic" ? "lg:rounded-r-none" : null} ${plan === "Master" ? "lg:rounded-l-none" : null}`}
      >
        <h3 className="font-bold text-lg">{plan}</h3>
        <h2 className="text-[72px] font-bold  ">
          <span className="text-[40px] align-middle">$</span>
          {pricingState ? priceMonth : priceAnnual}
        </h2>
        <section className="features flex flex-col items-center  border-t w-full border-(--gray650)/40">
          <div className="py-4 border-b border-(--gray650)/40 w-full text-center font-bold ">
            {storage} Storage
          </div>
          <div className="py-4 border-b border-(--gray650)/40 w-full text-center font-bold">
            {users} Users Allowed
          </div>
          <div className="py-4 border-b border-(--gray650)/40 w-full text-center font-bold">
            Send up to {upload}
          </div>
        </section>
        <button
          className={`w-full uppercase text-[12px] font-bold py-3 mt-4  ${plan !== "Professional" ? "bg-linear-(--purple-gradient) text-white" : "bg-white text-(--blue500)"} rounded-md tracking-wider cursor-pointer `}
        >
          Learn More
        </button>
      </div>
    </>
  );
}
