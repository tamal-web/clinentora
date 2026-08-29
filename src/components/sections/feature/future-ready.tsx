import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { CheckCircle2 } from "lucide-react";
import Container from "../../container";

// [feature label, qlerkly has it, lexora has it]
const comparisonRows: [string, boolean, boolean][] = [
  ["Case organisation",      true,  true],
  ["Deadline tracking",      true,  true],
  ["Document management",    true,  true],
  ["Audit trail",            true,  true],
  ["Team assignment",        true,  true],
  ["Human review sign-off",  true,  true],
  ["Agentic AI automation",  false, true],
  ["E-Discovery search",     false, true],
  ["Contract lifecycle",     false, true],
  ["Jurisdiction sync",      false, true],
  ["AI document summaries",  false, true],
];

const ComparisonTable = () => {
  return (
    <section className="md:py-[60px] py-12">
      <Container className="md:space-y-16 space-y-8">
        <StaggerContainer className="text-center md:max-w-2xl max-w-xs mx-auto">
          <AnimateOnView blur>
            <h2 className="h2 md:mb-5 mb-3">Qlerkly or Lexora?</h2>
          </AnimateOnView>
          <AnimateOnView blur delay={0.2}>
            <p className="text-muted-foreground">
              Both are built for legal teams. The difference is how much you want automated.
            </p>
          </AnimateOnView>
        </StaggerContainer>

        {/* Comparison Table */}
        <AnimateOnView delay={0.2} blur>
          <div className="max-w-2xl mx-auto overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-muted-foreground font-medium">
                    Feature
                  </th>
                  <th className="text-center p-4 font-semibold w-[160px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-white">Qlerkly</span>
                      <span className="text-xs text-muted-foreground font-normal">Structured · Manual</span>
                    </div>
                  </th>
                  <th className="text-center p-4 font-semibold w-[160px] bg-primary/5 border-l border-border">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-primary">Lexora</span>
                      <span className="text-xs text-muted-foreground font-normal">Automated · AI-powered</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([feature, qlerkly, lexora], i) => (
                  <tr
                    key={i}
                    className="border-b border-border last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="p-4 text-white/80 font-medium">{feature}</td>
                    <td className="p-4 text-center">
                      {qlerkly ? (
                        <CheckCircle2 className="w-5 h-5 text-white/50 mx-auto" />
                      ) : (
                        <span className="block w-5 h-px bg-white/15 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center bg-primary/5 border-l border-border">
                      {lexora ? (
                        <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <span className="block w-5 h-px bg-white/15 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnView>

        {/* Bottom callouts */}
        <AnimateOnView delay={0.3} blur>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border border-border rounded-2xl p-6 bg-card space-y-1">
              <p className="text-white font-semibold">Choose Qlerkly if…</p>
              <p className="text-muted-foreground text-sm">
                You want clarity and control — without automation.
              </p>
            </div>
            <div className="border border-primary/20 rounded-2xl p-6 bg-primary/5 space-y-1">
              <p className="text-primary font-semibold">Choose Lexora if…</p>
              <p className="text-muted-foreground text-sm">
                You want AI to handle the routine and move faster.
              </p>
            </div>
          </div>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default ComparisonTable;
