const Footer = () => {
  return (
    <footer className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
      <p>© {new Date().getFullYear().toString()} Dhanush D Prabhu.</p>
      <div className="flex gap-4">
        <span>Built with React · TypeScript · Tailwind</span>
      </div>
    </footer>
  );
};

export default Footer;
