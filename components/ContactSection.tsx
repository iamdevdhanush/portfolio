import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import SocialButton from './SocialButton';

const ContactSection = () => {
  return (
    <section id="contact" className="mb-20 scroll-mt-28">
      <div className="bg-gradient-to-b from-zinc-900/50 to-black border border-white/5 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold text-zinc-100 mb-4">Let's Connect</h2>
        <p className="text-sm text-zinc-400 mb-8 max-w-md mx-auto leading-relaxed">
          Interested in collaborating or discussing opportunities? I'm always open to conversations about backend engineering, AI systems, and building things that matter.
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <SocialButton icon={<Mail className="w-5 h-5" />} href="mailto:dhanushdprabhu18@gmail.com" />
          <SocialButton icon={<Github className="w-5 h-5" />} href="https://github.com/iamdevdhanush" />
          <SocialButton icon={<Linkedin className="w-5 h-5" />} href="https://www.linkedin.com/in/dhanushdprabhu/" />
          <SocialButton icon={<FileText className="w-5 h-5" />} href="/Dhanush D Prabhu.pdf" />
        </div>
        <a
          href="mailto:dhanushdprabhu18@gmail.com"
          className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors bg-zinc-800/50 hover:bg-zinc-800 px-5 py-2.5 rounded-lg border border-zinc-700/50"
        >
          <Mail className="w-4 h-4" />
          dhanushdprabhu18@gmail.com
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
