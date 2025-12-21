import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, Printer, Download } from "lucide-react";
import { toast } from "sonner";
import html2pdf from "html2pdf.js";

interface InvoiceItem {
  id: string;
  item: string;
  price: number;
  qty: number;
}

export const InvoiceGenerator = () => {
  const [clientName, setClientName] = useState("Client Name");
  const [invoiceNumber, setInvoiceNumber] = useState("INV-001");
  const [taxPercent, setTaxPercent] = useState(10);
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: "1", item: "Web Development", price: 1500, qty: 1 },
    { id: "2", item: "Logo Design", price: 300, qty: 1 },
  ]);
  const invoiceRef = useRef<HTMLDivElement>(null);

  const addItem = () => {
    setItems([...items, { id: Date.now().toString(), item: "New Item", price: 0, qty: 1 }]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * (taxPercent / 100);
  const total = subtotal + tax;

  const getInvoiceHTML = () => `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Invoice ${invoiceNumber}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', Arial, sans-serif; padding: 40px; background: #fff; color: #1a1a1a; }
        .header { display: flex; justify-content: space-between; margin-bottom: 40px; }
        .logo { font-size: 28px; font-weight: bold; color: #00a8ff; }
        .invoice-info { text-align: right; }
        .invoice-info h2 { font-size: 24px; color: #00a8ff; }
        .client { margin-bottom: 30px; }
        .client h3 { color: #666; margin-bottom: 8px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #eee; }
        th { background: #f5f5f5; font-weight: 600; }
        .totals { text-align: right; }
        .totals p { margin: 8px 0; }
        .total { font-size: 24px; font-weight: bold; color: #00a8ff; }
        .footer { margin-top: 60px; text-align: center; color: #888; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">ARENEX</div>
        <div class="invoice-info">
          <h2>INVOICE</h2>
          <p>${invoiceNumber}</p>
          <p>${new Date().toLocaleDateString()}</p>
        </div>
      </div>
      <div class="client">
        <h3>Bill To:</h3>
        <p><strong>${clientName}</strong></p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          ${items.map((item) => `
            <tr>
              <td>${item.item}</td>
              <td>$${item.price.toFixed(2)}</td>
              <td>${item.qty}</td>
              <td>$${(item.price * item.qty).toFixed(2)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div class="totals">
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Tax (${taxPercent}%): $${tax.toFixed(2)}</p>
        <p class="total">Total: $${total.toFixed(2)}</p>
      </div>
      <div class="footer">
        <p>Thank you for your business!</p>
        <p>Arenex TechWorks | www.arenextechworks.com</p>
      </div>
    </body>
    </html>
  `;

  const printInvoice = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(getInvoiceHTML());
      printWindow.document.close();
      printWindow.print();
      toast.success("Printing invoice...");
    }
  };

  const downloadPDF = () => {
    const element = document.createElement("div");
    element.innerHTML = getInvoiceHTML();
    document.body.appendChild(element);

    const opt = {
      margin: 0,
      filename: "ArenexTechWorks-Invoice.pdf",
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in" as const, format: "letter" as const, orientation: "portrait" as const },
    };

    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        document.body.removeChild(element);
        toast.success("PDF downloaded successfully!");
      });
  };

  return (
    <div className="space-y-6">
      {/* Invoice Header */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Client Name</label>
          <Input
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Client Name"
            className="bg-background/50 border-border/50"
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Invoice Number</label>
          <Input
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            placeholder="INV-001"
            className="bg-background/50 border-border/50"
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Tax (%)</label>
          <Input
            type="number"
            value={taxPercent}
            onChange={(e) => setTaxPercent(parseFloat(e.target.value) || 0)}
            placeholder="10"
            min="0"
            max="100"
            className="bg-background/50 border-border/50"
          />
        </div>
      </div>

      {/* Items Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left p-4 text-muted-foreground font-medium">Item</th>
                <th className="text-left p-4 text-muted-foreground font-medium w-32">Price ($)</th>
                <th className="text-left p-4 text-muted-foreground font-medium w-24">Qty</th>
                <th className="text-right p-4 text-muted-foreground font-medium w-32">Amount</th>
                <th className="p-4 w-12"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-border/30">
                  <td className="p-4">
                    <Input
                      value={item.item}
                      onChange={(e) => updateItem(item.id, "item", e.target.value)}
                      className="bg-transparent border-0 p-0 h-auto focus-visible:ring-0"
                    />
                  </td>
                  <td className="p-4">
                    <Input
                      type="number"
                      value={item.price}
                      onChange={(e) => updateItem(item.id, "price", parseFloat(e.target.value) || 0)}
                      className="bg-transparent border-0 p-0 h-auto focus-visible:ring-0 w-24"
                    />
                  </td>
                  <td className="p-4">
                    <Input
                      type="number"
                      value={item.qty}
                      onChange={(e) => updateItem(item.id, "qty", parseInt(e.target.value) || 1)}
                      className="bg-transparent border-0 p-0 h-auto focus-visible:ring-0 w-16"
                    />
                  </td>
                  <td className="p-4 text-right font-medium text-primary">
                    ${(item.price * item.qty).toFixed(2)}
                  </td>
                  <td className="p-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-border/30">
          <Button variant="ghost" onClick={addItem} className="text-primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </Button>
        </div>
      </div>

      {/* Totals */}
      <div className="glass-card p-6">
        <div className="flex flex-col items-end space-y-2">
          <div className="flex justify-between w-full max-w-xs">
            <span className="text-muted-foreground">Subtotal:</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between w-full max-w-xs">
            <span className="text-muted-foreground">Tax ({taxPercent}%):</span>
            <span className="font-medium">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between w-full max-w-xs pt-2 border-t border-border/50">
            <span className="font-display font-bold text-lg">Total:</span>
            <span className="font-display font-bold text-lg text-primary">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-end gap-3">
        <Button variant="outline" onClick={downloadPDF} className="w-full sm:w-auto px-4">
          <Download className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>Download PDF</span>
        </Button>
        <Button variant="glow" onClick={printInvoice} className="w-full sm:w-auto px-4">
          <Printer className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>Print</span>
        </Button>
      </div>
    </div>
  );
};
