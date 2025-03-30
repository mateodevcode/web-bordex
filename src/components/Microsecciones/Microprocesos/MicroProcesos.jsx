"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { ProcessTimeline } from "./Process-timeline";
import { ProcessTable } from "./Process-table";
import * as motion from "motion/react-client";

const MicroProcesos = () => {
  const [view, setView] = useState("timeline");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col lg:flex-row justify-center gap-8 max-w-7xl mx-auto mb-8 xl:h-[400px] lg:h-[400px] md:h-auto sm:h-auto smd:h-auto rounded-lg px-8 py-2 overflow-auto border border-zinc-200"
    >
      <div className="max-h-screen bg-background">
        <header className="border-b">
          <div className="container flex h-16 items-center justify-between px-4">
            <h1 className="xl:text-3xl lg:text-3xl md:text-3xl smd:text-xl sm:text-xl font-bold">
              Panel de Procesos
            </h1>
          </div>
        </header>
        <main className="p-8">
          <div className="mb-6 flex xl:flex-row lg:flex-row md:flex-row smd:flex-col sm:flex-col items-start justify-between">
            <h2 className="xl:text-2xl lg:text-2xl md:text-2xl smd:text-lg sm:text-lg font-bold">
              Seguimiento de Procesos
            </h2>
            <div className="flex items-center gap-2 xl:mt-0 lg:mt-0 md:mt-0 smd:mt-4 sm:mt-4">
              <Button
                variant={view === "timeline" ? "default" : "outline"}
                size="sm"
                onClick={() => setView("timeline")}
                className={`px-4 py-2 ${
                  view === "timeline" ? "text-white" : ""
                }`}
              >
                Línea de Tiempo
              </Button>
              <Button
                variant={view === "table" ? "default" : "outline"}
                size="sm"
                onClick={() => setView("table")}
                className={`px-4 py-2 ${view === "table" ? "text-white" : ""}`}
              >
                Tabla
              </Button>
            </div>
          </div>

          {/* Renderiza el componente ProcessTimeline si view es "timeline" */}
          {view === "timeline" ? <ProcessTimeline /> : <ProcessTable />}
        </main>
      </div>
    </motion.div>
  );
};

export default MicroProcesos;
