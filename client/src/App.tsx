import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nextProvider } from "react-i18next";
import { Suspense, useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import i18n from "./lib/i18n";

function Router() {
  const [location] = useLocation();
  
  // Handle language-based routing
  useEffect(() => {
    const path = location;
    const langMatch = path.match(/^\/(ja|en|ko|zh|th|id|tw)/);
    
    if (langMatch) {
      const lang = langMatch[1];
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
      }
    } else {
      // Default to Japanese for root path
      if (i18n.language !== 'ja') {
        i18n.changeLanguage('ja');
        document.documentElement.lang = 'ja';
      }
    }
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/:lang(ja|en|ko|zh|th|id|tw)" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <TooltipProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Toaster />
            <Router />
          </Suspense>
        </TooltipProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
}

export default App;
