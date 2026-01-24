import { Shield, Cloud, Users, Bot, Database, BarChart, X, Check, Mic, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const featuresList = [
    {
        icon: Shield,
        title: 'Escudo Spintax',
        description: 'Variação automática de texto. Cada mensagem é única para o algoritmo.'
    },
    {
        icon: Cloud,
        title: 'Liberdade na Nuvem',
        description: 'Roda no navegador do celular ou PC. Sem instalações .exe.'
    },
    {
        icon: Users,
        title: 'Multiplique a Força',
        description: 'Conecte números ilimitados e escale sua operação.'
    },
    {
        icon: Bot,
        title: 'SDR Automático',
        description: 'O bot qualifica o lead e só te chama quando a venda estiver pronta.'
    },
    {
        icon: Database,
        title: 'Extração de Leads',
        description: 'Encontre contatos qualificados do Google Maps e instancie sua base.'
    },
    {
        icon: BarChart,
        title: 'Foco em Conversão',
        description: 'Relatórios de quem respondeu, não apenas de quem recebeu.'
    }
];

export const Features = () => {
    return (
        <section id="features" className="py-24 bg-background relative overflow-hidden">
            {/* Background Fog Animation */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.03),transparent)] animate-pulse-slow pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Muito Mais que "Disparos": <br /> <span className="text-primary">Uma Estrutura Completa de Prospecção Fria.</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-3xl mx-auto">
                        Esqueça softwares instaláveis e complexos. O ColdConnect roda no seu navegador e transforma números frios em leads aquecidos automaticamente.
                    </p>
                </div>

                {/* Block A: Philosophy */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-4">O Fim da Ligação Fria. <span className="text-primary block">O Início da Conexão Real.</span></h3>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            Ninguém atende números desconhecidos. O ColdConnect coloca sua oferta direto no bolso do lead com 98% de taxa de abertura.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center gap-6"
                    >
                        {/* Card: Missed Call */}
                        <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl w-48 text-center backdrop-blur-sm grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <X className="text-red-500" size={24} />
                            </div>
                            <p className="text-white font-semibold mb-1">Chamada Perdida</p>
                            <span className="text-xs text-red-300">Ignorado</span>
                        </div>

                        {/* Card: WhatsApp Message */}
                        <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-2xl w-48 text-center backdrop-blur-sm scale-110 shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]">
                            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check className="text-green-500" size={24} />
                            </div>
                            <p className="text-white font-semibold mb-1">Nova Mensagem</p>
                            <span className="text-xs text-green-300">Lido agora</span>
                        </div>
                    </motion.div>
                </div>


                {/* Block B: Audio & Humanization */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 lg:flex-row-reverse">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-2 lg:order-1 flex justify-center"
                    >
                        <div className="bg-[#202c33] p-4 rounded-xl rounded-tl-none w-[280px] shadow-lg border border-white/5 relative group cursor-default">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Play size={20} className="text-primary ml-1" />
                                </div>
                                <div className="flex-1">
                                    <div className="h-1 bg-gray-600 rounded full w-full mb-2 flex items-center relative overflow-hidden">
                                        <div className="absolute left-0 top-0 bottom-0 bg-primary/40 w-1/3 animate-pulse" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-primary relative z-10 left-[33%]" />
                                    </div>
                                    <span className="text-[10px] text-gray-400 font-medium flex justify-between">
                                        <span>0:12</span>
                                        <span>15:42</span>
                                    </span>
                                </div>
                            </div>

                            {/* Mic Animation Overlay */}
                            <div className="absolute -right-12 bottom-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20 animate-bounce">
                                <Mic size={20} className="text-black" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-1 lg:order-2 lg:text-right"
                    >
                        <h3 className="text-3xl font-bold text-white mb-4">Áudios que Parecem <span className="text-primary">Gravados na Hora.</span></h3>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            Envie arquivos .OGG como se estivesse segurando o botão do microfone. O cliente sente que você parou o dia para falar com ele. Gere conexão imediata.
                        </p>
                    </motion.div>
                </div>

                {/* Grid of Power Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuresList.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-cyan-900/30 backdrop-blur-md hover:border-primary/50 transition-all duration-300 hover:bg-white/[0.07]"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 border border-primary/10 group-hover:scale-110 group-hover:bg-primary/10 transition-transform duration-300">
                                <feature.icon size={24} className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-text-secondary leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
