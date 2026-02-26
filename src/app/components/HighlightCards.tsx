import { BarChart2, Layout, Layers, Building2 } from 'lucide-react';

const highlights = [
  {
    icon: <BarChart2 className="w-5 h-5" aria-hidden />,
    title: 'Data-led improvements',
    subtitle: 'Analytics-informed iteration to reduce friction and improve conversion where supported.',
  },
  {
    icon: <Layout className="w-5 h-5" aria-hidden />,
    title: 'Design systems at scale',
    subtitle: 'Tokens, components, governance, and WCAG-minded standards that scale across teams.',
  },
  {
    icon: <Layers className="w-5 h-5" aria-hidden />,
    title: 'Alignment',
    subtitle: 'React/TypeScript fluency to reduce handoff friction and improve UI quality when needed.',
  },
  {
    icon: <Building2 className="w-5 h-5" aria-hidden />,
    title: 'Enterprise environments',
    subtitle: 'Ulta Beauty • CVS Health/Aetna • American Airlines • Cox Automotive • General Electric',
  },
] as const;

export function HighlightCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {highlights.map((item) => (
        <div
          key={item.title}
          className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
            {item.icon}
          </div>
          <h3 className="font-medium mb-1">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
