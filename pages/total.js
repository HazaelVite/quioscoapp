import Layout from "../layout/Layout"

export default function Total() {
  return(
    <Layout pagina="Total y Confirmar Pedido">
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

      <form>
        <div>
          <label 
            htmlFor="nombre"
            className="block text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input 
            id="nombre"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: {''} <span className="font-bold">$200</span>
          </p>
        </div>
        <div className="mt-5">
          <input 
            type="button"
            className="bg-indigo-600 hover:bg-indigo-700 w-full lg:w-auto px-5 py-2 rounded uppercase font-bold
             text-white text-center cursor-pointer"
            value="Confirmar pedido"
          />
        </div>
      </form>
    </Layout>
  )
}