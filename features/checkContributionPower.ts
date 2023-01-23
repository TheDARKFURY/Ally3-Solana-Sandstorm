import * as spl from "@solana/spl-token";
import * as anchor from "@project-serum/anchor";
import * as collabs from "../collabs/js/src/generated";
import { WalletContextState } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { contributorAccountBeet } from "../collabs/js/src/generated/accounts/ContributorAccount";

export async function checkContributionPower(
  contributorWalletAddress: anchor.web3.PublicKey
) {
  const [contributorPda, bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("contributor"), contributorWalletAddress.toBuffer()],
    collabs.PROGRAM_ID
  );
  const contributorAccount =
    await collabs.accountProviders.ContributorAccount.fromAccountAddress(
      new anchor.web3.Connection("https://rpc.helius.xyz/?api-key=52d3aae3-07be-4900-a393-49d36a260649"),
      contributorPda
    );
  console.log(contributorAccount.xp.toString());
}
