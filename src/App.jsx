import React from "react";
import { motion } from "framer-motion";
import { Database, Shield, Server, Cpu, CloudUpload, Download, Cable, PanelTop, Rocket, Check, MessageCircle } from "lucide-react";

const brand = {
  name: "Peralta Hosting",
  email: "comercial@peraltahosting.example",
  phone: "+351 900 000 000",
  discord: "peraltahosting",
  paypal: "major.dani.official@gmail.com",
  billingUrl: "https://billing.peraltahosting.example" // altere para o seu domínio do gestor (BoxBilling)
};

const features = [
  { title: "Hospedagem 24/7", desc: "Infraestrutura sempre ligada, com monitorização e reinícios automáticos.", icon: <Server className="w-6 h-6" aria-hidden /> },
  { title: "Painel de Controlo", desc: "Pterodactyl moderno: consola em tempo real, ficheiros, SFTP e backups.", icon: <PanelTop className="w-6 h-6" aria-hidden /> },
  { title: "Base de Dados (1 grátis)", desc: "Inclui 1 base MySQL por instância, com utilização optimizada.", icon: <Database className="w-6 h-6" aria-hidden /> },
  { title: "FastDownload", desc: "Entregas HTTP/HTTPS rápidas para recursos, mapas e mods.", icon: <Download className="w-6 h-6" aria-hidden /> },
  { title: "Backups", desc: "Cópias automáticas diárias e restauro em 1 clique.", icon: <CloudUpload className="w-6 h-6" aria-hidden /> },
  { title: "Acesso SFTP", desc: "Gestão directa de ficheiros com segurança e rapidez.", icon: <Cable className="w-6 h-6" aria-hidden /> },
];

const plans = [
  { name: "Início", price: 5, ram: "1 GB RAM", slots: "32 slots", items: ["CPU 1 vCore", "10 GB NVMe", "1 BD MySQL", "Protecção DDoS"] },
  { name: "Comunidade", price: 12, ram: "4 GB RAM", slots: "128 slots", items: ["CPU 2 vCores", "25 GB NVMe", "Backups diários", "FastDownload"], popular: true },
  { name: "Avançado", price: 25, ram: "8 GB RAM", slots: "256 slots", items: ["CPU 3 vCores", "50 GB NVMe", "Suporte prioritário", "IP dedicado"] },
  { name: "Ultra (máx)", price: 49, ram: "15 GB RAM", slots: "500+ slots", items: ["CPU 4 vCores dedicados", "80 GB NVMe", "Migração gratuita", "Limite máximo de RAM"] },
];

const Card = ({ children, className }) => (
  <div className={`rounded-2xl border bg-white shadow ${className || ""}`}>{children}</div>
);
const CardHeader = ({ children }) => (<div className="p-5 border-b">{children}</div>);
const CardContent = ({ children }) => (<div className="p-5">{children}</div>);
const CardTitle = ({ children, className }) => (<div className={`text-xl font-semibold ${className||""}`}>{children}</div>);
const Button = ({ href, children, variant="solid", className="", ...rest }) => {
  const base = "inline-flex items-center justify-center px-4 py-2 rounded-2xl text-sm font-semibold transition";
  const styles = variant === "outline" ? "border border-slate-300 hover:bg-slate-50" : "bg-primary text-white hover:opacity-90";
  return href ? <a href={href} className={`${base} ${styles} ${className}`} {...rest}>{children}</a> : <button className={`${base} ${styles} ${className}`} {...rest}>{children}</button>;
};

const Nav = () => (
  <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#home" className="flex items-center gap-2 font-semibold">
        <Rocket className="w-6 h-6" />
        <span>{brand.name}</span>
      </a>
      <div className="hidden md:flex items-center gap-6 text-sm">
        <a href="#recursos" className="hover:opacity-70">Recursos</a>
        <a href="#planos" className="hover:opacity-70">Planos</a>
        <a href="#painel" className="hover:opacity-70">Painel</a>
        <a href="#faq" className="hover:opacity-70">FAQ</a>
        <a href="#contactos" className="hover:opacity-70">Contactos</a>
        <a href="#login" className="hover:opacity-70 font-semibold">Login</a>
      </div>
      <Button href="#login">Entrar</Button>
    </div>
  </nav>
);

const Spec = ({ label, value, icon }) => (
  <div className="p-3 rounded-xl bg-slate-50 border">
    <div className="text-xs text-slate-500 flex items-center gap-2">{icon}{label}</div>
    <div className="font-medium">{value}</div>
  </div>
);

const Hero = () => (
  <section id="home" className="pt-28 md:pt-32 pb-16 bg-gradient-to-b from-white to-slate-50">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hospedagem MTA com <span className="text-primary">até 15 GB RAM</span>
        </h1>
        <p className="mt-4 text-slate-600 text-lg">
          Desempenho topo de gama, protecção DDoS e painel de controlo simples. Ideal
          para roleplay, freeroam, drift e servidores com muitos recursos.
        </p>
        <div className="mt-6 flex gap-3">
          <Button href="#planos" className="px-5 py-3">Ver Planos</Button>
          <Button href="#contactos" variant="outline" className="px-5 py-3">Falar com vendas</Button>
        </div>
        <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Instalação gratuita</div>
          <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Migração sem downtime</div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
        <Card className="shadow-xl border-0">
          <CardHeader><CardTitle>Especificações</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-2 gap-3 text-sm">
            <Spec label="CPU" value="Ryzen/Intel alto clock" icon={<Cpu className='w-4 h-4' />} />
            <Spec label="RAM" value="Até 15 GB/instância" icon={<Server className='w-4 h-4' />} />
            <Spec label="Disco" value="NVMe ultrarrápido" icon={<Download className='w-4 h-4' />} />
            <Spec label="Rede" value="1 Gbps" icon={<Cable className='w-4 h-4' />} />
            <Spec label="Painel" value="Pterodactyl" icon={<PanelTop className='w-4 h-4' />} />
            <Spec label="Backups" value="Diários automáticos" icon={<CloudUpload className='w-4 h-4' />} />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

const Features = () => (
  <section id="recursos" className="py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center">O essencial para o seu servidor</h2>
      <p className="mt-2 text-center text-slate-600">Tudo o que pediu — pronto a usar.</p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="p-5 rounded-2xl border bg-white shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">{f.icon}</div>
            <div className="font-semibold">{f.title}</div>
            <div className="text-sm text-slate-600 mt-1">{f.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="planos" className="py-16 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center">Planos transparentes</h2>
      <p className="mt-2 text-center text-slate-600">Escala até 15 GB de RAM por instância.</p>
      <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {plans.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
            <Card className={`h-full ${p.popular ? "border-blue-600 shadow-lg" : ""}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{p.name}</CardTitle>
                  {p.popular && <span className="text-xs px-2 py-1 rounded-full bg-primary text-white">Mais escolhido</span>}
                </div>
                <div className="mt-2">
                  <div className="text-3xl font-bold">€ {p.price}<span className="text-base font-normal text-slate-500">/mês</span></div>
                  <div className="text-sm text-slate-600">{p.ram} • {p.slots}</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                {p.items.map((it, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4" /> {it}</div>
                ))}
                <Button href="#login" className="w-full mt-4">Entrar para contratar</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-xs text-slate-500 mt-4">Preços de referência. Personalizamos CPU, slots e armazenamento.</p>
    </div>
  </section>
);

const Painel = () => (
  <section id="painel" className="py-16">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold">Painel Pterodactyl</h2>
        <p className="mt-2 text-slate-600">Gestão completa do seu servidor: iniciar/parar, consola em tempo real, ficheiros, SFTP, backups, bases de dados e programações.</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Acesso SFTP seguro</li>
          <li className="flex items-center gap-2"><Check className="w-4 h-4" /> 1 base de dados incluída</li>
          <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Backups e restauros</li>
          <li className="flex items-center gap-2"><Check className="w-4 h-4" /> FastDownload para recursos</li>
        </ul>
        <div className="mt-6 flex gap-3">
          <Button href="#planos">Escolher plano</Button>
          <Button href="#contactos" variant="outline">Pedir demonstração</Button>
        </div>
        <div className="mt-4 text-xs text-slate-500 flex items-center gap-2"><Shield className="w-4 h-4" /> Protecção DDoS sempre activa</div>
      </div>
      <Card className="border shadow-lg">
        <CardHeader><CardTitle>Pré-visualização</CardTitle></CardHeader>
        <CardContent>
          <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 grid place-items-center text-white">
            <div className="text-center">
              <div className="text-sm opacity-80">Screenshot do painel</div>
              <div className="text-2xl font-semibold mt-1">Pterodactyl</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    { q: "Posso migrar do meu host actual?", a: "Sim. Tratamos da migração sem downtime sempre que possível, incluindo ficheiros, BD e configs." },
    { q: "Quais as portas liberadas?", a: "Por padrão 22003 UDP e 22005 TCP, com personalização mediante pedido." },
    { q: "Qual o limite de RAM?", a: "Cada instância pode escalar até 15 GB de RAM, conforme o plano escolhido." },
    { q: "Como funciona o suporte?", a: "Tickets, Discord e WhatsApp 24/7, com SLA prioritário nos planos Avançado e Ultra." },
  ];
  return (
    <section id="faq" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">FAQ</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <Card key={i}><CardHeader><CardTitle className="text-lg">{f.q}</CardTitle></CardHeader><CardContent className="text-slate-600">{f.a}</CardContent></Card>
          ))}
        </div>
      </div>
    </section>
  )
};

const Login = () => (
  <section id="login" className="py-16 bg-slate-50">
    <div className="max-w-md mx-auto px-4">
      <Card className="shadow-lg">
        <CardHeader><CardTitle>Login</CardTitle></CardHeader>
        <CardContent>
          <form className="space-y-3" onSubmit={(e)=>e.preventDefault()}>
            <input type="email" defaultValue="igor.rodrigues2120@gmail.com" className="w-full border rounded-2xl px-3 py-2" />
            <input type="password" defaultValue="Igor2123" className="w-full border rounded-2xl px-3 py-2" />
            <Button href={brand.billingUrl} className="w-full">Entrar</Button>
            <p className="text-xs text-slate-500 text-center mt-2">Após entrar, a equipa activará o seu plano e criará o servidor no painel.</p>
          </form>
          <div className="text-center text-xs text-slate-500 mt-3">Pagamento via PayPal: {brand.paypal}</div>
        </CardContent>
      </Card>
    </div>
  </section>
);

const Termos = () => (
  <section id="termos" className="py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold">Termos de Serviço</h2>
      <p className="mt-3 text-slate-600">Uso responsável, proibição de DDoS/abuso, reembolsos conforme legislação aplicável, suspensão em caso de violação. Recursos partilhados com limites justos. Suporte 24/7 por melhor esforço.</p>
    </div>
  </section>
);

const Privacidade = () => (
  <section id="privacidade" className="py-16 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold">Política de Privacidade</h2>
      <p className="mt-3 text-slate-600">Guardamos apenas dados necessários para faturação e suporte. Cookies mínimos. Pode solicitar remoção de dados por email. Integração PayPal processa pagamentos em ambiente seguro.</p>
    </div>
  </section>
);

const Status = () => (
  <section id="status" className="py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold">Status</h2>
      <p className="mt-3 text-slate-600">Todos os sistemas operacionais. Incidentes e manutenção programada serão comunicados aqui e no Discord: {brand.discord}</p>
    </div>
  </section>
);

const Contactos = () => (
  <section id="contactos" className="py-16">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-3xl font-bold">Fale connosco</h2>
        <p className="mt-2 text-slate-600">Peça orçamento, esclareça dúvidas e receba ajuda para escolher o plano ideal.</p>
        <div className="mt-6 space-y-3 text-sm">
          <div className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> Discord: {brand.discord}</div>
          <div className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp: {brand.phone}</div>
          <div className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> E-mail: {brand.email}</div>
        </div>
      </div>
      <Card className="shadow-md">
        <CardHeader><CardTitle>Solicitar orçamento</CardTitle></CardHeader>
        <CardContent>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-3">
              <input placeholder="O seu nome" required className="w-full border rounded-2xl px-3 py-2" />
              <input type="email" placeholder="O seu e-mail" required className="w-full border rounded-2xl px-3 py-2" />
            </div>
            <input placeholder="Nome do servidor (opcional)" className="w-full border rounded-2xl px-3 py-2" />
            <div className="grid md:grid-cols-2 gap-3">
              <input placeholder="RAM desejada (ex.: 8 GB)" className="w-full border rounded-2xl px-3 py-2" />
              <input placeholder="Slots (ex.: 256)" className="w-full border rounded-2xl px-3 py-2" />
            </div>
            <textarea placeholder="Fale-nos do seu projecto" className="w-full border rounded-2xl px-3 py-2" />
            <Button className="w-full">Enviar</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-10 border-t bg-white">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm text-slate-600">© {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.</div>
      <div className="text-sm text-slate-500 flex gap-4">
        <a href="#termos" className="hover:underline">Termos</a>
        <a href="#privacidade" className="hover:underline">Privacidade</a>
        <a href="#status" className="hover:underline">Status</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      <Nav />
      <Hero />
      <Features />
      <Pricing />
      <Painel />
      <FAQ />
      <Login />
      <Termos />
      <Privacidade />
      <Status />
      <Contactos />
      <Footer />
    </div>
  );
}