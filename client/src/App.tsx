import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import CompanyProfile from "./pages/CompanyProfile";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function CompanyProfileNavLink() {
  useEffect(() => {
    if (window.location.pathname !== "/") return;
    const nav = document.querySelector('nav[aria-label="Main navigation"]');
    if (!nav || nav.querySelector('[data-company-profile-nav]')) return;
    const link = document.createElement("a");
    link.href = "/company-profile";
    link.className = "nav-link text-xl text-green-700 hover:text-green-500";
    link.textContent = "Company Profile";
    link.setAttribute("data-company-profile-nav", "true");
    nav.insertBefore(link, nav.children[1] || null);
    return () => link.remove();
  }, []);
  return null;
}

function ContactFormEmailBridge() {
  useEffect(() => {
    const handleSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement | null;
      if (!form || !form.querySelector('input[name="company"]')) return;

      const data = new FormData(form);
      const company = String(data.get("company") || "").trim();
      const name = String(data.get("name") || "").trim();
      const details = String(data.get("details") || "").trim();
      if (!company || !name || !details) return;

      const target = `plaifa_contact_${Date.now()}`;
      const iframe = document.createElement("iframe");
      iframe.name = target;
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      const submitForm = document.createElement("form");
      submitForm.method = "POST";
      submitForm.action = "https://formsubmit.co/plaifaeng@hotmail.com";
      submitForm.target = target;
      submitForm.style.display = "none";

      const fields: Record<string, string> = {
        _subject: `งานใหม่จากเว็บไซต์ Plaifa Engineering - ${company}`,
        _template: "table",
        _captcha: "false",
        company,
        name,
        details,
        _url: window.location.href,
      };

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        submitForm.appendChild(input);
      });

      document.body.appendChild(submitForm);
      submitForm.submit();

      window.setTimeout(() => {
        iframe.remove();
        submitForm.remove();
      }, 10000);
    };

    document.addEventListener("submit", handleSubmit, true);
    return () => document.removeEventListener("submit", handleSubmit, true);
  }, []);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/company-profile"} component={CompanyProfile} />
      <Route path={"/projects"} component={Projects} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <CompanyProfileNavLink />
          <ContactFormEmailBridge />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
