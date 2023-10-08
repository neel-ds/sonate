import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface Nft {
  nft_id: string;
  description: string;
  collection: {
    collection_id: string;
    floor_prices: {
      value: number;
      payment_token: {
        symbol: string;
      };
    }[];
  };
}

interface ShyftNft {
  result: {
    nfts: {
      collection: {
        address: string;
      }
    }[];
  }
}

interface NftResponse {
  nfts: Nft[];
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const api = axios.create({
    baseURL: "https://api.simplehash.com/api/v0/nfts/owners",
    headers: {
      "x-api-key": process.env.SIMPLEHASH_API_KEY as string,
    },
  });
  const { address } = req.query;
  const shyftAPI = axios.create({
    baseURL: `https://api.shyft.to/sol/v2/nft/read_all?network=mainnet-beta&address=${address}`,
    headers: {
      "x-api-key": process.env.SHYFT_API_KEY as string,
    },
  });



  let tags = [];

  const { data: nfts } = await api.get("", {
    params: {
      chains: "solana",
      wallet_addresses: address,
    },
  });

  const { data: s } = await shyftAPI.get("");

  const shyftNfts = s as ShyftNft;

  const formattedNfts = nfts as NftResponse;

  const filteredNFTs = formattedNfts.nfts.filter((nft) => {
    const solFloorPrice = nft.collection.floor_prices.find(
      (price) => price.payment_token.symbol === "SOL"
    );
    return solFloorPrice;
  });


  if (filteredNFTs.length > 1) {
    tags.push("NFTdegen");
  }

  if (shyftNfts) {
    const filterNFT = shyftNfts.result.nfts.filter((nft: any) => {
      if (nft.collection.address === "E4ToMjm8YtRyfPUhZ7hxRMxe4J8FnSr9CcprytZBYFua") {
        tags.push("SuperTeam");
      }
      if (nft.collection.address === "J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w") {
        tags.push("MadLads");
      }
    });
  }


  return res.status(200).json(tags);
};
