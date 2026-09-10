import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import CompanyProfile from "./pages/CompanyProfile";
import Home from "./pages/Home";

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
    const handleSubmit = async (event: Event) => {
      const form = event.target as HTMLFormElement | null;
      if (!form || !form.querySelector('input[name="company"]')) return;

      const data = new FormData(form);
      const company = String(data.get("company") || "").trim();
      const name = String(data.get("name") || "").trim();
      const details = String(data.get("details") || "").trim();

      if (!company || !name || !details) return;

      try {
        const response = await fetch("https://formsubmit.co/ajax/plaifaeng@hotmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `งานใหม่จากเว็บไซต์ Plaifa Engineering - ${company}`,
            company,
            name,
            details,
            _url: window.location.href,
          }),
        });

        if (!response.ok) {
          console.error("Contact form email failed:", response.status);
        }
      } catch (error) {
        console.error("Contact form email error:", error);
      }
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
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
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
