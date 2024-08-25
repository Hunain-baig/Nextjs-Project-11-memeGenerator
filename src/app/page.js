import Image from "next/image";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default async function Home() {

  const res = await axios("https://api.imgflip.com/get_memes");
  const products = await res.data.data.memes
  console.log(products);
  
  
 

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between cursor-pointer">
      <h1 className="text-2xl font-bold mt-2 text-blue-700">Meme Generator</h1>
      <div className="flex flex-wrap justify-center gap-8 mt-5">
        {products.map((item, key) => {
          return (
            <div
              key={key}
              className="w-80 mt-5 mb-5 flex flex-col items-center rounded-lg"
            >
              <Card className="w-full flex flex-col items-center p-1">
                <Image
                  className="rounded-xl object-cover h-72 w-full"
                  width={200}
                  src={item.url}
                  height={100}
                  alt={item.name}
                />
                <CardHeader>
                  <CardTitle className="text-sm">{item.name}</CardTitle>
                </CardHeader>
                <Link 
                href={`/detail/${item.id}`}
                >
                  <div className="flex items-center justify-center mb-4 mt-1">
                    <Button>Click to Generate Meme</Button>
                  </div>
                </Link>
              </Card>
            </div>
          );
        })}
      </div>
    </main>
  );
}
