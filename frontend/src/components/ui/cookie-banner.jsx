"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("aquaslides_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("aquaslides_cookie_consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 w-full z-50 p-4"
        >
          <div className="max-w-7xl mx-auto bg-primary rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-center gap-6 border border-white/20">
            <div className="flex-1 text-on-primary">
              <h3 className="text-lg font-bold mb-2">Sua privacidade é importante</h3>
              <p className="text-sm text-on-primary/90">
                Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência em nosso site, personalizar conteúdos e analisar o nosso tráfego. 
                Ao continuar navegando, você concorda com a nossa{" "}
                <Link href="/politica-de-privacidade" className="underline hover:text-white transition-colors font-semibold">
                  Política de Privacidade
                </Link>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <Button 
                variant="outline" 
                className="!border-white/50 !text-white hover:!bg-white/10 hover:!border-white w-full sm:w-auto"
                onClick={() => window.location.href = '/politica-de-privacidade'}
              >
                Configurar
              </Button>
              <Button 
                variant="secondary" 
                onClick={handleAccept}
                className="w-full sm:w-auto !text-black"
              >
                Aceitar Todos
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
