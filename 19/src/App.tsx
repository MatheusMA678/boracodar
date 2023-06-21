import { Avatar } from "./components/Avatar";
import { motion } from "framer-motion";
import { Phone, ShieldPlus } from "@phosphor-icons/react";

export function App() {
  return (
    <main className="p-8 h-screen flex items-center justify-center bg-gray-200 font-inter">
      <motion.section
        drag
        className={`flex flex-col justify-between w-[500px] h-[400px] rounded-3xl bg-white shadow-lg px-10 py-6 text-purple-dark`}
      >
        <div className="w-[150px] h-2 rounded-xl bg-gray-light self-center"></div>
        <section>
          <h1 className="font-bold text-2xl">
            Encontre <span className="text-purple-medium">Boris</span> no local
            de partida
          </h1>
          <span className="font-medium">Chega em 3 minutos (800 metros)</span>
        </section>
        <section className="flex w-full justify-between items-center">
          <Avatar />
          <div>
            <h2 className="font-bold text-2xl">BCD0D19</h2>
            <span className="">Honda Civic Roxo</span>
          </div>
        </section>
        <form className="flex items-center w-full gap-4">
          <input
            type="text"
            placeholder="Enviar mensagem para Boris..."
            className="bg-gray-light placeholder:text-purple-dark text-sm font-medium px-4 py-2 rounded-xl outline-purple-medium transition flex-1"
          />
          <div className="flex items-center gap-2 text-3xl">
            <button>
              <Phone weight="fill" />
            </button>
            <button>
              <ShieldPlus weight="fill" />
            </button>
          </div>
        </form>
      </motion.section>
    </main>
  );
}
