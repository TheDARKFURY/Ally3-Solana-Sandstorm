import * as spl from "@solana/spl-token";
import * as anchor from "@project-serum/anchor";
import * as collabs from "../collabs/js/src/generated";
import { WalletContextState } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
export async function transferCp(
  wallet: WalletContextState,
  contributorWalletAddress: string,
  xp: number
) {
  const bonkMint = new anchor.web3.PublicKey(
    "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"
  );
  const leaderTokenAcc = await spl.getAssociatedTokenAddress(
    bonkMint,
    wallet.publicKey
  );
  const [gitRepoPda, gitbump] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("git_repo_xp_pool"), wallet.publicKey.toBuffer()],
    collabs.PROGRAM_ID
  );
  let contributorPubkey = new anchor.web3.PublicKey(contributorWalletAddress);
  const [contributorPda, bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("contributor"), contributorPubkey.toBuffer()],
    collabs.PROGRAM_ID
  );

  const ix = collabs.createTransferXpToContributorInstruction(
    {
      leader: wallet.publicKey,
      gitRepoXpPoolAccount: gitRepoPda,
      contributorAccount: contributorPda,
    },
    {
      xpToTransfer: xp,
    }
  );

  const tx = new anchor.web3.Transaction();
  tx.add(ix);
  const sig = await wallet.sendTransaction(
    tx,
    new anchor.web3.Connection("https://rpc.helius.xyz/?api-key=52d3aae3-07be-4900-a393-49d36a260649")
  );
  console.log(sig);
}
