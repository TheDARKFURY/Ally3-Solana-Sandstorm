import * as spl from "@solana/spl-token";
import * as anchor from "@project-serum/anchor";
import * as collabs from "../collabs/js/src/generated";
import { WalletContextState } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
export async function addLeader(wallet: WalletContextState, githubUrl: string) {
  const bonkMint = new anchor.web3.PublicKey(
    "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"
  );
  const leaderTokenAcc = await spl.getAssociatedTokenAddress(
    bonkMint,
    wallet.publicKey
  );

  const [gitRepoPda, bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("git_repo_xp_pool"), wallet.publicKey.toBuffer()],
    collabs.PROGRAM_ID
  );
  console.log("leader:", wallet.publicKey.toBase58());
  const [BonkEscrowpda, Bonkbump] =
    anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("total_bonk_stake"), wallet.publicKey.toBuffer()],
      collabs.PROGRAM_ID
    );

  const stakeAmount = new anchor.BN(0.1);

  const ix = collabs.createCreateGitRepoXpPoolWithStakeInstruction(
    {
      leader: wallet.publicKey,
      leaderTokenAcc: leaderTokenAcc,
      systemProgram: anchor.web3.SystemProgram.programId,
      tokenProgram: spl.TOKEN_PROGRAM_ID,
      gitRepoXpPoolAccount: gitRepoPda,
      bonkMint: bonkMint,
      bonkEscrowTokenAcc: BonkEscrowpda,
    },
    {
      gitRepoUrl: githubUrl,
      stakeAmount: stakeAmount,
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
