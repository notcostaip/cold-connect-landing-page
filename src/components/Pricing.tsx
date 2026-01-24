import { Zap, Check, Shield, XCircle } from 'lucide-react';

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Oferta <span className="text-primary">Ice-Cold</span>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        A automação mais fria e eficiente do mercado.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch pt-8">


                    {/* Starter (R$ 147/ano) */}
                    <div className="p-8 rounded-3xl glass hover:border-primary/40 transition-all flex flex-col h-full group">
                        <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl group-hover:bg-primary/10 transition-colors">
                            <Shield size={24} className="text-gray-400 group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                        <p className="text-text-secondary text-sm mb-6">Acesso ao Software</p>
                        <div className="mb-6">
                            <span className="text-text-secondary line-through text-sm">R$ 297</span>
                            <div className="text-3xl font-bold text-white">R$ 147<span className="text-lg font-normal text-text-secondary">/ano</span></div>
                        </div>
                        <a href="https://pay.hub.la/Up8AVuCQozCQCh82xx5f" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 rounded-xl bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all mb-8">
                            Garantir Starter
                        </a>
                        <ul className="space-y-4 text-sm text-text-secondary flex-1">
                            <li className="flex gap-3"><Check size={18} className="text-white" /> Envios Ilimitados</li>
                            <li className="flex gap-3"><Check size={18} className="text-white" /> Contas Ilimitadas</li>
                            <li className="flex gap-3"><Check size={18} className="text-white" /> Spintax Dinâmico</li>
                            <li className="flex gap-3"><Check size={18} className="text-white" /> Bot Reply Básico</li>
                            <li className="flex gap-3"><Check size={18} className="text-white" /> Aquecimento Manual</li>
                            <li className="flex gap-3 text-gray-500"><XCircle size={18} className="text-gray-500" /> Sem Comunidade Networking</li>
                        </ul>
                    </div>

                    {/* Pro (R$ 297/ano - HERO CARD) */}
                    <div className="relative p-8 rounded-3xl glass border-primary/50 shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)] flex flex-col h-full transform md:-translate-y-8 animate-pulse-cyan">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-black text-xs font-bold px-6 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-cyan-500/20">
                            Mais Vendido
                        </div>

                        <div className="mb-4 p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-fit rounded-xl border border-primary/20">
                            <Zap size={24} className="text-primary fill-primary" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                        <p className="text-cyan-200 text-sm mb-6">Software + Inteligência</p>

                        <div className="mb-6">
                            <span className="text-cyan-200/60 line-through text-sm">R$ 597</span>
                            <div className="text-4xl font-bold text-white">R$ 297<span className="text-lg font-normal text-text-secondary">/ano</span></div>
                        </div>

                        <a href="https://pay.hub.la/XbHCgi9gJcmSUyZXv3U0" target="_blank" rel="noopener noreferrer" className="relative block w-full text-center py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all mb-8 group overflow-hidden">
                            <span className="relative z-10">Quero o Plano Pro</span>
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-1000 ease-in-out group-hover:left-[100%]" />
                        </a>

                        <ul className="space-y-4 text-sm text-white/90 flex-1">
                            <li className="flex gap-3 font-semibold text-white"><Check size={18} className="text-primary" /> Tudo do Plano Starter</li>
                            <li className="flex gap-3 font-semibold text-white"><Check size={18} className="text-primary" /> Contas Ilimitadas</li>
                            <li className="flex gap-3 text-white"><Check size={18} className="text-primary" /> Spintax com IA</li>
                            <li className="flex gap-3 text-white"><Check size={18} className="text-primary" /> Smart Reply (Triagem)</li>
                            <li className="flex gap-3 text-white"><Check size={18} className="text-primary" /> Aquecimento Automático</li>
                            <li className="flex gap-3 text-white"><Check size={18} className="text-primary" /> Comunidade Networking</li>
                        </ul>
                    </div>

                    {/* Business (R$ 397/ano) */}
                    <div className="p-8 rounded-3xl glass hover:border-primary/40 transition-all flex flex-col h-full group">
                        <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl group-hover:bg-primary/10 transition-colors">
                            <Shield size={24} className="text-gray-400 group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Business</h3>
                        <p className="text-text-secondary text-sm mb-6">Escala & Consultoria</p>
                        <div className="mb-6">
                            <span className="text-text-secondary line-through text-sm">R$ 997</span>
                            <div className="text-3xl font-bold text-white">R$ 397<span className="text-lg font-normal text-text-secondary">/ano</span></div>
                        </div>
                        <a href="https://pay.hub.la/FpYK69P803YXXDGGOZuK" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 rounded-xl bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all mb-8">
                            Entrar para o Business
                        </a>
                        <ul className="space-y-4 text-sm text-text-secondary flex-1">
                            <li className="flex gap-3"><Check size={18} className="text-primary" /> Tudo do Plano Pro</li>
                            <li className="flex gap-3"><Check size={18} className="text-primary" /> Contas Ilimitadas</li>
                            <li className="flex gap-3"><Check size={18} className="text-primary" /> Suporte Prioritário</li>
                            <li className="flex gap-3"><Check size={18} className="text-primary" /> Estratégia de Funil</li>
                            <li className="flex gap-3"><Check size={18} className="text-primary" /> Infraestrutura Ilimitada</li>
                        </ul>
                    </div>

                </div>

                {/* Guarantee Card */}
                <div className="mt-20 max-w-4xl mx-auto">
                    <div className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-primary/30 relative overflow-hidden">
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

                        {/* Shield Icon */}
                        <div className="relative z-10 flex-shrink-0">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center border border-primary/50 shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)] animate-pulse-cyan">
                                <Shield size={48} className="text-primary fill-primary/20" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="text-center md:text-left relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                7 Dias de Garantia Incondicional
                            </h3>
                            <p className="text-text-secondary text-lg leading-relaxed">
                                Seu risco é zero. Teste nossa ferramenta por 7 dias. Se não tiver resultados ou não gostar, devolvemos <span className="text-primary font-semibold">100% do seu dinheiro</span>. Sem perguntas.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
