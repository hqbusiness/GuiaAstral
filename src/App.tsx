/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Sun, 
  Moon, 
  Compass, 
  MessageSquare, 
  Heart, 
  Flame, 
  Globe, 
  Anchor, 
  Zap, 
  Waves, 
  GitMerge, 
  Sparkles,
  Star,
  ChevronDown
} from "lucide-react";

const Section = ({ title, icon: Icon, children, delay = 0 }: { title: string, icon: any, children: ReactNode, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="glass-card mb-8"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 rounded-full bg-amber-500/10 text-amber-400">
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-serif font-medium text-amber-100">{title}</h2>
    </div>
    <div className="space-y-4 text-lg leading-relaxed text-stone-300">
      {children}
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Immersive Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-900/10 blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
        </div>
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <header className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block px-4 py-1 rounded-full border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-6">
              Interpretación Simbólica & Psicológica
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-medium mb-8 gradient-text leading-tight">
              Tu Mapa Estelar
            </h1>
            <p className="text-xl md:text-2xl text-stone-400 font-light max-w-2xl mx-auto italic leading-relaxed">
              "La astrología no define un destino fijo, pero sí describe tendencias, talentos y aprendizajes."
            </p>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 text-stone-500 flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-[0.3em]">Explorar</span>
            <ChevronDown size={20} />
          </motion.div>
        </header>

        <div className="space-y-12">
          {/* Sol */}
          <Section title="Sol en Leo en Casa 9" icon={Sun}>
            <p className="font-medium text-amber-200/80">Identidad y Propósito</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><span className="text-amber-100/90">Leo:</span> liderazgo, carisma, creatividad, necesidad de brillar.</li>
              <li><span className="text-amber-100/90">Casa 9:</span> expansión, filosofía, viajes, enseñanza, espiritualidad.</li>
            </ul>
            <p className="bg-amber-500/5 p-4 rounded-lg border-l-2 border-amber-500/30 italic">
              "Esta persona vino a brillar a través del conocimiento. Tiene alma de maestro, guía o inspirador. Su identidad se fortalece cuando estudia, enseña o viaja."
            </p>
            <p className="text-sm text-stone-400">👉 Necesita sentir que su vida tiene significado y propósito superior.</p>
          </Section>

          {/* Luna */}
          <Section title="Luna en Piscis en Casa 4" icon={Moon}>
            <p className="font-medium text-blue-200/80">Mundo Emocional y Raíces</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><span className="text-blue-100/90">Piscis:</span> sensibilidad, empatía, intuición profunda.</li>
              <li><span className="text-blue-100/90">Casa 4:</span> hogar, familia, base emocional.</li>
            </ul>
            <p className="bg-blue-500/5 p-4 rounded-lg border-l-2 border-blue-500/30 italic">
              "Emocionalmente muy sensible. Necesita un hogar donde pueda sentirse protegido energéticamente. Gran capacidad de sanar a otros."
            </p>
            <p className="text-sm text-stone-400">⚠️ Debe cuidar la tendencia a absorber problemas ajenos.</p>
          </Section>

          {/* Ascendente */}
          <Section title="Ascendente en Sagitario" icon={Compass}>
            <p className="font-medium text-orange-200/80">La Máscara y Percepción</p>
            <p>Optimista, visionario y directo. Proyecta entusiasmo y fe con una energía expansiva.</p>
            <p className="italic text-stone-400">
              Transmite sabiduría natural y mentalidad grande. La gente la ve como alguien que sabe hacia dónde va.
            </p>
          </Section>

          {/* Mercurio */}
          <Section title="Mercurio en Leo en Casa 9" icon={MessageSquare}>
            <p className="font-medium text-amber-200/80">Mente y Comunicación</p>
            <p>Mente creativa, expresiva y convincente. Talento innato para hablar en público, crear contenido e inspirar con palabras.</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-3 bg-white/5 rounded-lg text-center text-sm">Hablar en público</div>
              <div className="p-3 bg-white/5 rounded-lg text-center text-sm">Crear contenido</div>
              <div className="p-3 bg-white/5 rounded-lg text-center text-sm">Inspirar</div>
              <div className="p-3 bg-white/5 rounded-lg text-center text-sm">Enseñar</div>
            </div>
          </Section>

          {/* Venus */}
          <Section title="Venus en Virgo en Casa 10" icon={Heart}>
            <p className="font-medium text-emerald-200/80">Amor, Valores y Reputación</p>
            <p>Busca la perfección y ama servir. Su imagen pública es cuidada y profesional.</p>
            <p className="italic text-stone-400">
              En la vida profesional es detallista, estratégica y metódica. Puede destacar en consultoría, administración o servicios profesionales.
            </p>
          </Section>

          {/* Marte */}
          <Section title="Marte en Libra en Casa 11" icon={Flame}>
            <p className="font-medium text-red-200/80">Acción y Grupos</p>
            <p>Energía enfocada en proyectos colectivos. Diplomático pero estratégico, lucha por la justicia y lidera comunidades.</p>
          </Section>

          {/* Júpiter */}
          <Section title="Júpiter en Géminis en Casa 7" icon={Globe}>
            <p className="font-medium text-indigo-200/80">Expansión y Relaciones</p>
            <p>Aprende a través de socios y colaboradores. La suerte llega cuando se comunica y colabora con otros.</p>
          </Section>

          {/* Saturno */}
          <Section title="Saturno en Piscis en Casa 4" icon={Anchor}>
            <p className="font-medium text-stone-400">Lección Kármica Familiar</p>
            <p>Responsabilidades tempranas y sensación de carga emocional. El aprendizaje es construir estabilidad emocional propia sin perder la sensibilidad.</p>
          </Section>

          {/* Urano y Plutón */}
          <Section title="Urano y Plutón en Virgo en Casa 10" icon={Zap}>
            <p className="font-medium text-purple-200/80">Transformación Profesional</p>
            <p>Cambios fuertes de carrera y reinvención constante. Destino profesional intenso ligado a análisis, tecnología o sistemas.</p>
          </Section>

          {/* Neptuno */}
          <Section title="Neptuno en Escorpio en Casa 12" icon={Waves}>
            <p className="font-medium text-cyan-200/80">Poder Psíquico</p>
            <p>Gran intuición, sueños reveladores e interés por lo oculto. Debe evitar el escapismo o el autoengaño.</p>
          </Section>

          {/* Nodo Norte */}
          <Section title="Nodo Norte en Géminis en Casa 7" icon={GitMerge}>
            <p className="font-medium text-amber-200/80">Clave Evolutiva</p>
            <p className="text-sm text-stone-500 mb-2">Viene de: Independencia total y "verdad absoluta".</p>
            <p className="text-amber-100">Hacia: Escuchar, dialogar, construir en pareja y comunicar con humildad.</p>
            <p className="mt-4 p-4 bg-amber-500/10 rounded-lg border border-amber-500/20 text-center font-serif italic text-amber-200">
              "El destino está en la cooperación, no en el protagonismo solitario."
            </p>
          </Section>
        </div>

        <div className="section-divider" />

        {/* Synthesis Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-20"
        >
          <div className="inline-block p-4 rounded-full bg-amber-500/10 text-amber-400 mb-8">
            <Sparkles size={48} />
          </div>
          <h2 className="text-5xl font-serif mb-12 gradient-text">Síntesis del Destino</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="glass-card border-amber-500/20">
              <h3 className="text-xl font-serif text-amber-200 mb-4">Esencia</h3>
              <ul className="space-y-3 text-stone-300">
                <li className="flex items-start gap-2"><Star size={16} className="mt-1 text-amber-500" /> Vino a enseñar y comunicar.</li>
                <li className="flex items-start gap-2"><Star size={16} className="mt-1 text-amber-500" /> Liderazgo natural y carisma.</li>
                <li className="flex items-start gap-2"><Star size={16} className="mt-1 text-amber-500" /> Sensibilidad espiritual profunda.</li>
              </ul>
            </div>
            <div className="glass-card border-amber-500/20">
              <h3 className="text-xl font-serif text-amber-200 mb-4">Caminos Posibles</h3>
              <div className="flex flex-wrap gap-2">
                {['Mentor', 'Comunicador', 'Líder Espiritual', 'Empresario con Propósito', 'Constructor de Comunidad'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-16 text-2xl font-serif italic text-stone-300 max-w-2xl mx-auto leading-relaxed">
            "Si integra su sensibilidad con su fuego, puede convertirse en una figura influyente."
          </p>
        </motion.section>

        <footer className="text-center pt-20 pb-10 text-stone-600 text-sm font-mono tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Astrología Simbólica &bull; Interpretación No Determinista
        </footer>
      </main>
    </div>
  );
}
