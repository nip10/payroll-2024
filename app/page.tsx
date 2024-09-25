import Calculator from "@/components/calculator";
import Footer from "@/components/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen w-full h-full bg-white relative">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <main className="p-8 sm:p-12 z-10 relative font-[family-name:var(--font-geist-sans)]">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Calculadora retenção na fonte 2024
        </h1>
        <div className="flex flex-col">
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            &quot;Foram publicadas novas tabelas de retenção na fonte sobre IRS,
            que entram em vigor a partir de novembro de 2024. Para compensar,
            com efeitos retroativos, os rendimentos retidos entre janeiro e
            agosto de 2024, foram também criadas, especialmente, outras tabelas
            que serão aplicadas apenas entre 1 de setembro de 31 de outubro de
            2024. Isto significa que os contribuintes (trabalhadores por conta
            de outrem e pensionistas) irão descontar menos, ou até não descontar
            nada, para efeitos de IRS, durante dois meses.&quot;
          </blockquote>
          <a
            href="https://eportugal.gov.pt/noticias/novas-tabelas-de-retencao-na-fonte-irs"
            className={cn(buttonVariants({ variant: "link" }), "self-end")}
            rel="noreferrer"
          >
            Referência: ePortugal
          </a>
        </div>
        <Calculator />
        <Footer />
      </main>
    </div>
  );
}
