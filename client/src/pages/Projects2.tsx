const electricalImages = [
  {
    image: "/assets/plaifa-mdb.jpg",
    title: "ติดตั้งตู้ MDB",
    description: "ติดตั้งตู้จ่ายไฟหลัก จัดระเบียบสายไฟ และตรวจสอบความพร้อมของระบบ",
  },
  {
    image: "/assets/plaifa-transformer.jpg",
    title: "ติดตั้งหม้อแปลงไฟฟ้า",
    description: "งานติดตั้งหม้อแปลง เชื่อมต่อระบบ และตรวจสอบอุปกรณ์ประกอบที่เกี่ยวข้อง",
  },
  {
    image: "/assets/plaifa-cabletray.jpg",
    title: "เดิน Cable Tray & Wireway",
    description: "จัดเส้นทางรางและสายไฟให้เป็นระเบียบ ปลอดภัย และดูแลรักษาได้ง่าย",
  },
  {
    image: "/assets/plaifa-technician.jpg",
    title: "ตรวจสอบและแก้ไขระบบไฟฟ้า",
    description: "ตรวจสอบหน้างาน เข้าหัวสาย ต่อเข้าตู้ไฟ และแก้ไขรายละเอียดของระบบ",
  },
  {
    image: "/assets/plaifa-switchboard-inspection.jpg",
    title: "ตรวจสอบตู้สวิตช์บอร์ด",
    description: "ตรวจสอบตู้ไฟฟ้าแรงต่ำ อุปกรณ์ป้องกัน และความเรียบร้อยก่อนใช้งาน",
  },
  {
    image: "/assets/plaifa-cable-installation.jpg",
    title: "ติดตั้งรางเคเบิลและสายไฟ",
    description: "ติดตั้งรางเคเบิลและเดินสายไฟในอาคารอุตสาหกรรมตามแนวทางงานระบบ",
  },
  {
    image: "/assets/plaifa-control-panel.jpg",
    title: "ทดสอบตู้ควบคุมไฟฟ้า",
    description: "ตรวจวัดและทดสอบวงจรภายในตู้ควบคุม เพื่อความมั่นใจก่อนส่งมอบงาน",
  },
  {
    image: "/assets/plaifa-grounding-system.jpg",
    title: "ระบบกราวด์และสถานีไฟฟ้า",
    description: "จัดทำระบบกราวด์และการเชื่อมต่อสำหรับหม้อแปลงและอุปกรณ์ไฟฟ้า",
  },
  {
    image "/assets/plaifa-grounding-system.jpg",
  },
];

export default function Projects2() {
  return (
    <main className="min-h-screen bg-[#091824] p-4 sm:p-6 lg:p-10">
      <a
        href="/"
        className="mx-auto mb-5 flex w-fit items-center rounded-full border border-white/25 px-4 py-2 text-sm font-bold text-white transition hover:border-[#f47a27] hover:bg-[#f47a27] hover:text-[#10202d]"
      >
        ← กลับหน้าหลัก
      </a>
      <div className="mx-auto grid max-w-[1600px] gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {electricalImages.map(({ image, title, description }) => (
          <figure
            key={image}
            className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_45px_rgba(0,0,0,0.24)]"
          >
            <img
              src={image}
              alt={title}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="p-5 text-[#10202d]">
              <h2 className="text-lg font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
