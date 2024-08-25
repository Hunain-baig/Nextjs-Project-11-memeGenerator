import axios from "axios";
import Detailcsr from "./csrdetail";


export default async function Detail({params}) {
    const { id } = params;

    const res = await axios("https://api.imgflip.com/get_memes");
    const memes = res.data.data.memes;
    const meme = memes.find((meme) => meme.id === id)

    

  return (
    <>
      <h1 className="text-center mt-5 mb-5 text-3xl font-bold text-blue-700">
       Hey! Generate Meme Here
      </h1>
      <Detailcsr meme={meme} />
    </>
  );
}
