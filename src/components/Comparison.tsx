import { XCircle, CheckCircle2 } from 'lucide-react';

export const Comparison = () => {
    return (
        <section id="comparison" className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full z-0" />

            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Pare de pagar 'Aluguel' todo mês para vender.
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Compare e veja a diferença brutal de economia e liberdade.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* ColdConnect List */}
                    <div className="glass p-8 rounded-3xl border border-primary/20">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            ColdConnect<span className="text-primary">.</span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle2 className="text-primary" size={24} />
                                <span className="text-lg">Pagamento Único/Anual</span>
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle2 className="text-primary" size={24} />
                                <span className="text-lg">Envios Ilimitados</span>
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle2 className="text-primary" size={24} />
                                <span className="text-lg">Roda no Navegador</span>
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <CheckCircle2 className="text-primary" size={24} />
                                <span className="text-lg">Automação Humana</span>
                            </li>
                        </ul>
                    </div>

                    {/* Outros Bots List */}
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 opacity-70">
                        <h3 className="text-2xl font-bold text-gray-400 mb-6">Concorrentes</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <XCircle className="text-red-500" size={24} />
                                <span className="text-lg line-through">Mensalidade Eterna</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <XCircle className="text-red-500" size={24} />
                                <span className="text-lg line-through">Limite de Disparos</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <XCircle className="text-red-500" size={24} />
                                <span className="text-lg line-through">Exige PC Ligado</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <XCircle className="text-red-500" size={24} />
                                <span className="text-lg line-through">Risco de Bloqueio</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
