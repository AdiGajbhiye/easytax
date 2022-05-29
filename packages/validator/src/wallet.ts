import z from "zod";

export const WalletValidation = z.object({
  type: z.string(),
  name: z.string(),
  publicKey: z.string(),
  secret: z.string().optional(),
});
export type IWallet = z.infer<typeof WalletValidation>;
export type Wallet = Omit<IWallet, "secret">;
