const electricalImages = [
  "/assets/plaifa-mdb.jpg",
  "/assets/plaifa-transformer.jpg",
  "/assets/plaifa-cabletray.jpg",
  "/assets/plaifa-technician.jpg",
  "/assets/plaifa-switchboard-inspection.jpg",
  "/assets/plaifa-cable-installation.jpg",
  "/assets/plaifa-control-panel.jpg",
  "/assets/plaifa-grounding-system.jpg",
];

export default function Projects2() {
  return (
    <main className="min-h-screen bg-[#091824] p-4 sm:p-6 lg:p-10">
      <div className="mx-auto grid max-w-[1600px] gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {electricalImages.map((image) => (
          <img
            key={image}
            src={image}
            alt="ผลงานงานระบบไฟฟ้า Plaifa Engineering"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_18px_45px_rgba(0,0,0,0.24)]"
            loading="lazy"
          />
        ))}
      </div>
    </main>
  );
}
