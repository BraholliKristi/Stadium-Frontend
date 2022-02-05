export default function VideoHeader({url,title}){
    return(
        <header className="relative flex items-center justify-center h-96  overflow-hidden">
            <div
                className="relative z-30 p-5 text-2xl text-white italic font-bold bg-red-500 rounded-xl"
            >
                  <span className="flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-black opacity-100"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
                  </span>
                {title}
            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            >
                <source
                    src={url}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </header>
    );
}