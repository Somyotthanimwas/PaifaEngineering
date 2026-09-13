import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircuitBoard,
  ClipboardList,
  Factory,
  Gauge,
  HardHat,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MoveRight,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const images = {
  hero: "/assets/plaifa-hero.jpg",
  mdb: "/assets/plaifa-mdb.jpg",
  transformer: "/assets/plaifa-transformer.jpg",
  cabletray: "/assets/plaifa-cabletray.jpg",
  technician: "/assets/plaifa-technician.jpg",
};

const services = [
  {
    number: "01",
    icon: CircuitBoard,
    title: "งานระบบไฟฟ้า",
    subtitle: "Electrical Systems",
    description:
      "ติดตั้ง ปรับปรุง และแก้ไขระบบไฟฟ้าตามแบบและขอบเขตของโครงการ ตั้งแต่ตู้จ่ายไฟหลักจนถึงระบบภายในอาคาร",
    tags: ["MDB", "Bus Duct", "Wiring"],
  },
  {
    number: "02",
    icon: Gauge,
    title: "งานวิศวกรรม",
    subtitle: "Engineering Solutions",
    description:
      "วางแผน ประเมินหน้างาน และออกแบบแนวทางทางวิศวกรรมให้เหมาะกับการใช้งาน งบประมาณ และเงื่อนไขของแต่ละพื้นที่",
    tags: ["Planning", "Design", "Assessment"],
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Project Support",
    subtitle: "From Scope to Handover",
    description:
      "สนับสนุนงานโครงการอย่างเป็นระบบ ตั้งแต่ประเมินราคา ประสานงาน ควบคุมงาน ไปจนถึงตรวจสอบและส่งมอบ",
    tags: ["Coordination", "QA/QC", "Handover"],
  },
  {
    number: "04",
    icon: Wrench,
    title: "Technical Service",
    subtitle: "Reliable On-site Support",
    description:
      "ตรวจสอบ วิเคราะห์ปัญหา และสนับสนุนงานทางเทคนิค เพื่อให้ระบบกลับมาทำงานได้อย่างเหมาะสมและปลอดภัย",
    tags: ["Inspection", "Troubleshooting", "Maintenance"],
  },
];

const projects = [
  {
    code: "MDB",
    title: "ติดตั้งตู้ MDB",
    description:
      "Main Distribution Board พร้อมจัดระเบียบระบบจ่ายไฟและตรวจสอบความเรียบร้อยของงาน",
    image: images.mdb,
    span: "md:col-span-7",
  },
  {
    code: "TRF",
    title: "ติดตั้งหม้อแปลงไฟฟ้า",
    description: "งานติดตั้งหม้อแปลง งานเชื่อมต่อระบบ และงานประกอบที่เกี่ยวข้อง",
    image: images.transformer,
    span: "md:col-span-5",
  },
  {
    code: "CT / WW",
    title: "เดิน Cable Tray & Wireway",
    description: "จัดแนวเส้นทางสายไฟให้เป็นระเบียบ รองรับการบำรุงรักษาในอนาคต",
    image: images.cabletray,
    span: "md:col-span-5",
  },
  {
    code: "TECH",
    title: "ตรวจสอบและแก้ไขระบบ",
    description:
      "งานเข้าหัวสาย ต่อเข้าตู้ไฟ และตรวจสอบระบบโดยทีมช่างผู้มีประสบการณ์",
    image: images.technician,
    span: "md:col-span-7",
  },
];

const process = [
  {
    step: "01",
    title: "รับโจทย์และประเมินงาน",
    copy: "ทำความเข้าใจความต้องการ งบประมาณ และสภาพหน้างานจริง",
  },
  {
    step: "02",
    title: "วางแผนและประสานงาน",
    copy: "จัดทำขอบเขตงาน ประสานทีม และวางแผนการดำเนินงานให้ชัดเจน",
  },
  {
    step: "03",
    title: "ติดตั้งและควบคุมคุณภาพ",
    copy: "ลงมือทำงานอย่างเป็นระบบ คำนึงถึงความปลอดภัยและรายละเอียดหน้างาน",
  },
  {
    step: "04",
    title: "ตรวจสอบและส่งมอบ",
    copy: "เก็บรายละเอียด ทดสอบระบบ และส่งมอบงานพร้อมความมั่นใจ",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f3f5f6] text-[#10202d]">
      <div className="noise" />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-[#f3f5f6]/92 shadow-[0_12px_40px_rgba(15,31,45,0.08)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container flex h-[76px] items-center justify-between">

          {/* REAL PLAIFA LOGO */}
          <a
            href="#top"
            className="group flex items-center"
            aria-label="Plaifa Engineering home"
          >
            <img
              src="/assets/paifa-engineering-logo.png"
              alt="Plaifa Engineering"
              className="h-16 w-auto object-contain transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </a>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            <a className="nav-link !text-[22px] text-green-700 hover:text-green-500" href="#about">
              เกี่ยวกับเรา
            </a>
            <a className="nav-link text-2xl text-green-700 hover:text-green-500" href="#services">
              บริการ
            </a>
            <a className="nav-link text-2xl text-green-700 hover:text-green-500" href="#projects">
              งานที่เราดูแล
            </a>
            <a className="nav-link text-2xl text-green-700 hover:text-green-500" href="#process">
              แนวทางทำงาน
            </a>
            <a
              className="nav-link text-2xl text-green-700 hover:text-green-500"
              href="https://plaifaengineering.onrender.com/#projects2"
              target="_blank"
              rel="noreferrer"
            >
              ผลงาน
            </a>

          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#10202d] px-5 py-3 text-[12px] font-bold tracking-[0.08em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f47a27] hover:text-[#10202d] sm:flex"
          >
            ขอใบเสนอราคา <ArrowUpRight size={16} />
          </a>

          <button
            className="grid size-11 place-items-center rounded-full border border-[#d4dce1] text-[#10202d] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="เปิดเมนู"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200/80 bg-[#f3f5f6] px-5 py-5 lg:hidden">
            <nav
              className="container flex flex-col gap-4"
              aria-label="Mobile navigation"
            >
              {["#about", "#services", "#projects", "#process", "#contact"].map(
                (href, index) => {
                  const labels = [
                    "เกี่ยวกับเรา",
                    "บริการ",
                    "ผลงาน",
                    "แนวทางทำงาน",
                    "ขอใบเสนอราคา",
                  ];

                  return (
                    <a
                      key={href}
                      href={href}
                      onClick={closeMenu}
                      className="flex items-center justify-between border-b border-slate-200 pb-3 text-sm font-bold text-[#10202d]"
                    >
                      {labels[index]}
                      <ChevronRight
                        size={16}
                        className="text-[#f47a27]"
                      />
                    </a>
                  );
                }
              )}
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative isolate flex min-h-[760px] items-end overflow-hidden bg-[#091824] pb-20 pt-36 text-white lg:min-h-[820px] lg:pb-28">
          <img
            src={images.hero}
            alt="ทีมวิศวกรตรวจสอบตู้ไฟฟ้าในโรงงาน"
            className="absolute inset-0 -z-20 size-full object-cover object-center"
          />

          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,18,30,0.98)_0%,rgba(6,22,34,0.87)_38%,rgba(6,21,32,0.28)_72%,rgba(6,21,32,0.42)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_20%,rgba(244,122,39,0.24),transparent_34%)]" />

          <div className="container relative">
            <div className="max-w-[820px]">
              <div className="mb-7 flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] text-[#ff9a55]">
                <span className="h-px w-10 bg-[#f47a27]" />
                ELECTRICAL • ENGINEERING • PROJECT
              </div>

              <h1 className="display max-w-[760px] text-[clamp(1.4rem,3.5vw,3.25rem)] font-bold leading-[0.98] tracking-[-0.05em]">
                ระบบที่ดี
                <br />
                <span className="text-[#f47a27]">เริ่มจาก</span>ความเข้าใจ
              </h1>

              <p className="mt-8 max-w-[580px] text-[17px] leading-8 text-slate-200/82 sm:text-[19px]">
                Plaifa Engineering คือ Engineering partner สำหรับงานระบบไฟฟ้า
                งานวิศวกรรม และการสนับสนุนโครงการ ตั้งแต่การวางแผนจนถึงส่งมอบงาน
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f47a27] px-6 py-4 text-sm font-bold text-[#10202d] shadow-[0_14px_30px_rgba(244,122,39,0.24)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#ff964e]"
                >
                  ดูบริการของเรา <MoveRight size={18} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/8 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-white/55 hover:bg-white/15"
                >
                  ส่งรายละเอียดงาน <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-white/15 pt-6 text-[11px] font-semibold tracking-[0.1em] text-slate-300">
              <span className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-[#f47a27]" />
                SAFETY FIRST
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck size={15} className="text-[#f47a27]" />
                QUALITY CONTROL
              </span>
              <span className="flex items-center gap-2">
                <Sparkles size={15} className="text-[#f47a27]" />
                ON-TIME DELIVERY
              </span>
            </div>
          </div>

          <div className="absolute bottom-9 right-8 hidden items-center gap-3 text-[10px] font-bold tracking-[0.22em] text-white/55 xl:flex">
            <span className="h-px w-12 bg-white/30" />
            PLAIFA / 2026
          </div>
        </section>

        <section className="border-b border-[#dbe2e5] bg-[#10202d] text-white">
          <div className="container grid divide-y divide-white/12 py-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:py-0">
            <div className="flex items-center gap-4 py-4 sm:px-7 sm:py-6">
              <span className="display text-3xl font-bold text-[#f47a27]">01</span>
              <span className="text-sm leading-6 text-slate-300">
                วางแผน
                <br />
                และประเมินขอบเขตงาน
              </span>
            </div>

            <div className="flex items-center gap-4 py-4 sm:px-7 sm:py-6">
              <span className="display text-3xl font-bold text-[#f47a27]">02</span>
              <span className="text-sm leading-6 text-slate-300">
                ประสานงาน
                <br />
                และสนับสนุนโครงการ
              </span>
            </div>

            <div className="flex items-center gap-4 py-4 sm:px-7 sm:py-6">
              <span className="display text-3xl font-bold text-[#f47a27]">03</span>
              <span className="text-sm leading-6 text-slate-300">
                ติดตั้ง แก้ไข
                <br />
                และส่งมอบงาน
              </span>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#f3f5f6] py-24 lg:py-32">
          <div className="container grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-24">
            <div className="relative">
              <div className="absolute -left-5 -top-5 size-24 rounded-full border border-[#f47a27]/30" />

              <div className="relative overflow-hidden rounded-[28px] bg-[#10202d] shadow-[0_28px_70px_rgba(16,32,45,0.18)]">
                <img
                  src={images.technician}
                  alt="ช่างวิศวกรกำลังตรวจสอบแผงควบคุมไฟฟ้า"
                  className="aspect-[4/4.7] w-full object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-white/15 bg-[#10202d]/82 p-4 text-white backdrop-blur-md">
                  <div>
                    <p className="display text-2xl font-bold">Engineering</p>
                    <p className="text-xs text-slate-300">
                      with clarity & care
                    </p>
                  </div>
                  <HardHat className="text-[#f47a27]" size={30} />
                </div>
              </div>

              <div className="absolute -bottom-7 -right-4 rounded-2xl bg-[#f47a27] p-5 text-[#10202d] shadow-[0_14px_30px_rgba(244,122,39,0.22)]">
                <p className="display text-3xl font-bold">01</p>
                <p className="mt-1 text-[10px] font-bold tracking-[0.14em]">
                  CORE PRINCIPLE
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow">ABOUT PLAIFA ENGINEERING</p>

              <h2 className="section-title mt-5 max-w-[640px] text-[40px] leading-tight">
                Engineering partner
                <br />
                <span className="text-[#f47a27]">สำหรับงานของคุณ</span>
              </h2>

              <p className="mt-7 max-w-[610px] text-[17px] leading-8 text-[#5f6d76]">
                บริษัท ปลายฟ้า เอ็นจิเนียริ่ง จำกัด
                ให้บริการด้านวิศวกรรมและงานระบบ โดยมุ่งเน้นการทำงานที่เป็นระบบ
                คุณภาพของงาน ความปลอดภัย
                และการส่งมอบงานตามความต้องการของลูกค้า
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "ทำงานตามขอบเขตที่ชัดเจน",
                  "สื่อสารกับทีมอย่างเป็นระบบ",
                  "ใส่ใจรายละเอียดหน้างาน",
                  "ส่งมอบพร้อมความมั่นใจ",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-bold text-[#253945]"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-[#f47a27]"
                    />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-11 inline-flex items-center gap-2 text-sm font-bold text-[#10202d] underline decoration-[#f47a27] decoration-2 underline-offset-8 transition-colors hover:text-[#f47a27]"
              >
                คุยกับทีม Plaifa <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-24 lg:py-32">
          <div className="container">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">OUR SERVICES</p>
                <h2 className="section-title mt-5 text-[42px] leading-tight">
                  บริการที่วางใจได้
                  <br />
                  <span className="text-[#f47a27]">ในทุกขั้นตอน</span>
                </h2>
              </div>

              <p className="max-w-[380px] text-[15px] leading-7 text-[#6b7780]">
                ตั้งแต่การประเมินงาน วางแผน ประสานงาน ติดตั้ง ไปจนถึงการส่งมอบ —
                เราช่วยให้โครงการเดินหน้าได้อย่างเป็นระบบ
              </p>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-[26px] border border-[#dce3e6] bg-[#dce3e6] md:grid-cols-2">
              {services.map(
                ({
                  number,
                  icon: Icon,
                  title,
                  subtitle,
                  description,
                  tags,
                }) => (
                  <article
                    key={number}
                    className="group bg-white p-7 transition-colors duration-200 hover:bg-[#10202d] hover:text-white sm:p-9"
                  >
                    <div className="flex items-start justify-between">
                      <span className="display text-sm font-bold text-[#f47a27]">
                        {number}
                      </span>

                      <span className="grid size-12 place-items-center rounded-full bg-[#f3f5f6] text-[#10202d] transition-colors group-hover:bg-[#f47a27]">
                        <Icon size={22} />
                      </span>
                    </div>

                    <h3 className="mt-14 text-2xl font-bold">{title}</h3>

                    <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8a969c] group-hover:text-slate-400">
                      {subtitle}
                    </p>

                    <p className="mt-5 max-w-[430px] text-[15px] leading-7 text-[#6a7880] group-hover:text-slate-300">
                      {description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#dce3e6] px-3 py-1.5 text-[10px] font-bold tracking-[0.06em] text-[#6c7980] group-hover:border-white/18 group-hover:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-[#10202d] py-24 text-white lg:py-32">
          <div className="container">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-[#ff9a55]">OUR PROJECTS</p>
                <h2 className="section-title mt-5 text-[42px] leading-tight">
                  งานระบบที่
                  <br />
                  <span className="text-[#f47a27]">สร้างความมั่นใจ</span>
                </h2>
              </div>

              <p className="max-w-[390px] text-[15px] leading-7 text-slate-300">
                ภาพรวมขอบเขตงานที่เรารับดำเนินการ
                ตั้งแต่งานระบบไฟฟ้าหลักไปจนถึงงานเดินระบบภายในอาคารและโรงงาน
              </p>
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-12">
              {projects.map(
                ({ code, title, description, image, span }) => (
                  <article
                    key={code}
                    className={`group relative min-h-[370px] overflow-hidden rounded-[24px] ${span}`}
                  >
                    <img
                      src={image}
                      alt={title}
                      className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#06131e] via-[#06131e]/30 to-transparent" />

                    <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                      <span className="self-start rounded-full border border-white/25 bg-[#10202d]/45 px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-[#ffb079] backdrop-blur-sm">
                        {code}
                      </span>

                      <div>
                        <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-[#f47a27] text-[#10202d] transition-transform duration-200 group-hover:rotate-[-45deg]">
                          <ArrowDownRight size={19} />
                        </div>

                        <h3 className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
                          {title}
                        </h3>

                        <p className="mt-3 max-w-[460px] text-sm leading-6 text-slate-300">
                          {description}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        <section id="process" className="bg-[#f3f5f6] py-24 lg:py-32">
          <div className="container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="eyebrow text-[24px]">HOW WE WORK</p>

              <h2 className="section-title mt-5 text-[36px] leading-tight">
                ทำงานอย่างเป็นระบบ
                <br />
                <span className="text-[#f47a27]">ตั้งแต่ต้นจนจบ</span>
              </h2>

              <p className="mt-7 max-w-[420px] text-[15px] leading-7 text-[#68757d]">
                เราเชื่อว่างานวิศวกรรมที่ดีไม่ได้จบแค่ติดตั้งเสร็จ
                แต่คือการทำให้ทุกฝ่ายเข้าใจตรงกัน
                และมั่นใจในผลลัพธ์เดียวกัน
              </p>

              <div className="mt-10 flex items-center gap-3 text-sm font-bold text-[#10202d]">
                <span className="grid size-10 place-items-center rounded-full bg-[#f47a27]">
                  <ArrowUpRight size={18} />
                </span>
                Clear scope. Clean execution.
              </div>
            </div>

            <div className="divide-y divide-[#d5dde1] border-y border-[#d5dde1]">
              {process.map(({ step, title, copy }) => (
                <div
                  key={step}
                  className="group grid gap-4 py-6 sm:grid-cols-[70px_1fr_1.1fr] sm:items-center"
                >
                  <span className="display text-2xl font-bold text-[#f47a27]">
                    {step}
                  </span>

                  <h3 className="text-lg font-bold text-[#10202d] transition-colors group-hover:text-[#f47a27]">
                    {title}
                  </h3>

                  <p className="text-sm leading-6 text-[#758188]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden bg-[#f47a27] py-24 text-[#10202d] lg:py-28"
        >
          <div className="absolute -right-24 -top-24 size-80 rounded-full border-[40px] border-[#10202d]/10" />
          <div className="absolute -bottom-32 left-1/3 size-72 rounded-full border-[28px] border-white/15" />

          <div className="container relative grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-24">
            <div>
              <p className="eyebrow text-[#10202d]/65">
                CONTACT PLAIFA ENGINEERING
              </p>

              <h2 className="section-title mt-5 max-w-[670px] text-[38px] leading-tight text-[#10202d]">
                มีงานระบบไฟฟ้า
                <br />
                หรืองานวิศวกรรม?
              </h2>

              <p className="mt-7 max-w-[540px] text-[17px] leading-8 text-[#10202d]/75">
                ส่งรายละเอียดงานมาให้เราเพื่อประเมินขอบเขตและจัดเตรียมใบเสนอราคา
                ทีมของเราพร้อมช่วยเปลี่ยนโจทย์หน้างานให้เป็นแผนที่ชัดเจน
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <a
                  href="tel:0824693659"
                  className="flex items-center gap-3 text-sm font-bold"
                >
                  <span className="grid size-11 place-items-center rounded-full bg-[#10202d] text-[#f47a27]">
                    <Phone size={18} />
                  </span>
                  082-469-3659
                </a>

                <a
                  href="mailto:plaifaeng@hotmail.com"
                  className="flex items-center gap-3 text-sm font-bold"
                >
                  <span className="grid size-11 place-items-center rounded-full bg-[#10202d] text-[#f47a27]">
                    <Mail size={18} />
                  </span>
                  plaifaeng@hotmail.com
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[24px] border border-[#10202d]/12 bg-white/90 p-6 shadow-[0_20px_50px_rgba(16,32,45,0.12)] backdrop-blur sm:p-8"
            >
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold">ส่งรายละเอียดงาน</p>
                  <p className="mt-1 text-xs text-[#68757d]">
                    ทีมงานจะติดต่อกลับเพื่อประเมินเบื้องต้น
                  </p>
                </div>

                <Sparkles size={22} className="text-[#f47a27]" />
              </div>

              {submitted ? (
                <div className="flex min-h-[225px] flex-col items-center justify-center text-center">
                  <span className="grid size-14 place-items-center rounded-full bg-[#10202d] text-[#f47a27]">
                    <CheckCircle2 size={27} />
                  </span>

                  <p className="mt-5 text-xl font-bold">
                    รับรายละเอียดเรียบร้อยแล้ว
                  </p>

                  <p className="mt-2 text-sm text-[#68757d]">
                    ขอบคุณที่ติดต่อ Plaifa Engineering
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-bold underline underline-offset-4"
                  >
                    ส่งข้อมูลใหม่
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="field-label">
                      ชื่อบริษัท
                      <input
                        required
                        name="company"
                        placeholder="ชื่อบริษัท"
                        className="field-input"
                      />
                    </label>

                    <label className="field-label">
                      ชื่อผู้ติดต่อ
                      <input
                        required
                        name="name"
                        placeholder="ชื่อผู้ติดต่อ"
                        className="field-input"
                      />
                    </label>
                  </div>

                  <label className="field-label mt-4 block">
                    รายละเอียดงาน
                    <textarea
                      required
                      name="details"
                      placeholder="เล่าขอบเขตงานหรือปัญหาที่ต้องการให้เราช่วย"
                      rows={4}
                      className="field-input resize-none"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#10202d] px-5 py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-[#1e394b]"
                  >
                    ให้ทีมงานติดต่อกลับ <ArrowUpRight size={17} />
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#091824] py-12 text-white">
        <div className="container">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-[12px] bg-[#f47a27] text-[#0b1b28]">
                  <Zap size={20} strokeWidth={2.8} />
                </span>

                <div>
                  <p className="display text-sm font-bold tracking-[0.12em]">
                    PLAIFA ENGINEERING
                  </p>
                  <p className="mt-1 text-[9px] tracking-[0.2em] text-slate-400">
                    ELECTRICAL • ENGINEERING • TECHNICAL SERVICE
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-[350px] text-sm leading-6 text-slate-400">
                บริษัท ปลายฟ้า เอ็นจิเนียริ่ง จำกัด
                <br />
                Engineering partner สำหรับงานของคุณ
              </p>
            </div>

            <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2 sm:gap-x-14">
              <a
                href="tel:0824693659"
                className="flex items-center gap-3 transition-colors hover:text-[#f47a27]"
              >
                <Phone size={16} className="text-[#f47a27]" />
                082-469-3659
              </a>

              <a
                href="mailto:plaifaeng@gmail.com"
                className="flex items-center gap-3 transition-colors hover:text-[#f47a27]"
              >
                <Mail size={16} className="text-[#f47a27]" />
                plaifaeng@gmail.com
              </a>

              <p className="flex items-start gap-3 sm:col-span-2">
                <MapPin
                  size={16}
                  className="mt-1 shrink-0 text-[#f47a27]"
                />
                153/49 Moo 3 Tambon Sala Klang
                <br />
                Amphoe Bang Kruai, Nonthaburi 11130
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-slate-500 sm:flex-row">
            <span>
              © 2026 Plaifa Engineering Co.,Ltd. All rights reserved.
            </span>

            <span className="flex items-center gap-2">
              <Building2 size={13} />
              Built for better engineering
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
