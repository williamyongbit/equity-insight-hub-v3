/** The Market Ledger application shell — uses a light editorial theme for the research reading experience. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import FullReportAug21 from "./pages/FullReportAug21";
import V3PreviewAug21 from "./pages/V3PreviewAug21";
import WeekendAug24Full from "./pages/WeekendAug24Full";
import DailyHubAug25 from "./pages/DailyHubAug25";
import DailyHubAug26 from "./pages/DailyHubAug26";
import DailyHubAug27 from "./pages/DailyHubAug27";
import DailyHubAug28 from "./pages/DailyHubAug28";

function RootRoute() {
  const date = new URLSearchParams(window.location.search).get("date");
  if (date === "2026-08-21") return <FullReportAug21 />;
  if (date === "2026-08-24") return <WeekendAug24Full />;
  if (date === "2026-08-25") return <DailyHubAug25 />;
  if (date === "2026-08-26") return <DailyHubAug26 />;
  if (date === "2026-08-27") return <DailyHubAug27 />;
  return <DailyHubAug28 />;
}

function Routes() {
  return (
    <Switch>
      <Route path="/" component={RootRoute} />
      <Route path="/archive/2026-08-21" component={V3PreviewAug21} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Routes />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
