import User from "@/views/User";
import * as Web3 from "@solana/web3.js";
import { useEffect } from "react";
import { getProgram, getUserAccountPk } from "@/utils/program";

interface UserAccount {
  profileImage: string;
  userName: string;
  name: string;
  bio: string;
  email: string;
  solarplex: string;
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
    const userData = await program.account.userAccount.fetch(
      getUserAccountPk(username)
    );
    const link = `https://${
      (userData as any).cid
    }.ipfs.w3s.link/${username}.json`;
    const response = await fetch(link);
    const parsedData: UserAccount = await response.json();
    console.log("parsedData", parsedData);
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

export default function Profile({ parsedData }: { parsedData: UserAccount }) {
  useEffect(() => {
    if (parsedData) console.log("userData", parsedData);
  }, [parsedData]);

  return <User parsedData={parsedData} />;
}
