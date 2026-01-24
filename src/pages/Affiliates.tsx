import { ArrowLeft, Check, Copy, DollarSign, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

export const Affiliates = () => {
    return (
        <div className="relative min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <a href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-12 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Voltar para Home
                </a>

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Parceria <span className="text-primary">Solidificada</span>
                        </h1>
                        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                            Transforme sua influência em renda recorrente. Indique o ColdConnect e ganhe <span className="text-white font-bold">40% de comissão</span> por cada venda.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Commission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass p-8 rounded-3xl border border-primary/20 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-3 bg-primary/10 rounded-bl-2xl">
                            <DollarSign className="text-primary" size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">40% de Comissão</h2>
                        <p className="text-text-secondary mb-6">
                            Para cada licença vendida através do seu link exclusivo, você recebe quase metade do valor. Sem limites de ganhos.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-white/80">
                                <Check size={18} className="text-primary" /> Pagamentos pontuais
                            </li>
                            <li className="flex items-center gap-3 text-white/80">
                                <Check size={18} className="text-primary" /> Dashboard de vendas
                            </li>
                            <li className="flex items-center gap-3 text-white/80">
                                <Check size={18} className="text-primary" /> Alta conversão
                            </li>
                        </ul>
                    </motion.div>

                    {/* Bonus Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass p-8 rounded-3xl border border-purple-500/20 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
                        <div className="absolute top-0 right-0 p-3 bg-purple-500/10 rounded-bl-2xl">
                            <Gift className="text-purple-400" size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Bônus Exclusivo</h2>
                        <p className="text-text-secondary mb-6">
                            Não sabe como vender? Nós te entregamos o ouro.
                        </p>
                        <div className="bg-black/40 p-4 rounded-xl border border-white/10 mb-4">
                            <div className="flex items-center gap-2 text-purple-300 font-semibold mb-2">
                                <Copy size={16} /> Script Copy & Paste
                            </div>
                            <p className="text-sm text-gray-400">
                                Receba nossos melhores scripts de abordagem e fechamento. É só copiar, colar e lucrar.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button className="px-8 py-4 bg-primary text-black font-bold text-lg rounded-xl hover:bg-primary-hover shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all hover:scale-105 active:scale-95 group relative overflow-hidden">
                        <span className="relative z-10">Quero ser um Afiliado</span>
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 transition-all duration-1000 ease-in-out group-hover:left-[100%]" />
                    </button>
                    <p className="mt-4 text-sm text-text-secondary">
                        Vagas limitadas para o programa de parceiros.
                    </p>
                </div>
            </div>
        </div>
    );
};
