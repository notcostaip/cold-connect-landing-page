import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-cardBorder py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-1 font-bold text-2xl tracking-tighter text-white">
                    ColdConnect<span className="text-primary text-3xl leading-none">.</span>
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
                    <a href="#features" className="hover:text-white transition-colors relative group">
                        Vantagens
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#comparison" className="hover:text-white transition-colors relative group">
                        Comparativo
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#pricing" className="hover:text-white transition-colors relative group">
                        Planos
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </nav>

                {/* Desktop CTAs */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="https://app.coldconnect.site" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 text-sm font-semibold text-white border border-cardBorder rounded-lg hover:bg-cardBorder transition-all">
                        Acessar Painel
                    </a>
                    <button
                        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 relative group overflow-hidden"
                    >
                        <span className="relative z-10">Garantir Licença Anual</span>
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-1000 ease-in-out group-hover:left-[100%]" />
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-cardBorder overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-text-secondary">Vantagens</a>
                            <a href="#comparison" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-text-secondary">Comparativo</a>
                            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-text-secondary">Planos</a>
                            <hr className="border-cardBorder" />
                            <a href="https://app.coldconnect.site" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 font-semibold text-white border border-cardBorder rounded-lg">
                                Acessar Painel
                            </a>
                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="w-full py-3 font-semibold text-white bg-primary rounded-lg shadow-lg shadow-primary/20 relative group overflow-hidden"
                            >
                                <span className="relative z-10">Garantir Licença Anual</span>
                                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-1000 ease-in-out group-hover:left-[100%]" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
