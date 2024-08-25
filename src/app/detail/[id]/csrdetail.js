"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Detailcsr({ meme }) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [generatedMemeUrl, setGeneratedMemeUrl] = useState(null);

  const generateMeme = () => {
    const username = "XunainAli1";
    const password = "xunainali";

    axios
      .post(
        `https://api.imgflip.com/caption_image?template_id=${meme.id}&username=${username}&password=${password}&text0=${text1}&text1=${text2}&gt`
      )
      .then((res) => {
        setGeneratedMemeUrl(res.data.data.url); // Set the generated meme URL
        setText1("")
        setText2("")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center mt-2">
      <div className="w-96 bg-white rounded-lg shadow-lg">
        <Card className="w-full flex flex-col items-center p-4">
          {generatedMemeUrl ? ( // Conditionally render the generated meme
            <Image
              className="rounded-lg object-cover h-72 w-full"
              width={300}
              src={generatedMemeUrl}
              height={100}
              alt="Generated Meme"
            />
          ) : (
            <Image
              className="rounded-lg object-cover h-72 w-full"
              width={300}
              src={meme.url}
              height={100}
              alt={meme.name}
            />
          )}
          <div className="flex flex-col gap-4 mt-4 w-full">
            <input
              type="text"
              className="w-full p-2 border text-center border-gray-300 rounded-md focus:outline-none focus:border-blue-500 shadow-sm"
              placeholder="Enter text 1"
              onChange={(e) => setText1(e.target.value)}
              value={text1}
            />
            <input
              type="text"
              className="w-full p-2 text-center border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 shadow-sm"
              placeholder="Enter text 2"
              onChange={(e) => setText2(e.target.value)}
              value={text2}
            />
          </div>
          <Button
            className="px-2 py-2 mt-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={generateMeme}
          >
            Generate Meme
          </Button>
          <Link href={`/`}>
            <div className="flex items-center justify-center">
              <Button className="px-2 py-2 mt-3 bg-orange-400 text-white rounded-md hover:bg-orange-500">
                Back to Main Page
              </Button>
            </div>
          </Link>
        </Card>
      </div>
    </div>
  );
}
