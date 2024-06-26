

export default function Order({ close,count, add }) {
  return (
    <div
      onClick={close}
      className="fixed z-10 top-0 left-0 w-full h-full bg-zinc-800/80 flex justify-center items-center"
    >
      <div 
      onClick={e => e.stopPropagation()}
      
      className="bg-gray-50 h-auto w-96 rounded shadow-xl p-3">
        <div className="pb-2">
          <h1 className="text-2xl font-bold text-red-400 py-3 ">Menu</h1>
        </div>
        <div className="grid gap-3 grid-cols-2">
          <button 
             onClick={add}         
          className="flex flex-col p-2 items-center bg-red-200 hover:bg-red-300 rounded shadow-xl">
            <span className="text-zinc-900 uppercase font-semibold">Sushi 🍣</span>
            <span className="font-mono">5$</span>
          </button>
          <button
           onClick={add} 
           className="flex flex-col p-2 items-center bg-red-200 hover:bg-red-300 rounded shadow-xl">
            <span className="text-zinc-900 uppercase font-semibold">Onigiri 🍙</span>
            <span className="font-mono">2$</span>
          </button>
          <button 
           onClick={add} 
          className="flex flex-col p-2 items-center bg-red-200 hover:bg-red-300 rounded shadow-xl">
            <span className="text-zinc-900 uppercase font-semibold">Ramen 🍜</span>
            <span className="font-mono">10$</span>
          </button>
          <button
           onClick={add}  
          className="flex flex-col p-2 items-center bg-red-200 hover:bg-red-300 rounded shadow-xl">
            <span className="text-zinc-900 uppercase font-semibold">Dango 🍡</span>
            <span className="font-mono">10$</span>
          </button>
          <button 
           onClick={add} 
          className="flex flex-col p-2 items-center bg-red-200 hover:bg-red-300 rounded shadow-xl">
            <span className="text-zinc-900 uppercase font-semibold">Beer 🍺</span>
            <span className="font-mono">5$</span>
          </button>
          <button
           onClick={add}  
          className="flex flex-col p-2 items-center bg-red-200 hover:bg-red-300 rounded shadow-xl">
            <span className="text-zinc-900 uppercase font-semibold">Soda 🥤</span>
            <span className="font-mono">3$</span>
          </button>
        </div>
        <div className="py-3  flex flex-row-reverse items-center">
            <button
            onClick={close} 
            className="bg-red-500  hover:bg-red-600 hover:animate-none p-2 rounded-lg drop-shadow-2xl flex flex-row">
             <span className="text-white font-semibold">Thats it</span>
            </button>
            <p className="pr-2 font-semibold">Articles({count})</p>
            </div>
      </div>
    </div>
  );
}
