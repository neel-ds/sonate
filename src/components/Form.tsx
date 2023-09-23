import Image from "next/image";
import { useState } from "react";

export default function Form() {
  const [image, setImage] = useState("");
  const [icon, setIcon] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [cubikUrl, setCubikUrl] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  return (
    <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-100 sm:text-4xl lg:text-5xl">
            Your social flex
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-gray-300 leading-relaxed">
            Brag your work to the most exciting audience on Solana and earn
            hefty rewards in SOL. Build, Share & Grow!
          </p>
        </div>
        <div className="max-w-5xl mx-auto mt-6 sm:mt-8">
          <div className="mt-6 overflow-hidden bg-white rounded-xl">
            <div className="px-6 py-12 sm:p-12">
              <form action="#" method="POST">
                <div className="flex justify-center mb-5">
                  <div className="flex flex-row items-center space-x-2">
                    <Image
                      className="mx-auto rounded-xl border border-orange-600"
                      src={image !== "" ? image : "/profile.png"}
                      alt="profile"
                      width={150}
                      height={150}
                    />
                    <div className="flex flex-col space-y-2">
                      <label className="text-base font-medium text-gray-900">
                        Upload your pfp
                      </label>
                      <input
                        className="p-2 text-xs text-gray-900 border border-gray-300 rounded-xl cursor-pointer bg-gray-50 focus:outline-none"
                        id="image"
                        name="image"
                        type="file"
                        accept={"image/*"}
                        onChange={(e) => {
                          // setImage(URL.createObjectURL(e.target.files[0]));
                        }}
                        required
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Your name{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        placeholder="Enter your full name"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        className="w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-orange-600 caret-orange-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder="javier@solana.com"
                        className="w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-orange-600 caret-orange-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Username{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        value={userName}
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                        placeholder="Enter a short username"
                        className="w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-orange-600 caret-orange-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Twitter handle{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="twitterUrl"
                        id="twitterUrl"
                        value={twitterUrl}
                        onChange={(e) => {
                          setTwitterUrl(e.target.value);
                        }}
                        placeholder="Enter your twitter handle"
                        className="w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-orange-600 caret-orange-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Your cubik profile{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="cubikUrl"
                        id="cubikUrl"
                        value={cubikUrl}
                        onChange={(e) => {
                          setCubikUrl(e.target.value);
                        }}
                        placeholder="Enter your profile link"
                        className="w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-orange-600 caret-orange-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Bio{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <textarea
                        name="bio"
                        id="bio"
                        value={bio}
                        onChange={(e) => {
                          setBio(e.target.value);
                        }}
                        placeholder="Be unique, short and pitch yourself"
                        className="w-full px-4 py-2 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-orange-600 caret-orange-600"
                        rows={4}
                      ></textarea>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      onClick={() => {}}
                      className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-orange-600 border border-transparent rounded-md focus:outline-none hover:bg-orange-700 focus:bg-orange-700"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}