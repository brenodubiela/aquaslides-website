import { companyData } from "@/data/legal-texts";

export const metadata = {
  title: "Política de Privacidade | Aqua Slides",
  description: "Entenda como a Aqua Slides coleta, usa e protege seus dados pessoais de acordo com a LGPD.",
  alternates: {
    canonical: "/politica-de-privacidade"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <h1 className="text-h1-mobile md:text-h1 font-display text-primary mb-6">Política de Privacidade</h1>
      
      <p className="mb-6 text-p-mobile md:text-p">
        A <strong>{companyData.razaoSocial}</strong> (doravante "{companyData.nomeFantasia}"), inscrita no CNPJ {companyData.cnpj}, valoriza a sua privacidade e garante a segurança dos seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).
      </p>

      <h2 className="text-h3 font-display text-primary mt-12 mb-4">1. Dados que Coletamos</h2>
      <p className="mb-4 text-p-mobile md:text-p">
        Coletamos as informações que você nos fornece diretamente através do nosso site, tais como:
      </p>
      <ul className="list-disc pl-6 mb-6 text-p-mobile md:text-p flex flex-col gap-2">
        <li><strong>Formulários de Contato:</strong> Nome, e-mail, telefone e informações adicionais enviadas na mensagem, necessárias para responder às suas solicitações.</li>
        <li><strong>Dados de Navegação e Cookies:</strong> Informações sobre como você usa o nosso site (endereço IP, tipo de navegador, páginas visitadas), coletadas automaticamente para melhorar sua experiência.</li>
      </ul>

      <h2 className="text-h3 font-display text-primary mt-12 mb-4">2. Uso das Informações</h2>
      <p className="mb-4 text-p-mobile md:text-p">
        Os dados coletados são utilizados exclusivamente para:
      </p>
      <ul className="list-disc pl-6 mb-6 text-p-mobile md:text-p flex flex-col gap-2">
        <li>Responder aos seus contatos e enviar orçamentos solicitados;</li>
        <li>Melhorar continuamente os serviços e a navegabilidade do site da {companyData.nomeFantasia};</li>
        <li>Cumprir obrigações legais e regulatórias.</li>
      </ul>

      <h2 className="text-h3 font-display text-primary mt-12 mb-4">3. Cookies e Tecnologias de Rastreamento</h2>
      <p className="mb-6 text-p-mobile md:text-p">
        O nosso site utiliza cookies para garantir o funcionamento adequado da plataforma e otimizar o seu uso. Ao acessar o site pela primeira vez, você será solicitado a consentir com o uso desses cookies através do nosso Banner de Consentimento.
      </p>

      <h2 className="text-h3 font-display text-primary mt-12 mb-4">4. Compartilhamento de Dados</h2>
      <p className="mb-6 text-p-mobile md:text-p">
        A {companyData.nomeFantasia} não vende, aluga ou comercializa os seus dados pessoais. Podemos compartilhar informações apenas com prestadores de serviços estritamente necessários para a operação do nosso site ou quando exigido por lei.
      </p>

      <h2 className="text-h3 font-display text-primary mt-12 mb-4">5. Seus Direitos (LGPD)</h2>
      <p className="mb-4 text-p-mobile md:text-p">
        De acordo com a LGPD, você tem o direito de solicitar:
      </p>
      <ul className="list-disc pl-6 mb-6 text-p-mobile md:text-p flex flex-col gap-2">
        <li>Acesso, correção ou atualização dos seus dados;</li>
        <li>A exclusão dos seus dados pessoais dos nossos sistemas;</li>
        <li>A revogação do seu consentimento a qualquer momento.</li>
      </ul>

      <h2 className="text-h3 font-display text-primary mt-12 mb-4">6. Contato</h2>
      <p className="mb-6 text-p-mobile md:text-p">
        Para exercer os seus direitos ou tirar dúvidas sobre esta política, entre em contato através do e-mail <a href={`mailto:${companyData.emailContato}`} className="text-secondary hover:underline">{companyData.emailContato}</a> ou pelo telefone {companyData.telefone}. Nosso endereço físico é {companyData.endereco}.
      </p>

      <p className="mt-12 text-sm text-ink/60">
        Última atualização: {companyData.ultimaAtualizacao}
      </p>
    </>
  );
}
