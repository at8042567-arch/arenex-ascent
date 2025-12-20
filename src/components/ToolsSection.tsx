import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BioLinkGenerator } from "./BioLinkGenerator";
import { InvoiceGenerator } from "./InvoiceGenerator";
import { LogoGenerator } from "./LogoGenerator";
import { Link2, FileText, Sparkles, Palette } from "lucide-react";

export const ToolsSection = () => {
  return (
    <section id="tools" className="py-16 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Arenex Labs</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Free <span className="text-gradient">AI Tools</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful tools to streamline your workflow, completely free
          </p>
        </div>

        {/* Tools Tabs */}
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="logo" className="w-full">
            <TabsList className="glass-card w-full sm:w-auto h-auto p-2 gap-2 flex flex-wrap justify-center mb-8">
              <TabsTrigger
                value="logo"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-lg font-display text-sm"
              >
                <Palette className="w-4 h-4 mr-2" />
                AI Logo Generator
              </TabsTrigger>
              <TabsTrigger
                value="biolink"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-lg font-display text-sm"
              >
                <Link2 className="w-4 h-4 mr-2" />
                Bio-Link Generator
              </TabsTrigger>
              <TabsTrigger
                value="invoice"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-lg font-display text-sm"
              >
                <FileText className="w-4 h-4 mr-2" />
                Invoice Generator
              </TabsTrigger>
            </TabsList>

            <TabsContent value="logo" className="glass-card p-6 sm:p-8 rounded-2xl">
              <LogoGenerator />
            </TabsContent>

            <TabsContent value="biolink" className="glass-card p-6 sm:p-8 rounded-2xl">
              <BioLinkGenerator />
            </TabsContent>

            <TabsContent value="invoice" className="glass-card p-6 sm:p-8 rounded-2xl">
              <InvoiceGenerator />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
