type LogoProps = {
  size: number;
  zIndex: number;
};

const Logo: React.FC<LogoProps> = ({ size, zIndex }) => {
  return (
    <div
      style={
        {
          "--size": size,
          "--z-index": zIndex,
        } as React.CSSProperties
      }
      id="logo"
    >
      <div className="letter">
        <div className="out"></div>
        <div className="outerEdge"></div>
        <div className="inner"></div>
        <div className="innerEdge"></div>
        <div className="bg"></div>
      </div>
    </div>
  );
};

export default Logo;
