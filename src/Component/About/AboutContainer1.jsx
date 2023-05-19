import { Link } from "react-router-dom";
import "../component.css"

const AboutContainer1 = () => {
  return (
    <>
      <div className="main-container flex flex-col">
        <div className="flex flex-col w-2/3 m-auto relative top-[-14rem]">
        <div className="m-auto flex flex-col bg-pink-300 p-4 rounded-full mb-7">
          <h1 className="m-auto text-4xl text-white font-semibold">About Us</h1>
          <h1 className="m-auto tracking-widest text-slate-600">Victoria Jewelry Shop</h1>
        </div>   
        <div className="m-auto text-center">
          <p>Victoria Jewellery adalah pusat perhiasan berlian di Surabaya yang menyediakan berbagai perhiasan berlian berkualitas dengan desain timeless, sehingga bisa dikenakan untuk jangka panjang maupun sebagai investasi.</p>
        </div>
        <div className="relative top-[24rem] right-16">
          <Link to="/" className="px-8 py-3 rounded-lg hover:bg-pink-500 tracking-wider text-black bg-pink-300 font-medium hover:text-white">SEE OUR SHOWROOM</Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default AboutContainer1;