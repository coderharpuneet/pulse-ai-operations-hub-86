
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
