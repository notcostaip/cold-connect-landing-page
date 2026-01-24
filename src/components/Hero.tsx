import { motion } from 'framer-motion';
import { Play, Zap, Snowflake } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">

                {/* Left: Copywriting */}
                <div className="space-y-8 text-center lg:text-left relative z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-6 shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)] backdrop-blur-sm">
                            <Snowflake size={14} className="animate-spin-slow" />
                            <span>A Revolução Fria da Prospecção</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-in text-white leading-[1.1] mb-6">
                            ColdConnect<span className="text-primary">.</span> <br />
                            A Única Automação de WhatsApp <span className="text-primary">100% Ilimitada</span> do Mercado.
                        </h1>

                        <p className="text-lg text-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed border-l-2 border-primary/30 pl-6">
                            Sem downloads. Sem arquivos .exe suspeitos. Acesse direto pelo navegador do seu Celular ou PC. A prospecção fria nunca foi tão fácil e barata.
                        </p>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-6 pt-4"
                    >
                        <button
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            className="relative px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-black font-bold text-lg rounded-none skew-x-[-10deg] transition-all duration-300 group shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] cursor-pointer overflow-hidden"
                        >
                            <span className="block skew-x-[10deg] relative z-10">COMEÇAR AGORA</span>
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-1000 ease-in-out group-hover:left-[100%]" />
                        </button>
                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                            100% Web-Based • Roda em iPhone, Android, Windows e Mac.
                        </div>
                    </motion.div>
                </div>

                {/* Right: Visual Composition (Layered) */}
                <div className="relative h-[600px] w-full max-w-[600px] mx-auto lg:mx-0 flex items-center perspective-1000">

                    {/* Layer 1: Background Dashboard (The Engine) - Positioned LEFT relative to container */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotateY: 10 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            rotateY: 10,
                            y: [0, -15, 0] // Floating animation (slower)
                        }}
                        transition={{
                            opacity: { duration: 1, delay: 0.2 },
                            x: { duration: 1, delay: 0.2 },
                            y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute left-0 top-12 w-[380px] h-[450px] glass rounded-3xl p-6 z-0 border border-primary/20 shadow-[0_0_40px_-5px_rgba(34,211,238,0.15)] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                        <div className="flex justify-between items-center mb-8 border-b border-primary/10 pb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                                <span className="text-xs font-mono text-green-400 font-bold uppercase tracking-wider">Sistema Ativo ❄️</span>
                            </div>
                            <span className="text-[10px] text-primary/60 border border-primary/20 px-2 py-0.5 rounded">ONLINE</span>
                        </div>

                        {/* Metrics */}
                        <div className="space-y-6">
                            <div className="bg-black/40 p-5 rounded-xl border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                                    <Zap size={40} className="text-primary" />
                                </div>
                                <span className="text-xs text-text-secondary uppercase tracking-widest font-semibold">Envios Hoje</span>
                                <div className="flex items-end justify-between mt-2 relative z-10">
                                    <span className="text-5xl font-mono text-white font-bold tracking-tighter">142<span className="text-primary/50 text-3xl">/--</span></span>
                                </div>
                                <div className="mt-1 text-[10px] text-primary/80 font-mono">LIMITE: ILIMITADO</div>

                                {/* Progress Bar */}
                                <div className="mt-5 h-2 w-full bg-gray-900 rounded-full overflow-hidden border border-white/5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "60%" }}
                                        transition={{ duration: 1.5, delay: 1 }}
                                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_15px_#22d3ee] animate-pulse-cyan"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                    <div className="text-[10px] text-text-secondary uppercase font-bold">Instâncias</div>
                                    <div className="text-lg font-mono text-white mt-1 flex items-center gap-2">
                                        03 <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    </div>
                                </div>
                                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                                    <div className="text-[10px] text-text-secondary uppercase font-bold">Fila</div>
                                    <div className="text-lg font-mono text-white mt-1 text-white/50">Vazia</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Layer 2: Foreground Mobile Mockup (The Experience) - Positioned RIGHT relative to container */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: -5 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            rotateY: -5,
                            y: [0, -25, 0] // Floating animation (faster/deeper distinct from dashboard)
                        }}
                        transition={{
                            opacity: { duration: 1, delay: 0.4 },
                            x: { duration: 1, delay: 0.4 },
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute right-0 top-0 z-10"
                    >
                        <div className="relative w-[300px] h-[600px] bg-black border-[10px] border-[#1a1a1a] rounded-[3rem] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-white/10">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-36 bg-[#1a1a1a] rounded-b-2xl z-20" />

                            {/* Screen Content - WhatsApp Dark Mode */}
                            <div className="h-full bg-[#0b141a] flex flex-col font-sans">
                                {/* WA Header */}
                                <div className="bg-[#202c33] p-4 pt-10 flex items-center gap-3 border-b border-gray-800">
                                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/20">C</div>
                                    <div>
                                        <div className="text-gray-100 font-semibold text-sm">ColdConnect.</div>
                                        <div className="text-[10px] text-primary flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" /> online
                                        </div>
                                    </div>
                                </div>

                                {/* Messages Area */}
                                <div className="flex-1 p-4 space-y-4 overflow-hidden relative font-sans">
                                    {/* Message 1 (Bot Text) */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.5 }}
                                        className="bg-[#202c33] p-3 rounded-xl rounded-tl-none max-w-[85%] shadow-md border border-white/5"
                                    >
                                        <p className="text-[#e9edef] text-sm leading-relaxed">Olá João! Conseguimos liberar aquela vaga exclusiva que você queria...</p>
                                        <span className="text-[10px] text-gray-500 block text-right">10:42</span>
                                    </motion.div>

                                    {/* Message 2 (Bot Audio) */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 2.5 }}
                                        className="flex items-center gap-2"
                                    >
                                        <div className="bg-[#202c33] p-2.5 pr-4 rounded-xl rounded-tl-none w-[210px] shadow-md flex items-center gap-3 border border-white/5">
                                            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-primary/20 transition-colors">
                                                <Play size={16} className="text-primary fill-primary ml-0.5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="h-1 bg-gray-600 rounded full w-full mb-1.5 flex items-center relative overflow-hidden">
                                                    <div className="absolute left-0 top-0 bottom-0 bg-primary/30 w-full animate-pulse" />
                                                    <div className="h-2 w-2 rounded-full bg-primary relative z-10" />
                                                </div>
                                                <span className="text-[10px] text-gray-400 font-medium">0:15 • Explicação</span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Message 3 (Lead) */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 3.5 }}
                                        className="bg-[#005c4b] p-3 rounded-xl rounded-tr-none max-w-[85%] shadow-md ml-auto border border-white/5 shadow-cyan-900/10"
                                    >
                                        <p className="text-[#e9edef] text-sm leading-relaxed">Show de bola! E qual o valor final?</p>
                                        <span className="text-[10px] text-blue-200 block text-right flex items-center justify-end gap-1 mt-1">
                                            10:45 <span className="text-blue-300">✓✓</span>
                                        </span>
                                    </motion.div>

                                    {/* Message 4 (Bot Closing) */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 4.5 }}
                                        className="bg-[#202c33] p-3 rounded-xl rounded-tl-none max-w-[85%] shadow-md border border-white/5"
                                    >
                                        <p className="text-[#e9edef] text-sm leading-relaxed">O pacote completo sai por apenas R$ 297,00! Segue o link:</p>
                                        <a href="#" className="text-primary text-sm underline mt-1 block hover:text-cyan-300 transition-colors">checkout.com/oferta</a>
                                        <span className="text-[10px] text-gray-500 block text-right mt-1">10:46</span>
                                    </motion.div>

                                </div>

                                {/* Input Area Mockup */}
                                <div className="bg-[#202c33] h-16 w-full flex items-center px-4 gap-3 border-t border-gray-800">
                                    <div className="flex-1 h-10 bg-[#2a3942] rounded-full px-4 flex items-center">
                                        <span className="text-gray-500 text-sm">Mensagem</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-[#005c4b] flex items-center justify-center shadow-lg">
                                        <Zap size={20} className="text-white fill-white" />
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Glow Behind Phone */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[90%] bg-primary/10 blur-[80px] -z-10 rounded-full pointer-events-none mix-blend-screen" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
