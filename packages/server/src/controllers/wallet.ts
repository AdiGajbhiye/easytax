import { IWallet, WalletValidation } from "@easytax/validator";
import Wallet from "@models/wallet";
import { Request, Response } from "express";
import { getBalance } from "@services/exchange";
import { ExchangeId } from "ccxt";
import { getPricesInFiat } from "@services/coinMarketCap";
import Transaction from "@models/transaction";

export const addWallet = async (
  req: Request<{}, {}, IWallet>,
  res: Response
) => {
  const _result = WalletValidation.safeParse(req.body);
  if (!_result.success) {
    res.status(400).json({ message: _result.error });
    return;
  }
  const { data } = _result;

  try {
    const wallet = await Wallet.create({ ...data, userId: res.locals.jwt.id });
    res.status(201).json({
      walletType: wallet.walletType,
      publicAddress: wallet.publicAddress,
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const updateWallet = async (
  req: Request<{ id: string }, {}, IWallet>,
  res: Response
) => {};

export const deleteWallet = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response
) => {
  try {
    const walletId = req.params.id;
    await Transaction.deleteMany({ walletId });
    await Wallet.deleteOne({ _id: walletId });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const getWallet = async (req: Request<{}, {}, {}>, res: Response) => {
  try {
    const wallets = await Wallet.find({ userId: res.locals.jwt.id });
    const balances = await Promise.all(
      wallets
        .filter((w) => !!w.secret && w.walletType === "binance")
        .map((w) =>
          getBalance(w.walletType as ExchangeId, {
            apiKey: w.publicAddress,
            // @ts-ignore
            secret: w.secret,
          })
        )
    );
    if (balances.length === 0) {
      return res.status(200).json({ wallets: [] });
    }
    const prices = await getPricesInFiat(
      Array.from(new Set<string>(balances.flatMap((b) => Object.keys(b))))
    );
    const data = wallets.map((w, i) => {
      let walletTotal = 0;
      const b = balances[i];
      const _balance = [];
      for (const [k, v] of Object.entries(b)) {
        const price = v * prices[k];
        walletTotal += price;
        _balance.push({ symbol: k, value: v, price });
      }
      return {
        id: w.id,
        walletType: w.walletType,
        // @ts-ignore
        createdAt: w.createdAt,
        walletTotal,
        balance: _balance,
      };
    });

    res.status(200).json({ wallets: data });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
