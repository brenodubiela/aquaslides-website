import { companyData } from "@/data/legal-texts";

export const metadata = {
  title: "Termos de Uso | Aqua Slides",
  description: "Termos e condições de uso do site da Aqua Slides.",
  alternates: {
    canonical: "/termos-de-uso"
  }
};

export default function TermsOfUsePage() {
  return (
    <>
      <h1 className="text-h1-mobile md:text-h1 font-display text-primary mb-6">Termos de Uso</h1>
      
      <p className="mb-6 text-p-mobile md:text-p">
        Bem-vindo ao site da <strong>{companyData.nomeFantasia}</strong>. Ao acessar e utilizar o site <a href={companyData.site} className="text-secondary hover:underline">{companyData.site}</a>, você concorda com os presentes Termos de Uso. Caso não concorde com alguma condição, recomendamos que não utilize a nossa plataforma.
      </p>

      <h2 className="text-h3 font-display text-primary mt-12 mb-4">1. Informações da Empresa</h2>
      <p className="mb-6 text-p-mobile md:text-p">
        Este site é operado pela {companyData.razaoSocial}, inscrita no CNPJ {companyData.cnpj}, com sede física no endereço {companyData.endereco}.
      </p>

      <h2 className="text-h3 font-display text-primary mt-12 mb-4">2. Propriedade Intelectual</h2>
      <p className="mb-6 text-p-mobile md:text-p">
        Todo o conteúdo disponibilizado neste site, incluindo textos, imagens, logotipos, gráficos, modelos 3D, catálogos e a estrutura de navegação, são de propriedade exclusiva da {companyData.nomeFantasia} ou de seus licenciadores, sendo protegidos por leis de direitos autorais e de propriedade intelectual. É expressamente proibida a cópia, reprodução ou modificação de qualquer conteúdo sem prévia autorização por escrito.
      </p>

      <h2 className="text-h3 font-display text-primary mt-12 mb-4">3. Uso do Site e Conduta do Usuário</h2>
      <p className="mb-4 text-p-mobile md:text-p">
        Ao utilizar nosso site, você se compromete a:
      </p>
      <ul className="list-disc pl-6 mb-6 text-p-mobile md:text-p flex flex-col gap-2">
        <li>Fornecer informações verdadeiras e exatas ao preencher formulários de contato;</li>
        <li>Não utilizar a plataforma para fins ilícitos, fraudulentos ou que violem os direitos de terceiros;</li>
        <li>Não interferir na segurança ou no funcionamento adequado da infraestrutura do site.</li>
      </ul>

      <h2 className="text-h3 font-display text-primary mt-12 mb-4">4. Isenção de Responsabilidade</h2>
      <p className="mb-6 text-p-mobile md:text-p">
        As informações dos produtos, atrações e complexos exibidas no site possuem caráter informativo e podem sofrer alterações sem aviso prévio. A {companyData.nomeFantasia} empenha-se em manter os dados precisos, mas não garante que o site estará livre de interrupções temporárias por razões técnicas.
      </p>

      <h2 className="text-h3 font-display text-primary mt-12 mb-4">5. Lei de Proteção de Dados (LGPD)</h2>
      <p className="mb-6 text-p-mobile md:text-p">
        Nós respeitamos a sua privacidade. A coleta e o processamento de dados pessoais são regidos pela nossa Política de Privacidade, desenvolvida em conformidade com a Lei 13.709/2018.
      </p>

      <h2 className="text-h3 font-display text-primary mt-12 mb-4">6. Foro</h2>
      <p className="mb-6 text-p-mobile md:text-p">
        Fica eleito o foro da comarca da sede da empresa para dirimir quaisquer dúvidas ou litígios oriundos destes Termos de Uso, com renúncia a qualquer outro por mais privilegiado que seja.
      </p>

      <p className="mt-12 text-sm text-ink/60">
        Última atualização: {companyData.ultimaAtualizacao}
      </p>
    </>
  );
}
