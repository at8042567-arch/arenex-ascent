import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Download, Sparkles, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const LogoGenerator = () => {
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedLogo, setGeneratedLogo] = useState<string | null>(null);

  const generateLogo = async () => {
    if (!companyName || !industry) {
      toast.error("Please enter both company name and industry");
      return;
    }

    setLoading(true);
    setGeneratedLogo(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-logo', {
        body: { companyName, industry }
      });

      if (error) {
        console.error("Error generating logo:", error);
        toast.error(error.message || "Failed to generate logo. Please try again.");
        return;
      }

      if (data.error) {
        toast.error(data.error);
        return;
      }

      if (data.image) {
        setGeneratedLogo(data.image);
        toast.success("Logo generated successfully!");
      } else {
        toast.error("No logo was generated. Please try again.");
      }
    } catch (error) {
      console.error("Error generating logo:", error);
      toast.error("Failed to generate logo. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadLogo = () => {
    if (!generatedLogo) return;
    
    const link = document.createElement("a");
    link.href = generatedLogo;
    link.download = `${companyName.replace(/\s+/g, "-")}-logo.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Logo downloaded!");
  };

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Company Name</label>
          <Input
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="e.g., TechFlow"
            className="bg-background/50 border-border/50"
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Industry / Style</label>
          <Input
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="e.g., Technology, Healthcare, Fashion"
            className="bg-background/50 border-border/50"
          />
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <Button
          variant="default"
          size="lg"
          onClick={generateLogo}
          disabled={loading || !companyName || !industry}
          className="min-w-[200px]"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 mr-2" />
              Generate Logo
            </>
          )}
        </Button>
      </div>

      {/* Result Section */}
      <div className="clean-card p-8 rounded-2xl min-h-[400px] flex items-center justify-center">
        {loading ? (
          <div className="text-center">
            <Loader2 className="w-16 h-16 text-primary animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">AI is crafting your logo...</p>
            <p className="text-xs text-muted-foreground mt-2">This may take 20-30 seconds</p>
          </div>
        ) : generatedLogo ? (
          <div className="text-center space-y-6">
            <div className="relative inline-block">
              <img
                src={generatedLogo}
                alt="Generated Logo"
                className="max-w-full max-h-[300px] rounded-xl shadow-2xl shadow-primary/20"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-4">
              <Button variant="default" onClick={downloadLogo} className="w-full sm:w-auto px-4">
                <Download className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>Download Logo</span>
              </Button>
              <Button variant="outline" onClick={generateLogo} className="w-full sm:w-auto px-4">
                <RefreshCw className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>Regenerate</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <Sparkles className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground">
              Enter your company name and industry, then click Generate
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
