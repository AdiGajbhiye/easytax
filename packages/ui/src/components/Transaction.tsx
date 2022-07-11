function Transaction() {
  return (
    <div className="flex flex-col m-4 border-b-2">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            alt="USD Coin"
            className="w-8 h-8 m-2"
            src="https://coin-tracker-public.s3-us-west-1.amazonaws.com/crypto-icons/cmc/64x64/3408.png"
          />
          <div className="flex flex-col">
            <div className="text-sm font-light">Binance USDC Wallet</div>
            <div>- 844.76 USDC</div>
            <div className="text-sm font-light">₹68,422.34 cost basis</div>
          </div>
        </div>
        <div className="flex items-center">
          <img
            alt="USD Coin"
            className="w-8 h-8 m-2"
            src="https://coin-tracker-public.s3-us-west-1.amazonaws.com/crypto-icons/cmc/64x64/3408.png"
          />
          <div className="flex flex-col">
            <div className="text-sm font-light">Binance BTC Wallet</div>
            <div>+ 0.03448 BTC</div>
            <div className="text-sm font-light">₹68,422.34 cost basis</div>
          </div>
        </div>
      </div>
      <div className="ml-12 px-3 py-1 my-2 bg-red-500 text-xs text-white font-semibold rounded-md w-fit">
        -₹2,140.84 loss
      </div>
    </div>
  );
}

export default Transaction;
