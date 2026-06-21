const Background = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    <div className="absolute inset-0 bg-black" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,_rgba(56,189,248,0.08),_rgba(0,0,0,0)_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,_rgba(14,165,233,0.03),_rgba(0,0,0,0)_60%)]" />
  </div>
);

export default Background;
