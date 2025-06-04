
interface BackgroundProps {
    children?: React.ReactNode;
    className?: string;
}

const Background: React.FC<BackgroundProps> = ({ children, className }) => {
  return (
    <div 
        className={`relative overflow-hidden ${className ? ` ${className}` : ''}`}
        style={{ height: className === 'h-screen' ? '100dvh' : ''}}
    >
      <div className="inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/imgs/background.png')" }}></div>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
        poster="/assets/imgs/background.png"
      >
        <source src="/assets/videos/background.mp4" type="video/mp4" />
      </video>

      {children}
    </div>
  );
}

export default Background;
