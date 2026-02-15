export default function Switch({ changePriceState, priceState }) {
  return (
    <>
      <div className=" flex gap-6 items-center justify-center">
        <h2>Annually</h2>
        <div className="w-17 h-9 bg-black rounded-full relative bg-linear-(--purple-gradient)">
          <div
            onClick={changePriceState}
            className={`  ${priceState ? "right-1/9 top-1/5 translate-x-1/5" : "left-1/16 top-1/5"} absolute rounded-full h-5 w-5  bg-white transition-all transition-discrete duration-500 `}
          ></div>
        </div>
        <h2>Monthly</h2>
      </div>
    </>
  );
}
