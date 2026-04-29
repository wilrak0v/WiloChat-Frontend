"use client";

import { useState } from "react";
import sodium from "libsodium-wrappers";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Key, Check } from "lucide-react"; // Icônes sympas
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { ButtonGroup } from "./ui/button-group";

export default function CryptoGenerator() {
  const [privateKey, setPrivateKey] = useState("");
  const [copied, setCopied] = useState(false);

  const generateKey = async () => {
    // Initialiser libsodium
    await sodium.ready;

    // Générer une clé de 32 octets (standard pour la plupart des opérations libsodium)
    const key = sodium.randombytes_buf(32);

    // Convertir en base64 pour l'affichage
    const base64Key = sodium.to_base64(key);
    setPrivateKey(base64Key);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (!privateKey) return;

    navigator.clipboard.writeText(privateKey);
    setCopied(true);

    // Reset l'icône après 2 secondes
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="mb-5 mt-2">
      <CardHeader>
        <CardTitle>Generate a key</CardTitle>
        <CardDescription>
          Your private key is used to access your account. It is generated
          locally and never leaves your device. Make sure to save it securely,
          as it cannot be recovered if lost.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex-col gap-2">
        <ButtonGroup className="w-full">
          <Input value={privateKey} readOnly placeholder="Generate a key..." />
          {privateKey && (
            <Button onClick={copyToClipboard} variant="outline">
              {copied ? (
                <Check size={16} className="text-green-500" />
              ) : (
                <Copy size={16} />
              )}
            </Button>
          )}
        </ButtonGroup>
        <Button onClick={generateKey} className="w-full gap-2">
          <Key size={16} />
          Generate
        </Button>
      </CardFooter>
    </Card>
  );
}
