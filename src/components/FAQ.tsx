import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Tenho risco de bloqueio?",
        answer: "Nossa tecnologia utiliza um sistema avançado de 'Aquecimento de Chip' e delays aleatórios (humanização) para simular o comportamento humano, reduzindo drasticamente o risco de bloqueios. Além disso, incluímos um guia antibloqueio exclusivo."
    },
    {
        question: "Preciso deixar o PC ligado?",
        answer: "Não! O ColdConnect é 100% online (em nuvem). Você configura sua campanha pelo celular ou computador, e o sistema continua trabalhando mesmo se você desligar tudo."
    },
    {
        question: "Funciona no Mac e iPhone?",
        answer: "Sim! Diferente dos concorrentes, o ColdConnect roda direto no navegador. Funciona perfeitamente em Windows, Mac, Android e iOS (iPhone)."
    },
    {
        question: "Posso cancelar se não gostar?",
        answer: "Com certeza. Você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que o ColdConnect não é para você, basta nos enviar um e-mail ou mensagem no suporte via WhatsApp e devolveremos 100% do seu investimento."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-background">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-text-secondary">
                        Tire suas dúvidas antes de garantir sua licença.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-cardBorder rounded-xl bg-card overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-semibold text-white">{faq.question}</span>
                                <ChevronDown
                                    size={20}
                                    className={`text-text-secondary transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-cardBorder/50">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
};
