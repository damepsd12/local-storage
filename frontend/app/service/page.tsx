 "use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProtectRout = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Vérifiez l'authentification après le rendu côté client
    const auth = localStorage.getItem("loggedin");
    if (auth) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push("/login"); // Redirection si non authentifié
    }
  }, [router]);

  // Affichage pendant la vérification
  if (isAuthenticated === null) {
    return <p>Chargement...</p>;
  }

  // Afficher les enfants si l'utilisateur est authentifié
  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectRout;