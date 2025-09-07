import React from "react";


const curtainAnim = {
  animation: 'curtain-open 2s cubic-bezier(0.77,0,0.18,1) forwards',
};
const screenAnim = {
  animation: 'screen-pop 1.2s cubic-bezier(0.77,0,0.18,1)',
  boxShadow: '0 0 40px 10px #e52d27, 0 0 80px 20px #fff3',
  background: 'linear-gradient(90deg, #fff 60%, #e52d27 100%)',
  color: '#222',
};

const seatColors = [
  'bg-[#e52d27]', // red
  'bg-[#fbbf24]', // yellow
  'bg-[#10b981]', // green
  'bg-[#3b82f6]', // blue
  'bg-[#a78bfa]', // purple
];

const Theaters = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Animated background bubbles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30 blur-2xl animate-pulse"
            style={{
              width: `${80 + Math.random() * 120}px`,
              height: `${80 + Math.random() * 120}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              background: `linear-gradient(135deg, #e52d27, #fbbf24, #10b981, #3b82f6, #a78bfa)`
            }}
          />
        ))}
      </div>
      <div className="relative w-[600px] h-[400px] bg-[#222] rounded-t-[30px] rounded-b-[60px] shadow-2xl flex flex-col items-center justify-end overflow-hidden">
        {/* Curtains */}
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-br from-[#b31217] to-[#e52d27] z-20 rounded-tl-[30px] rounded-bl-[60px]"
          style={{ width: '50%', ...curtainAnim, animationDelay: '0.2s', animationName: 'curtain-open' }}
        />
        <div
          className="absolute top-0 right-0 h-full bg-gradient-to-br from-[#b31217] to-[#e52d27] z-20 rounded-tr-[30px] rounded-br-[60px]"
          style={{ width: '50%', ...curtainAnim, animationDelay: '0.2s', animationName: 'curtain-open' }}
        />
        {/* Screen */}
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-16 text-3xl font-extrabold rounded-2xl flex items-center justify-center z-10 tracking-widest animate-glow"
          style={screenAnim}
        >
          <span className="animate-text-gradient bg-gradient-to-r from-[#e52d27] via-[#fbbf24] to-[#10b981] bg-clip-text text-transparent">THEATER</span>
        </div>
        {/* Seats */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col gap-2 z-10">
          {[...Array(5)].map((_, row) => (
            <div className="flex gap-2" key={row}>
              {[...Array(10)].map((_, col) => {
                const color = seatColors[(row + col) % seatColors.length];
                return (
                  <div
                    key={col}
                    className={`w-7 h-7 ${color} rounded-t-[8px] rounded-b-[12px] shadow-lg cursor-pointer animate-seat-pop`}
                    style={{
                      animationDelay: `${0.2 + (row * 0.08 + col * 0.04)}s`,
                      animationDuration: '0.7s',
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
        {/* Keyframes for animation */}
        <style>{`
          @keyframes curtain-open {
            0% { width: 50%; }
            100% { width: 0; }
          }
          @keyframes screen-pop {
            0% { transform: translateX(-50%) scale(0.7); opacity: 0; }
            100% { transform: translateX(-50%) scale(1); opacity: 1; }
          }
          @keyframes seat-pop {
            0% { transform: scale(0.2); opacity: 0; }
            80% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-seat-pop {
            animation-name: seat-pop;
            animation-timing-function: cubic-bezier(0.77,0,0.18,1);
            animation-fill-mode: both;
          }
          .animate-glow {
            animation: glow 2s ease-in-out infinite alternate;
          }
          @keyframes glow {
            0% { box-shadow: 0 0 40px 10px #e52d27, 0 0 80px 20px #fff3; }
            100% { box-shadow: 0 0 80px 20px #fbbf24, 0 0 120px 40px #10b98144; }
          }
          .animate-text-gradient {
            background-size: 200% 200%;
            animation: text-gradient 2.5s linear infinite alternate;
          }
          @keyframes text-gradient {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Theaters;
