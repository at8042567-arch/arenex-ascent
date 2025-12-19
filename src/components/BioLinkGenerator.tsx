import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, Plus, Trash2, Link, Instagram, Twitter, Linkedin, Globe } from "lucide-react";
import { toast } from "sonner";

interface LinkItem {
  id: string;
  title: string;
  url: string;
}

export const BioLinkGenerator = () => {
  const [name, setName] = useState("Your Name");
  const [bio, setBio] = useState("Digital Creator ✨");
  const [links, setLinks] = useState<LinkItem[]>([
    { id: "1", title: "Portfolio", url: "https://example.com" },
    { id: "2", title: "Instagram", url: "https://instagram.com" },
  ]);
  const [copied, setCopied] = useState(false);

  const addLink = () => {
    setLinks([...links, { id: Date.now().toString(), title: "New Link", url: "https://" }]);
  };

  const removeLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const updateLink = (id: string, field: "title" | "url", value: string) => {
    setLinks(links.map((link) => (link.id === id ? { ...link, [field]: value } : link)));
  };

  const generateCode = () => {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} | Bio Links</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; background: #0a0a0a; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; }
    .container { max-width: 400px; width: 100%; text-align: center; }
    .avatar { width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(135deg, #00a8ff, #00ffc8); margin: 0 auto 20px; }
    h1 { color: #fff; font-size: 24px; margin-bottom: 8px; }
    p { color: #888; margin-bottom: 30px; }
    .links { display: flex; flex-direction: column; gap: 12px; }
    a { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 16px 24px; border-radius: 12px; text-decoration: none; transition: all 0.3s; }
    a:hover { background: rgba(0,168,255,0.2); border-color: #00a8ff; transform: translateY(-2px); }
  </style>
</head>
<body>
  <div class="container">
    <div class="avatar"></div>
    <h1>${name}</h1>
    <p>${bio}</p>
    <div class="links">
      ${links.map((link) => `<a href="${link.url}" target="_blank">${link.title}</a>`).join("\n      ")}
    </div>
  </div>
</body>
</html>`.trim();
    return html;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generateCode());
    setCopied(true);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const getLinkIcon = (url: string) => {
    if (url.includes("instagram")) return Instagram;
    if (url.includes("twitter") || url.includes("x.com")) return Twitter;
    if (url.includes("linkedin")) return Linkedin;
    return Globe;
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Editor */}
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Display Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="bg-background/50 border-border/50"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Bio</label>
            <Input
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Short bio..."
              className="bg-background/50 border-border/50"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm text-muted-foreground">Links</label>
            <Button variant="ghost" size="sm" onClick={addLink} className="text-primary">
              <Plus className="w-4 h-4 mr-1" />
              Add Link
            </Button>
          </div>
          {links.map((link) => (
            <div key={link.id} className="flex gap-2">
              <Input
                value={link.title}
                onChange={(e) => updateLink(link.id, "title", e.target.value)}
                placeholder="Title"
                className="bg-background/50 border-border/50 flex-1"
              />
              <Input
                value={link.url}
                onChange={(e) => updateLink(link.id, "url", e.target.value)}
                placeholder="URL"
                className="bg-background/50 border-border/50 flex-[2]"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeLink(link.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <Button onClick={copyCode} variant="glow" className="w-full">
          {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
          {copied ? "Copied!" : "Copy Code"}
        </Button>
      </div>

      {/* Phone Preview */}
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* Phone Frame */}
          <div className="w-[280px] h-[560px] bg-background rounded-[40px] border-4 border-muted p-3 shadow-2xl shadow-primary/20">
            {/* Screen */}
            <div className="w-full h-full bg-gradient-to-b from-background to-muted/30 rounded-[32px] overflow-hidden flex flex-col items-center pt-12 px-4">
              {/* Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-muted rounded-full" />

              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 flex items-center justify-center text-2xl font-display font-bold text-primary-foreground">
                {name.charAt(0).toUpperCase()}
              </div>

              {/* Name & Bio */}
              <h3 className="font-display font-bold text-lg text-foreground">{name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{bio}</p>

              {/* Links */}
              <div className="w-full space-y-2 overflow-y-auto scrollbar-hidden">
                {links.map((link) => {
                  const IconComponent = getLinkIcon(link.url);
                  return (
                    <div
                      key={link.id}
                      className="w-full glass-card p-3 rounded-xl flex items-center gap-3 hover:border-primary/50 transition-colors cursor-pointer"
                    >
                      <IconComponent className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{link.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
