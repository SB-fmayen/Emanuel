"use client";

import { useState } from "react";
import { generateVirtualTourScript } from "@/ai/flows/generate-virtual-tour";
import { schoolInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Wand2, Loader2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function VirtualTourClient() {
  const [script, setScript] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  async function handleGenerateScript() {
    setIsLoading(true);
    setScript("");
    try {
      const result = await generateVirtualTourScript({
        schoolName: schoolInfo.name,
        schoolInfo: schoolInfo.fullInfoForAI,
        websiteContent: "El sitio web se está construyendo actualmente. Esta es la primera versión.",
      });
      setScript(result.script);
    } catch (error) {
      console.error("Error generating virtual tour script:", error);
      toast({
        title: "Error",
        description: "No se pudo generar el guion. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Genera tu Guion</CardTitle>
        <CardDescription>
          Haz clic en el botón para que la IA genere un guion para un video de tour virtual basado en la información de nuestro instituto.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <Button
            onClick={handleGenerateScript}
            disabled={isLoading}
            size="lg"
            variant="accent"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-5 w-5" />
            )}
            {isLoading ? "Generando..." : "Generar Guion de Tour Virtual"}
          </Button>
        </div>

        {(isLoading || script) && (
          <div className="mt-6 border-t pt-6">
            <h3 className="font-headline text-xl mb-4">Guion Generado:</h3>
            {isLoading ? (
              <div className="space-y-4">
                 <div className="h-4 bg-muted rounded w-1/4 animate-pulse"></div>
                 <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                 <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                 <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                 <div className="h-4 bg-muted rounded w-1/2 animate-pulse"></div>
              </div>
            ) : (
              <ScrollArea className="h-96 w-full rounded-md border p-4 bg-secondary">
                <pre className="whitespace-pre-wrap text-sm font-sans">
                  {script}
                </pre>
              </ScrollArea>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
