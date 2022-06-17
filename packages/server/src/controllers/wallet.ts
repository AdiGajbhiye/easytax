import { IWallet, WalletValidation } from "@easytax/validator";
import Wallet from "@models/wallet";
import { Request, Response } from "express";

const getWallet = async (req: Request<{}, {}, {}>, res: Response) => {};

const addWallet = async (req: Request<{}, {}, IWallet>, res: Response) => {
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
  }
};

const updateWallet = async (
  req: Request<{ id: string }, {}, IWallet>,
  res: Response
) => {};

const deleteWallet = async (req: Request<{}, {}, {}>, res: Response) => {};

const listWallet = async (req: Request<{}, {}, {}>, res: Response) => {
  try {
    const wallets = await Wallet.find({ userId: res.locals.jwt.id });
    res.status(201).json({
      wallets,
    });
  } catch (error) {
    console.log(error);
  }
};

export { addWallet, listWallet };
