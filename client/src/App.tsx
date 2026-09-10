import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import CompanyProfile from "./pages/CompanyProfile";
import { useEffect } from "react";

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

function Router() {
  return (
    <Switch>
      <Route path="/company-profile" component={CompanyProfile} />
      <Route path="/" component={Home} />
      <Route>404 - Not Found</Route>
    </Switch>
  );
}

export default function App() {
  return (
    <>
      <CompanyProfileNavLink />
      <Router />
    </>
  );
}
