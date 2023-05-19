import Navbar from "../Navbar";
import "../component.css";

const LoginPage = () => {
  return (
    <>
      <div>
        <Navbar/>
        <div className="flex">
          <div className="flex flex-col m-auto w-[20rem] h-[40rem] md:m-auto lg:m-auto md:w-[22rem] lg:w-[25rem] lg:h-[40rem] bg-pink-100 rounded-lg">
            <h1 className="text-red-900 text-xl font-bold mx-auto mt-10">Sign In</h1>
            <div className="w-[19rem] mx-auto mt-14">
              <p className="text-grey-200 ml-4">Email :</p>
              <input type="email" placeholder="" className="w-[17rem] ml-4 lg:ml-0 xl:ml-0 lg:w-[20rem] rounded-lg mt-3"/>
              <p className="text-grey-200 mt-8 ml-4">Password :</p>
              <input type="password" placeholder="" className="w-[17rem] ml-4 lg:mx-auto xl:mx-auto lg:w-[20rem] rounded-lg mt-3"/>
          </div>
          <div className="mx-auto mt-5">
            <button className="w-60 bg-pink-400 py-2 rounded-full hover:bg-pink-500 hover:text-white hover:font-bold">Sign In</button>
          </div>
          <div className="mx-auto mt-5 flex gap-x-5">
            <input type="checkbox" className="m-auto"/>
            <p className="m-auto">Remember Me</p>
          </div>
          <div className="mx-auto mt-8 flex gap-x-5">
            <div className="w-20 h-[2px] bg-slate-400 my-auto"></div>
            <p className="my-auto text-slate-400">or Sign In With</p>
            <div className="w-20 h-[2px] bg-slate-400 my-auto"></div>
          </div>
          <div className="mx-auto mt-5 flex gap-x-5">
            <button className="bg-blue-100 py-2 px-10 rounded-xl">Login With Google</button>
          </div>
          <div className="mx-auto mt-5 flex gap-x-5">
            <p className="text-pink-500">Forget Password?</p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage