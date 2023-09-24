import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Header from "./Header";

const Card = () => {
  return (
    <Link
      className="w-full md:w-[22%] mb-5 p-2 bg-white border border-gray-100 rounded-xl shadow-lg flex flex-col"
      href={""}
    >
      <div className="flex flex-col items-center mt-2 space-y-2">
        <Image
          className="rounded-xl shadow-lg"
          src={"/pfp_2.png"}
          width={250}
          height={250}
          alt="nft"
        />
        <p className="text-lg font-medium">Faceless PFP</p>
      </div>
    </Link>
  );
};

export default function User({ username }: { username: string }) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
  const [twitter, setTwitter] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const tags = ["superteam member", "chad dev", "airdrop hunter"];
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content="sonate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-[100vh] max-w-full bg-[#F8F7FF]">
        <Header />
        <div className="flex flex-col sm:flex-row items-center p-8 pt-20 px-2 justify-center bg-[#fefefe] sm:space-x-10 rounded border-t-[1px] border-gray-300">
          <Image
            // loader={() => avatar}
            src={"/pfp_1.png"}
            width="250"
            height="250"
            alt="sonate"
            className="flex sm:mr-3 justify-center mb-5 sm:mb-0 rounded-full"
          />
          <span className="flex flex-col text-center sm:text-left text-2xl font-semibold whitespace-nowrap">
            <p className="font-bold text-5xl mb-1">Neel Patel</p>
            <p className="text-gray-700 font-medium text-xl mb-4">
              Building @sonate 🚀
            </p>
            <div className="flex flex-row justify-center sm:justify-start space-x-2">
              <Link
                href={"https://twitter.com/" + twitter}
                className="p-2 w-fit text-sm border border-gray-700 rounded-full hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-white"
              >
                <BsTwitter size={20} />
              </Link>
              <Link
                href={"mailto:" + email}
                className="p-2 w-fit text-sm border border-gray-700 rounded-full hover:bg-orange-600 hover:border-orange-600 hover:text-white"
              >
                <FiMail size={20} />
              </Link>
              <Link
                href={"mailto:" + email}
                className="w-fit text-sm border border-gray-700 rounded-full hover:bg-orange-600 hover:border-orange-600 hover:text-white"
              >
                <Image
                  src="/solarplex.png"
                  height={36}
                  width={36}
                  alt="social"
                />
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mt-2 space-y-1 md:space-x-1">
              {tags.map((tag: string, index: any) => (
                <p
                  key={index}
                  className="w-fit p-1 px-2 text-base font-medium bg-orange-600/30 border border-orange-600 rounded-full"
                >
                  {tag}
                </p>
              ))}
            </div>
            <div className="flex flex-auto md:justify-start justify-center">
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="block w-fit mt-4 md:mt-2 text-orange-600 hover:text-white border border-gray-300 hover:bg-orange-600 focus:ring-1 focus:outline-none focus:ring-orange-600 font-medium rounded-2xl text-sm px-4 p-1 text-center"
                type="button"
                onClick={() => {
                  setModal(true);
                }}
              >
                Tip me
              </button>
            </div>
            <div
              id="authentication-modal"
              aria-hidden="true"
              className={`${
                modal ? "flex" : "hidden"
              } fixed justify-center items-center backdrop-blur-sm z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
            >
              <div className="relative w-full max-w-md max-h-full">
                <div className="relative rounded-lg shadow bg-gray-900">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                    onClick={() => {
                      setModal(false);
                    }}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                      Reward your chad
                    </h3>
                    <form className="space-y-6" action="#">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Number which can make em happy
                        </label>
                        <input
                          type="number"
                          name="amount"
                          id="amount"
                          className="bg-gray-50 border border-orange-600 text-gray-900 text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5"
                          placeholder="4 SOL"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full text-white bg-orange-600 focus:ring-1 focus:outline-none focus:ring-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Send tip
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div className="p-5 md:p-10 space-y-2">
          <p className="text-xl font-semibold text-center md:text-start">
            Your top collection
          </p>
          <div className="flex flex-row flex-wrap items-center justify-between bg-[#F8F7FF]">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </>
  );
}
