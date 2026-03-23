'use client';

import { motion } from 'motion/react';
import { ChevronLeft, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function TermsOfUse() {
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
                <FileText size={24} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
                Termos de Uso
              </h1>
            </div>

            <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">1. Termos</h2>
                <p>
                  Ao acessar ao site Primetax, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">2. Uso de Licença</h2>
                <p className="mb-4">
                  É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Primetax , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                </p>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>Modificar ou copiar os materiais;</li>
                  <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                  <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Primetax;</li>
                  <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                  <li>Transferir os materiais para outra pessoa ou &apos;espelhe&apos; os materiais em qualquer outro servidor.</li>
                </ul>
                <p>
                  Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Primetax a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">3. Isenção de responsabilidade</h2>
                <p className="mb-4">
                  Os materiais no site da Primetax são fornecidos &apos;como estão&apos;. Primetax não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                </p>
                <p>
                  Além disso, o Primetax não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">4. Limitações</h2>
                <p>
                  Em nenhum caso o Primetax ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Primetax, mesmo que Primetax ou um representante autorizado da Primetax tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">5. Precisão dos materiais</h2>
                <p>
                  Os materiais exibidos no site da Primetax podem incluir erros técnicos, tipográficos ou fotográficos. Primetax não garante que qualquer material em seu site seja preciso, completo ou atual. Primetax pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Primetax não se compromete a atualizar os materiais.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">6. Links</h2>
                <p>
                  O Primetax não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Primetax do site. O uso de qualquer site vinculado é por conta e risco do usuário.
                </p>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h2 className="text-2xl font-bold text-navy mb-4">Modificações</h2>
                <p className="mb-6">
                  O Primetax pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                </p>
                
                <h2 className="text-2xl font-bold text-navy mb-4">Lei aplicável</h2>
                <p>
                  Estes termos e condições são regidos e interpretados de acordo com as leis do Primetax e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
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
