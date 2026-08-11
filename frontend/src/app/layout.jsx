import { Montserrat, Quicksand } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const riope = localFont({
  src: [
    {
      path: "../../public/fonts/Riope.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  weight: "400",
  display: "swap",
  variable: "--font-riope",
  adjustFontFallback: false,
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

const quicksand = Quicksand({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata = {
  metadataBase: new URL("https://aquaslides.com.br/"),
  title: {
    default: "Aqua Slides | Atrações Aquáticas",
    template: "%s | Aqua Slides",
  },
  description:
    "Projeto, fabricação e instalação de atrações aquáticas para parques, resorts e hotéis. Do projeto à operação, com engenharia própria e suporte vitalício.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aqua Slides | Atrações Aquáticas",
    description:
      "Projeto, fabricação e instalação de atrações aquáticas para parques, resorts e hotéis. Do projeto à operação, com engenharia própria e suporte vitalício.",
    url: "/",
    siteName: "Aqua Slides",
    locale: "pt_BR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aqua Slides",
  url: "https://aquaslides.com.br",
  logo: "https://aquaslides.com.br/logomenu.svg",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-47-99151-6680",
    contactType: "customer service"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${riope.variable} ${montserrat.variable} ${quicksand.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans text-body bg-canvas antialiased selection:bg-primary selection:text-canvas">
        {children}
      </body>
    </html>
  );
}
