import { buttonVariants } from "./ui/button";

export default function Footer() {
  return (
    <footer className="mt-8 flex flex-col lg:flex-row justify-between gap-2 items-center">
      <div className="flex flex-col md:flex-row gap-2 md:gap-8">
        <a
          href="https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/tabela_ret_doclib/Pages/default.aspx"
          className={buttonVariants({ variant: "link" })}
          rel="noreferrer"
        >
          Tabelas de Retenção (AT)
        </a>
        <a
          href="https://www.portugal.gov.pt/pt/gc24/comunicacao/noticia?i=perguntas-mais-frequentes-sobre-as-novas-tabelas-de-irs"
          className={buttonVariants({ variant: "link" })}
          rel="noreferrer"
        >
          Perguntas frequentes (GovPT)
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-8">
        <a
          href="https://github.com/nip10"
          className={buttonVariants({ variant: "link" })}
          rel="noreferrer"
        >
          Projecto open-source
        </a>
        <a
          href="https://diogocardoso.dev"
          className={buttonVariants({ variant: "link" })}
          rel="noreferrer"
        >
          Made with ❤️ by Diogo Cardoso
        </a>
      </div>
    </footer>
  );
}
