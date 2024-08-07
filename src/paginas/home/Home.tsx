import homeLogo from "../../assets/home.jpg"
import "./Home.css"

function home() {
  return (
    <>
        <div className="bg-gray-900 text-white' : 'text-gray-300  hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium">
            <div className="container grid grid-cols-2 text-white">
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className="text-5xl font-bold">Seja bem vindo!</h2>
                    <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>

                    <div className="flex justify-around gap-4">
                        <button className="bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium">Ver postagens</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={homeLogo} alt="Logo Home" className="w-2/3" />
                </div>
            </div>
        </div>
    </>
  )
}

export default home