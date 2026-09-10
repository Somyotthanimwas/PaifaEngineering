import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

const projects = [
  {
    code: "MDB",
    title: "ติดตั้งตู้ MDB",
    subtitle: "MAIN DISTRIBUTION BOARD",
    description:
      "งานติดตั้งตู้จ่ายไฟหลัก จัดระเบียบระบบจ่ายไฟ และตรวจสอบความเรียบร้อยก่อนส่งมอบ",
    image: "/assets/plaifa-mdb.jpg",
  },
  {
    code: "TRF",
    title: "ติดตั้งหม้อแปลงไฟฟ้า",
    subtitle: "TRANSFORMER INSTALLATION",
    description:
      "งานติดตั้งหม้อแปลง การเชื่อมต่อระบบ และงานประกอบที่เกี่ยวข้อง โดยคำนึงถึงความปลอดภัยหน้างาน",
    image: "/assets/plaifa-transformer.jpg",
  },
  {
    code: "CT / WW",
    title: "Cable Tray & Wireway",
    subtitle: "CABLE ROUTING SYSTEM",
    description:
      "จัดแนวเส้นทางสายไฟให้เป็นระบบ ลดความซับซ้อน และรองรับการตรวจสอบบำรุงรักษาในอนาคต",
    image: "/assets/plaifa-cabletray.jpg",
  },
  {
    code: "TECH",
    title: "ตรวจสอบและแก้ไขระบบไฟฟ้า",
    subtitle: "TECHNICAL SERVICE",
    description:
      "ตรวจสอบหน้างาน วิเคราะห์ปัญหา งานเข้าหัวสาย ต่อเข้าตู้ไฟ และปรับปรุงรายละเอียดของระบบ",
    image: "/assets/plaifa-technician.jpg",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#f3f5f6] text-[#10202d]">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f3f5f6]/95 backdrop-blur-xl">
        <div className="container flex h-[76px] items-center justify-between">
          <a href="/" className="flex items-center" aria-label="กลับหน้าหลัก">
            <img
              src="/assets/paifa-engineering-logo.png"
              alt="Plaifa Engineering"
              className="h-12 w-auto object-contain"
            />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#d4dce1] px-4 py-2.5 text-sm font-bold transition hover:border-[#f47a27] hover:text-[#f47a27]"
          >
            <ArrowLeft size={16} /> กลับหน้าหลัก
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#091824] py-20 text-white lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(244,122,39,0.22),transparent_35%)]" />
          <div className="container relative">
            <div className="mb-6 flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] text-[#ff9a55]">
              <span className="h-px w-10 bg-[#f47a27]" />
              PLAIFA ENGINEERING / PROJECTS
            </div>
            <h1 className="display max-w-4xl text-5xl font-bold leading-[1] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              ผลงานที่ผ่านมา
              <br />
              <span className="text-[#f47a27]">OUR PROJECTS</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              ตัวอย่างงานระบบไฟฟ้าและงานสนับสนุนทางวิศวกรรมของ Plaifa Engineering
              โดยเน้นคุณภาพ ความปลอดภัย และความเรียบร้อยของงานหน้างาน
            </p>
          </div>
        </section>

        <section className="container py-16 lg:py-24">
          <div className="grid gap-7 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.code}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,31,45,0.07)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#10202d]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="size-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091824]/75 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-[#f47a27] px-3 py-1.5 text-[10px] font-black tracking-[0.16em] text-[#10202d]">
                    {project.code}
                  </div>
                  <div className="absolute bottom-5 left-5 text-xs font-bold tracking-[0.16em] text-white/75">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <div className="text-[10px] font-black tracking-[0.18em] text-[#f47a27]">
                    {project.subtitle}
                  </div>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {project.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#10202d]">
                    <CheckCircle2 size={17} className="text-[#f47a27]" />
                    Engineering • Safety • Quality
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container pb-20 lg:pb-28">
          <div className="rounded-[32px] bg-[#10202d] px-7 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-12">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#ff9a55]">
                HAVE A PROJECT?
              </div>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                ให้เราเข้าไปประเมินงานของคุณ
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                ส่งรายละเอียดงานเบื้องต้นให้ทีมงาน Plaifa Engineering
                เพื่อประเมินขอบเขตและแนวทางดำเนินงาน
              </p>
            </div>
            <a
              href="/#contact"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#f47a27] px-6 py-3.5 text-sm font-bold text-[#10202d] transition hover:-translate-y-0.5 hover:bg-[#ff964e] lg:mt-0"
            >
              ขอใบเสนอราคา <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-7">
        <div className="container flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© Plaifa Engineering Co.,Ltd.</span>
          <span>Electrical • Engineering • Project</span>
        </div>
      </footer>
    </div>
  );
}
