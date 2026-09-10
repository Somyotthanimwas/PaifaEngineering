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
    link.className = "nav-link";
    link.textContent = "Company Profile";
    link.setAttribute("data-company-profile-nav", "true");

    nav.insertBefore(link, nav.children[1] || null);

    return () => link.remove();
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

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <CompanyProfileNavLink />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
