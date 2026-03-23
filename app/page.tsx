'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  ShieldCheck, 
  TrendingUp, 
  FileSearch, 
  Database, 
  Scale, 
  Gavel, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import Image from 'next/image';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="container-custom flex justify-between items-center h-16 md:h-20 px-6">
        <div className="relative w-40 h-12">
          <Image 
            src="https://res.cloudinary.com/dyzcc4ex0/image/upload/v1774270680/LOGO_SITE_AZUL_E_DOURADO_vpiirb.webp" 
            alt="PrimeTax Logo" 
            fill 
            className="object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-navy">
          <a href="#quem-somos" className="hover:text-gold transition-colors">Quem Somos</a>
          <a href="#metodologia" className="hover:text-gold transition-colors">Metodologia</a>
          <a href="#diferenciais" className="hover:text-gold transition-colors">Diferenciais</a>
          <a href="#contato" className="bg-navy text-white px-6 py-2.5 rounded-full hover:bg-navy/90 transition-all">Fale Conosco</a>
        </div>

        <button className="md:hidden text-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-24 p-6 flex flex-col gap-8 animate-in fade-in slide-in-from-top-4">
          <a href="#quem-somos" onClick={() => setIsOpen(false)} className="text-navy text-2xl font-bold">Quem Somos</a>
          <a href="#metodologia" onClick={() => setIsOpen(false)} className="text-navy text-2xl font-bold">Metodologia</a>
          <a href="#diferenciais" onClick={() => setIsOpen(false)} className="text-navy text-2xl font-bold">Diferenciais</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="bg-navy text-white px-6 py-4 rounded-xl text-center font-bold">Fale Conosco</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="quem-somos" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="container-custom relative z-10 section-padding grid lg:grid-cols-2 gap-20 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold font-semibold text-sm mb-6 border border-gold/20">
          <ShieldCheck size={16} />
          Assessoria Tributária Municipal Especializada
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-navy leading-tight mb-6">
          Aumente a Arrecadação Municipal com <span className="text-gold">Segurança Jurídica</span>
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
          A PrimeTax oferece assessoria especializada em estratégia tributária para municípios, focada em IPM e impacto financeiro sustentável.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contato" className="bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-navy/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-navy/20">
            Solicitar Diagnóstico <ChevronRight size={20} />
          </a>
          <a href="#metodologia" className="border border-navy/20 text-navy px-8 py-4 rounded-xl font-bold hover:bg-navy/5 transition-all text-center">
            Conhecer Metodologia
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative hidden lg:block"
      >
        <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl">
              <TrendingUp className="text-gold mb-4" size={32} />
              <h3 className="font-bold text-navy text-xl mb-1">IPM</h3>
              <p className="text-sm text-slate-500">Revisão técnica completa</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <FileSearch className="text-gold mb-4" size={32} />
              <h3 className="font-bold text-navy text-xl mb-1">Auditoria</h3>
              <p className="text-sm text-slate-500">Valor adicionado real</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <Database className="text-gold mb-4" size={32} />
              <h3 className="font-bold text-navy text-xl mb-1">DECLAN</h3>
              <p className="text-sm text-slate-500">Inconsistências identificadas</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <Scale className="text-gold mb-4" size={32} />
              <h3 className="font-bold text-navy text-xl mb-1">Recuperação</h3>
              <p className="text-sm text-slate-500">Valores não repassados</p>
            </div>
          </div>
        </div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-navy/5 rounded-full blur-3xl -z-10" />
      </motion.div>
    </div>
  </section>
);

const Challenges = () => (
  <section className="bg-slate-50 section-padding min-h-screen flex items-center">
    <div className="container-custom w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">O Desafio dos Municípios</h2>
        <h3 className="text-4xl font-bold text-navy mb-6">Perdas Silenciosas que Impactam o Futuro da Gestão</h3>
        <p className="text-slate-600">Pequenas distorções no cálculo do IPM podem representar perdas milionárias ao longo dos anos para o seu município.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Erros na DECLAN-IPM",
            desc: "Falhas no preenchimento e processamento geram quedas artificiais no índice de participação.",
            icon: <FileSearch className="text-navy" />
          },
          {
            title: "Importações Incorretas",
            desc: "Dados mal classificados ou omitidos que reduzem o valor adicionado fiscal do município.",
            icon: <Database className="text-navy" />
          },
          {
            title: "Falta de Auditoria",
            desc: "A ausência de acompanhamento técnico especializado torna o município vulnerável a perdas.",
            icon: <ShieldCheck className="text-navy" />
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-navy mb-4">{item.title}</h4>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const StrategicImportance = () => (
  <section className="section-padding bg-navy text-white overflow-hidden relative min-h-screen flex items-center">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 skew-x-12 translate-x-1/2" />
    <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">A Importância do IPM</h2>
        <h3 className="text-4xl font-bold mb-8 leading-tight">O Coração da Receita Corrente Líquida Municipal</h3>
        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          O IPM define o percentual de ICMS repassado ao município. Ele impacta diretamente a capacidade de investimento, o planejamento orçamentário e a sustentabilidade fiscal.
        </p>
        <ul className="space-y-4">
          {[
            "Sustentabilidade fiscal a longo prazo",
            "Aumento da capacidade de investimento próprio",
            "Independência financeira do município",
            "Ferramenta estratégica de gestão pública"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-slate-200">
              <CheckCircle2 className="text-gold" size={20} />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
      <div className="relative">
        <div className="aspect-video bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center p-12">
          <TrendingUp size={120} className="text-gold opacity-50" />
        </div>
      </div>
    </div>
  </section>
);

const Methodology = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { step: "01", title: "Diagnóstico", desc: "Análise detalhada da base DECLAN-IPM.", icon: <FileSearch /> },
    { step: "02", title: "Cruzamento", desc: "Comparação com bases estaduais para identificar distorções.", icon: <Database /> },
    { step: "03", title: "Atuação Adm.", desc: "Impugnações técnicas fundamentadas.", icon: <Scale /> },
    { step: "04", title: "Atuação Judicial", desc: "Defesa técnica para correção definitiva do coeficiente.", icon: <Gavel /> }
  ];

  return (
    <section id="metodologia" className="section-padding bg-white min-h-screen flex items-center">
      <div className="container-custom w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Como Funciona</h2>
          <h3 className="text-4xl font-bold text-navy mb-6">Nossa Metodologia Orientada a Resultados</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
          
          {/* Animated Progress Line */}
          <motion.div 
            className="hidden md:block absolute top-1/2 left-0 h-0.5 bg-gold -translate-y-1/2 z-0 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: (activeStep + 1) / 4 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          
          {steps.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ 
                scale: activeStep === i ? 1.03 : 1,
                borderColor: activeStep === i ? "#C5A059" : "#f1f5f9",
                boxShadow: activeStep === i ? "0 15px 20px -5px rgb(197 160 89 / 0.08), 0 5px 8px -6px rgb(197 160 89 / 0.08)" : "0 1px 2px 0 rgb(0 0 0 / 0.05)"
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`relative z-10 bg-white p-8 rounded-2xl border shadow-sm text-center group transition-all`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-700 shadow-lg ${activeStep === i ? 'bg-gold text-white shadow-gold/20' : 'bg-navy text-white shadow-navy/20'}`}>
                {item.icon}
              </div>
              <span className={`font-bold text-sm mb-2 block transition-colors duration-700 ${activeStep === i ? 'text-navy' : 'text-gold'}`}>{item.step}</span>
              <h4 className="text-lg font-bold text-navy mb-3">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentials = () => (
  <section id="diferenciais" className="section-padding bg-slate-50 min-h-screen flex items-center">
    <div className="container-custom grid lg:grid-cols-2 gap-16 items-center w-full">
      <div className="order-2 lg:order-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Exclusividade", desc: "Atuação especializada exclusivamente em IPM." },
            { title: "Expertise", desc: "Equipe com profundo conhecimento tributário municipal." },
            { title: "Transparência", desc: "Modelo de trabalho orientado a resultados reais." },
            { title: "Segurança", desc: "Atuação com total segurança jurídica e técnica." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-navy mb-2 flex items-center gap-2">
                <CheckCircle2 className="text-gold" size={18} />
                {item.title}
              </h4>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Diferencial Estratégico</h2>
        <h3 className="text-4xl font-bold text-navy mb-6 leading-tight">Por que escolher a PrimeTax?</h3>
        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
          Diferente de consultorias genéricas, focamos nossa expertise em um único objetivo: garantir que seu município receba exatamente o que lhe é de direito.
        </p>
        <a href="#contato" className="inline-flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors group">
          Falar com um especialista <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

const Results = () => (
  <section className="section-padding bg-white min-h-screen flex items-center">
    <div className="container-custom w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Resultados para o Município</h2>
        <h3 className="text-4xl font-bold text-navy mb-6">Impacto Real na Gestão Pública</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Correção do Coeficiente", desc: "Ajuste técnico do IPM e recuperação de valores não repassados." },
          { title: "Aumento Permanente", desc: "Crescimento sustentável da base de arrecadação do ICMS." },
          { title: "Autonomia Financeira", desc: "Fortalecimento do caixa municipal e maior previsibilidade orçamentária." }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl bg-navy text-white text-center hover:scale-105 transition-transform">
            <TrendingUp className="text-gold mx-auto mb-6" size={48} />
            <h4 className="text-xl font-bold mb-4">{item.title}</h4>
            <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contato" className="section-padding bg-slate-50 relative overflow-hidden min-h-screen flex items-center">
      <div className="container-custom grid lg:grid-cols-2 gap-16 relative z-10 w-full">
        <div>
          <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Fale Conosco</h2>
          <h3 className="text-4xl font-bold text-navy mb-8">Pronto para transformar a arrecadação do seu município?</h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-navy">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Telefone</p>
                <p className="text-navy font-bold">(21) 98155-5158</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-navy">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">E-mail</p>
                <p className="text-navy font-bold">contato@primetaxassessoria.com.br</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-navy">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Localização</p>
                <p className="text-navy font-bold">Rio de Janeiro, RJ</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
          {formState === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h4 className="text-2xl font-bold text-navy mb-2">Mensagem Enviada!</h4>
              <p className="text-slate-500">Em breve um de nossos especialistas entrará em contato.</p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-8 text-navy font-bold underline"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">Nome Completo</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">Município</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="Nome do município" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy">E-mail Corporativo</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="email@municipio.gov.br" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy">Mensagem</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none" placeholder="Como podemos ajudar seu município?"></textarea>
              </div>
              <button 
                disabled={formState === 'submitting'}
                className="w-full bg-navy text-white py-4 rounded-xl font-bold hover:bg-navy/90 transition-all shadow-lg shadow-navy/20 flex items-center justify-center gap-2"
              >
                {formState === 'submitting' ? 'Enviando...' : 'Solicitar Contato Especializado'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-navy text-white pt-20 pb-10">
    <div className="container-custom px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="relative w-40 h-12 mb-6">
            <Image 
              src="https://res.cloudinary.com/dyzcc4ex0/image/upload/v1774270680/LOGO_SITE_AZUL_E_DOURADO_vpiirb.webp" 
              alt="PrimeTax Logo" 
              fill 
              className="object-contain brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-slate-400 max-w-sm leading-relaxed">
            Assessoria especializada em estratégia tributária municipal. Foco em aumento de arrecadação com total segurança jurídica.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-gold uppercase tracking-widest text-xs">Links Rápidos</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#quem-somos" className="hover:text-white transition-colors">Quem Somos</a></li>
            <li><a href="#metodologia" className="hover:text-white transition-colors">Metodologia</a></li>
            <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
            <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-gold uppercase tracking-widest text-xs">Legal</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
        <p>© 2026 PrimeTax Assessoria Tributária. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <p>CNPJ: 35.760.732/0001-64</p>
        </div>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <Challenges />
      <StrategicImportance />
      <Methodology />
      <Differentials />
      <Results />
      <Contact />
      <Footer />
    </main>
  );
}
