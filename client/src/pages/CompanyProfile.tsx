import { ArrowLeft, ArrowUpRight, Building2, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

export default function CompanyProfile() {
  return (
    <div className="min-h-screen bg-[#f3f5f6] text-[#10202d]">
      <header className="border-b border-slate-200/80 bg-[#f3f5f6]/95 backdrop-blur-xl">
        <div className="container flex h-[76px] items-center justify-between">
          <a href="/" className="flex items-center" aria-label="กลับหน้าหลัก Plaifa Engineering">
            <img src="/assets/paifa-engineering-logo.png" alt="Plaifa Engineering" className="h-12 w-auto object-contain" />
          </a>
          <a href="/" className="inline-flex items-center gap-2 rounded-full bg-[#10202d] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#f47a27] hover:text-[#10202d]">
            <ArrowLeft size={16} /> กลับหน้าหลัก
          </a>
        </div>
      </header>

      <main>
        <section className="bg-[#10202d] py-20 text-white lg:py-28">
          <div className="container">
            <a
              href="/docs/Company%20profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[18px] font-bold tracking-[0.24em] text-[#ff9a55] transition hover:text-white hover:underline"
            >           
              COMPANY PROFILE
            </a>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">บริษัท ปลายฟ้า เอ็นจิเนียริ่ง จำกัด</h1>
            <p className="mt-6 max-w-2xl text-xg leading-8 text-slate-300">Plaifa Engineering Co.,Ltd. — Engineering partner สำหรับงานระบบไฟฟ้า งานวิศวกรรม และการสนับสนุนโครงการ</p>
          </div>
        </section>

        <section className="container py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
            <div className="overflow-hidden rounded-[28px] bg-[#10202d] shadow-[0_28px_70px_rgba(16,32,45,0.16)]">
              <img src="/assets/plaifa-technician.jpg" alt="ทีมงาน Plaifa Engineering" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#f47a27]">ABOUT US</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">ทำงานด้วยความเข้าใจ เพื่อให้ระบบทำงานได้จริง</h2>
              <p className="mt-7 text-[16px] leading-8 text-[#5f6d76]">Plaifa Engineering ให้บริการงานระบบไฟฟ้าและงานวิศวกรรม โดยให้ความสำคัญกับการเข้าใจโจทย์ของลูกค้า การวางแผนงานอย่างเป็นระบบ คุณภาพ ความปลอดภัย และการส่งมอบงานตามขอบเขตที่ตกลงกัน</p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {["วางแผนและประเมินหน้างาน", "ติดตั้งระบบไฟฟ้า", "ควบคุมคุณภาพและความปลอดภัย", "ตรวจสอบและสนับสนุนหลังงาน"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold"><CheckCircle2 size={19} className="shrink-0 text-[#f47a27]" />{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#f47a27]">OUR APPROACH</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">จากโจทย์หน้างาน สู่ผลลัพธ์ที่ชัดเจน</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[["01", "เข้าใจงาน", "รับโจทย์และประเมินเงื่อนไขของโครงการก่อนเริ่มงาน"], ["02", "วางระบบ", "วางแผน ประสานงาน และจัดลำดับการทำงานให้เหมาะสม"], ["03", "ส่งมอบ", "ตรวจสอบรายละเอียดและส่งมอบงานด้วยความรับผิดชอบ"]].map(([no, title, text]) => (
                <article key={no} className="rounded-[24px] border border-[#dce3e6] p-7"><span className="text-3xl font-bold text-[#f47a27]">{no}</span><h3 className="mt-8 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-[#68757d]">{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f47a27] py-16 text-[#10202d]">
          <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div><p className="text-[11px] font-bold tracking-[0.22em] text-[#10202d]/65">PLAIFA ENGINEERING</p><h2 className="mt-3 text-3xl font-bold">พร้อมคุยรายละเอียดโครงการของคุณ</h2></div>
            <a href="/?utm_source=company-profile#contact" className="inline-flex items-center gap-2 rounded-full bg-[#10202d] px-6 py-4 text-sm font-bold text-white">ขอใบเสนอราคา <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="bg-[#091824] py-10 text-white">
        <div className="container flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div><div className="flex items-center gap-3"><Building2 size={18} className="text-[#f47a27]" /><span className="font-bold">Plaifa Engineering Co.,Ltd.</span></div><p className="mt-2 text-xs text-slate-400">Electrical • Engineering • Technical Service</p></div>
          <div className="grid gap-2 text-xs text-slate-300 sm:text-right"><a href="tel:0824693659" className="flex items-center gap-2 sm:justify-end"><Phone size={14} className="text-[#f47a27]" />082-469-3659</a><a href="mailto:plaifaeng@gmail.com" className="flex items-center gap-2 sm:justify-end"><Mail size={14} className="text-[#f47a27]" />plaifaeng@gmail.com</a><span className="flex items-center gap-2 sm:justify-end"><MapPin size={14} className="text-[#f47a27]" />Bang Kruai, Nonthaburi 11130</span></div>
        </div>
      </footer>
    </div>
  );
}
