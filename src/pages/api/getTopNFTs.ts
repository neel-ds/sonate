import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface Nft {
  nft_id: string;
  collection: {
    floor_prices: {
      value: number;
      payment_token: {
        symbol: string;
      };
    }[];
  };
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

  const { data: nfts } = await api.get("", {
    params: {
      chains: "solana",
      wallet_addresses: address,
    },
  });

  const formattedNfts = nfts as NftResponse;

  const filteredNFTs = formattedNfts.nfts.filter((nft) => {
    const solFloorPrice = nft.collection.floor_prices.find(
      (price) => price.payment_token.symbol === "SOL"
    );

    return solFloorPrice && solFloorPrice.value > 100000000;
  });

  if (filteredNFTs.length === 0) {
    return res.status(404).json({ message: "No NFTs found" });
  } else {
    if (filteredNFTs.length > 5) {
      return res.status(200).json(filteredNFTs.slice(0, 5));
    }
    return res.status(200).json(filteredNFTs);
  }
};
