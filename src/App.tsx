
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LiveOps from "./pages/LiveOps";
import Promotions from "./pages/Promotions";
import Warehouse from "./pages/Warehouse";
import Sustainability from "./pages/Sustainability";
import TrustLedger from "./pages/TrustLedger";
import Security from "./pages/Security";
import Workforce from "./pages/Workforce";
import Heatmap from "./pages/Heatmap";
import StoreFeedPage from "./pages/StoreFeed";
import Contacts from "./pages/Contacts";
import CCTV from "./pages/CCTV";
import Analytics from "./pages/Analytics";
import DockOps from "./pages/DockOps";
import Monitor from "./pages/Monitor";
import AdvancedMaintenance from "./pages/AdvancedMaintenance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/live-ops" element={<LiveOps />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/trustledger" element={<TrustLedger />} />
          <Route path="/security" element={<Security />} />
          <Route path="/workforce" element={<Workforce />} />
          <Route path="/heatmap" element={<Heatmap />} />
          <Route path="/store-feed" element={<StoreFeedPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cctv" element={<CCTV />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/dock-ops" element={<DockOps />} />
          <Route path="/monitor" element={<Monitor />} />
          <Route path="/advanced-maintenance" element={<AdvancedMaintenance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
