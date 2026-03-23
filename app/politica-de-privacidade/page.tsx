'use client';

import { motion } from 'motion/react';
import { ChevronLeft, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-navy font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="container-custom px-6 h-20 flex items-center justify-between">
          <Link href="/" className="relative w-32 h-10">
            <Image 
              src="https://res.cloudinary.com/dyzcc4ex0/image/upload/v1774270680/LOGO_SITE_AZUL_E_DOURADO_vpiirb.webp" 
              alt="PrimeTax Logo" 
              fill 
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
          <Link 
            href="/" 
            className="flex items-center gap-2 text-navy font-bold text-sm hover:text-gold transition-colors"
          >
            <ChevronLeft size={20} />
            Voltar para o Início
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="pt-32 pb-20">
        <div className="container-custom px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
                <Shield size={24} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
                Política de Privacidade
              </h1>
            </div>

            <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg font-medium text-navy">
                A sua privacidade é importante para nós. É política do Primetax respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Primetax, e outros sites que possuímos e operamos.
              </p>

              <p>
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
              </p>

              <p>
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
              </p>

              <p>
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
              </p>

              <p>
                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
              </p>

              <p>
                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
              </p>

              <p>
                O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
              </p>

              <p>
                O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você. Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.
              </p>

              <p>
                Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
              </p>

              <p>
                Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.
              </p>

              <div className="pt-8 pb-4 border-t border-slate-100 mt-12">
                <h2 className="text-2xl font-bold text-navy mb-6">Compromisso do Usuário</h2>
                <p className="mb-6">
                  O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Primetax oferece no site e com caráter enunciativo, mas não limitativo:
                </p>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex gap-3">
                    <span className="font-bold text-gold">A)</span>
                    <span>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold">B)</span>
                    <span>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-gold">C)</span>
                    <span>Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Primetax, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h2 className="text-2xl font-bold text-navy mb-6">Mais informações</h2>
                <p>
                  Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                </p>
                <p className="mt-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Esta política é efetiva a partir de 23 March 2026 15:43
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-navy text-white py-12 border-t border-white/10">
        <div className="container-custom px-6 text-center">
          <p className="text-slate-400 text-sm">
            © 2026 PrimeTax Assessoria Tributária. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
