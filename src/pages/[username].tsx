import User from "@/components/User";
import * as Web3 from "@solana/web3.js";
import { getProgram, getUserAccountPk } from "@/utils/program";
import { use } from "react";

interface UserAccount {
  profileImage: string;
  userName: string;
  name: string;
  bio: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  twitterUrl: string;
  address: Web3.PublicKey;
}

export const getServerSideProps = async (context: any) => {
  const username = context.query.username;


  const wallet = Web3.Keypair.generate();
  const connection = new Web3.Connection(
    "https://api.devnet.solana.com",
    "confirmed"
  );

  try {
    const program = getProgram(connection, wallet);
    const userData = await program.account.userAccount.fetch(getUserAccountPk(username));
    const link = `https://${(userData as any).cid}.ipfs.w3s.link/${username}.json`;
    const response = await fetch(link);
    const parsedData: UserAccount = await response.json();

    return {
      props: {
        parsedData,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default function Profile({ userData }: { userData: UserAccount }) {
  return <User parsedData={userData} />;
}
