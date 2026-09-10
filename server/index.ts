import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Serve the new company profile PDF inline.
  // This route is intentionally separate so the existing PDF route is untouched.
  app.get("/company-profile.pdf", (_req, res) => {
    const pdfPath = path.resolve(process.cwd(), "docs", "Company profile.pdf");
    res.type("application/pdf");
    res.setHeader("Content-Disposition", 'inline; filename="Company profile.pdf"');
    res.sendFile(pdfPath);
  });

  // Keep the existing company profile PDF route unchanged.
  app.get("/docs/CR-Company-profile-2026.pdf", (_req, res) => {
    const pdfPath = path.resolve(process.cwd(), "docs", "CR-Company-profile-2026.pdf");
    res.type("application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=CR-Company-profile-2026.pdf");
    res.sendFile(pdfPath);
  });

  // Explicit SPA entry route for direct navigation to Company Profile.
  app.get("/company-profile", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  // Handle client-side routing for all other application routes.
  app.use((_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
