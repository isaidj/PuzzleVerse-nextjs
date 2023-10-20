const WinModal = ({ handlePlayAgain }: { handlePlayAgain: () => void }) => {
  return (
    <div id="winModal" className="hidden">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white rounded-lg p-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className=" text-slate-400 text-3xl font-bold text-center">
              You win!
            </h1>
            <h2 className=" text-slate-400 text-tiny font-bold text-center">
              Congratulations you have completed the puzzle.
            </h2>
            <button
              className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={() => {
                handlePlayAgain();
              }}
            >
              Play again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WinModal;
