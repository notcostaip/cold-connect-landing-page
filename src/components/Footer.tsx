import { MessageCircle } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-cardBorder bg-background">
            <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-1 font-bold text-2xl tracking-tighter text-white mb-2">
                            ColdConnect<span className="text-primary text-3xl leading-none">.</span>
                        </div>
                        <p className="text-text-secondary text-sm">
                            Automatizando o futuro das suas vendas.
                        </p>
                    </div>



                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                        <div className="flex gap-6 text-sm text-text-secondary">
                            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        </div>

                        <div className="hidden md:block w-px h-6 bg-white/10" />

                        <div className="flex items-center gap-4">
                            <a href="https://wa.me/5561994503567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-white transition-colors">
                                <MessageCircle size={16} /> Suporte
                            </a>
                            <a href="https://app.hub.la/group_affiliate/71ujCkPptxPaODZcM6GO" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-lg text-sm font-semibold transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                Quero ser um afiliado
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-cardBorder text-xs text-text-secondary text-center">
                    <p>© {new Date().getFullYear()} ColdConnect. Todos os direitos reservados.</p>
                    <p className="mt-2 text-text-secondary/60">
                        Este site não é afiliado ao Facebook ou Meta Platforms, Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
};
