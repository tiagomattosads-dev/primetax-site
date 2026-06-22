'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
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
        <Link href="/" className="relative w-56 h-20 block">
          <Image 
            src="https://res.cloudinary.com/dyzcc4ex0/image/upload/v1774270680/LOGO_SITE_AZUL_E_DOURADO_vpiirb.webp" 
            alt="PrimeTax Logo" 
            fill 
            className="object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>
        
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-navy">
          <a href="#quem-somos" className="hover:text-gold transition-colors">A Primetax</a>
          <a href="#metodologia" className="hover:text-gold transition-colors">Metodologia</a>
          <a href="#diferenciais" className="hover:text-gold transition-colors">Diferenciais</a>
          <a href="#contato" className="bg-navy text-white px-6 py-2.5 rounded-full hover:bg-navy/90 transition-all">Fale Conosco</a>
        </div>

        <button className="md:hidden text-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 bg-white z-50 pt-24 p-6 flex flex-col gap-8 overflow-hidden"
          >
            {[
              { href: "#quem-somos", label: "A Primetax" },
              { href: "#metodologia", label: "Metodologia" },
              { href: "#diferenciais", label: "Diferenciais" },
            ].map((link, i) => (
              <motion.a 
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-navy text-2xl font-bold"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href="#contato" 
              onClick={() => setIsOpen(false)} 
              className="bg-navy text-white px-6 py-4 rounded-xl text-center font-bold mt-4"
            >
              Fale Conosco
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="hero" className="relative min-h-screen flex items-center pt-8 md:pt-16 overflow-hidden">
    <div className="container-custom relative z-10 py-12 px-6 md:py-20 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-20 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold font-semibold text-sm mb-6 border border-gold/20">
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

const QuemSomos = () => (
  <section id="quem-somos" className="min-h-screen bg-white flex items-center py-24">
    <div className="container-custom px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4 text-center">Quem Somos</h2>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
          Especialistas em Estratégia Tributária Municipal
        </h2>
        <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
          <p>
            A Primetax surgiu com o objetivo de prestar assessoria especializada em estratégia tributária municipal, com atuação focada exclusivamente no Índice de Participação dos Municípios (IPM). Formada por uma equipe técnica com profunda expertise, nossa missão é identificar perdas silenciosas e corrigir distorções fiscais, garantindo que o seu município recupere os repasses aos quais tem direito.
          </p>
          <p>
            Nosso modelo de trabalho é estritamente orientado a resultado, conduzindo desde o diagnóstico de dados até a recuperação administrativa e judicial de valores. Atuando com total transparência e segurança jurídica em todas as etapas, nós não entregamos apenas análise técnica: entregamos o aumento real da arrecadação e resultados financeiros comprovados para a sua gestão.
          </p>
        </div>
        <div className="mt-12 text-center">
          <a href="#contato" className="inline-block bg-navy text-white px-8 py-4 rounded-full font-bold hover:bg-navy/90 transition-all shadow-lg shadow-navy/20">
            FALAR COM UM ESPECIALISTA
          </a>
        </div>

        {/* Interactive Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: FileSearch, title: "Excelência Técnica", desc: "Equipe especializada em tributação municipal." },
            { icon: TrendingUp, title: "Transparência", desc: "Relatórios claros e fundamentados." },
            { icon: ShieldCheck, title: "Segurança Jurídica", desc: "Atuação pautada pela legislação vigente." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 transition-all cursor-default flex flex-col items-center text-center"
            >
              <item.icon className="w-10 h-10 text-gold mb-6" />
              <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
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
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

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
              onViewportEnter={() => {
                if (window.innerWidth < 768) {
                  setActiveStep(i);
                }
              }}
              viewport={{ amount: 0.6 }}
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
              <span className={`font-bold text-sm mb-2 block transition-colors duration-700 ${activeStep === i ? 'text-gold' : 'text-navy'}`}>{item.step}</span>
              <h4 className={`text-lg font-bold mb-3 transition-colors duration-700 ${activeStep === i ? 'text-gold' : 'text-navy'}`}>{item.title}</h4>
              <p className={`text-sm leading-relaxed transition-colors duration-700 ${activeStep === i ? 'text-gold-light' : 'text-slate-500'}`}>{item.desc}</p>
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

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbygZCSMBavW-1MwTyXcFvISp2PUa4Moq-UNto9fOh3_mu0TyGtueahux4UZzqTJ5f4a8A/exec';

const Contact = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [nome, setNome] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const steps = [
    {
      id: 'nome',
      question: 'Para começar, qual o seu nome completo?',
      placeholder: 'Digite seu nome aqui...',
      type: 'text',
      field: 'nome'
    },
    {
      id: 'municipio',
      question: 'Excelente! E qual município você representa?',
      placeholder: 'Nome do município...',
      type: 'text',
      field: 'municipio'
    },
    {
      id: 'email',
      question: 'Qual o seu melhor e-mail corporativo?',
      placeholder: 'email@municipio.gov.br',
      type: 'email',
      field: 'email'
    },
    {
      id: 'mensagem',
      question: 'Como a PrimeTax pode ajudar sua gestão hoje?',
      placeholder: 'Descreva brevemente sua necessidade...',
      type: 'textarea',
      field: 'mensagem'
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < steps.length - 1) {
      handleNext();
      return;
    }

    setFormState('submitting');
    
    try {
      const data = { nome, municipio, email, mensagem };
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      setFormState('success');
      setNome('');
      setMunicipio('');
      setEmail('');
      setMensagem('');
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setFormState('idle');
      alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
    }
  };

  const progress = isStarted ? ((step + 1) / steps.length) * 100 : 0;

  return (
    <section id="contato" className="section-padding bg-slate-50 relative overflow-hidden min-h-screen flex items-center">
      <div className="container-custom grid lg:grid-cols-2 gap-8 lg:gap-16 relative z-10 w-full">
        <div className="flex flex-col justify-center">
          <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Fale Conosco</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-navy mb-4 lg:mb-8 leading-tight">Pronto para transformar a arrecadação do seu município?</h3>
          
          <div className="hidden lg:block space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-navy">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Telefone</p>
                <p className="text-navy font-bold">(21) 96760-9074 </p>
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
          </div>
        </div>

        <div className="bg-white p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 relative min-h-[400px] md:min-h-[550px] flex flex-col overflow-hidden">
          {formState === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center my-auto"
            >
              <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={48} />
              </div>
              <h4 className="text-3xl font-bold text-navy mb-4">Mensagem Enviada!</h4>
              <p className="text-slate-500 text-lg max-w-xs mx-auto">Em breve um de nossos especialistas entrará em contato com você.</p>
              <button 
                onClick={() => {
                  setFormState('idle');
                  setStep(0);
                  setIsStarted(false);
                  setNome('');
                  setMunicipio('');
                  setEmail('');
                  setMensagem('');
                }}
                className="mt-12 bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-navy/90 transition-all flex items-center gap-2 mx-auto"
              >
                Enviar outra mensagem <ArrowRight size={18} />
              </button>
            </motion.div>
          ) : !isStarted ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col h-full justify-center text-center md:text-left"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gold/10 text-gold rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 mx-auto md:mx-0">
                <Mail size={28} />
              </div>
              <h4 className="text-2xl md:text-4xl font-bold text-navy mb-4 md:mb-6 leading-tight">
                Vamos iniciar sua jornada de <span className="text-gold">otimização fiscal</span>.
              </h4>
              <p className="text-slate-500 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
                Leva menos de 1 minuto para nos contar como podemos ajudar seu município a crescer de forma sustentável.
              </p>
              <button 
                onClick={() => setIsStarted(true)}
                className="bg-navy text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-navy/90 transition-all shadow-2xl shadow-navy/30 flex items-center justify-center md:justify-start gap-3 w-full md:w-fit group"
              >
                Começar
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="mt-6 text-slate-400 text-sm font-medium">
                Preencha o formulário de contato clicando no botão <span className="text-navy font-bold">&quot;Começar&quot;</span>
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              {/* Progress Bar - Integrated into the top edge */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100/50 overflow-hidden">
                <motion.div 
                  className="h-full bg-gold"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ type: "spring", stiffness: 50, damping: 15 }}
                />
              </div>

              <div className="mb-8 md:mb-12 flex justify-between items-center pt-2 md:pt-4">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-navy text-white flex items-center justify-center text-[10px] md:text-xs font-bold">
                    {step + 1}
                  </span>
                  <span className="text-navy font-bold text-xs md:text-sm tracking-widest uppercase">Passo {step + 1} de {steps.length}</span>
                </div>
                {step > 0 && (
                  <button type="button" onClick={handlePrev} className="text-slate-400 hover:text-navy transition-colors flex items-center gap-1 text-sm font-bold group">
                    <ChevronRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                    Voltar
                  </button>
                )}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="flex-grow flex flex-col justify-center"
                >
                  <label className="text-2xl md:text-4xl font-bold text-navy mb-6 md:mb-10 block leading-tight">
                    {steps[step].question}
                  </label>
                  
                  <div className="relative group">
                    {step === 0 && (
                      <input
                        required
                        autoFocus
                        type="text"
                        className="w-full text-xl md:text-3xl bg-transparent border-b-2 border-slate-100 focus:border-gold outline-none py-3 md:py-4 transition-all text-navy placeholder:text-slate-200 font-medium"
                        placeholder={steps[0].placeholder}
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                      />
                    )}
                    {step === 1 && (
                      <input
                        required
                        autoFocus
                        type="text"
                        className="w-full text-xl md:text-3xl bg-transparent border-b-2 border-slate-100 focus:border-gold outline-none py-3 md:py-4 transition-all text-navy placeholder:text-slate-200 font-medium"
                        placeholder={steps[1].placeholder}
                        value={municipio}
                        onChange={(e) => setMunicipio(e.target.value)}
                      />
                    )}
                    {step === 2 && (
                      <input
                        required
                        autoFocus
                        type="email"
                        className="w-full text-xl md:text-3xl bg-transparent border-b-2 border-slate-100 focus:border-gold outline-none py-3 md:py-4 transition-all text-navy placeholder:text-slate-200 font-medium"
                        placeholder={steps[2].placeholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    )}
                    {step === 3 && (
                      <textarea
                        required
                        autoFocus
                        rows={3}
                        className="w-full text-xl md:text-3xl bg-transparent border-b-2 border-slate-100 focus:border-gold outline-none py-3 md:py-4 transition-all resize-none text-navy placeholder:text-slate-200 font-medium"
                        placeholder={steps[3].placeholder}
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            e.currentTarget.form?.requestSubmit();
                          }
                        }}
                      />
                    )}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-500 group-focus-within:w-full" />
                  </div>

                  <div className="mt-8 md:mt-16 flex flex-col md:flex-row items-center gap-8">
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="bg-navy text-white px-8 py-4 md:px-12 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-navy/90 transition-all shadow-2xl shadow-navy/30 flex items-center justify-center gap-3 disabled:opacity-30 disabled:cursor-not-allowed group w-full md:w-fit"
                    >
                      {formState === 'submitting' ? 'Enviando...' : step === steps.length - 1 ? 'Finalizar' : 'Continuar'}
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="hidden md:flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
                      <span>Pressione</span>
                      <span className="px-2 py-1 bg-slate-100 rounded border border-slate-200 text-navy">ENTER</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
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
          <h4 className="font-bold mb-6 text-gold uppercase tracking-widest text-xs">Políticas e Termos</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link href="/politica-de-privacidade" className="hover:text-white transition-colors">Privacidade</Link></li>
            <li><Link href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link></li>
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
      <QuemSomos />
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
