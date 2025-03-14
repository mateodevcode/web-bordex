"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, AlertCircle } from "lucide-react";

const PROCESSES = [
  {
    proceso: "Corte",
    tiempo: 30,
    estado: "pendiente",
    fechaInicio: "2023-01-01",
    fechaFin: "2023-01-02",
  },
  {
    proceso: "Pintura",
    tiempo: 45,
    estado: "en-progreso",
    fechaInicio: "2023-02-01",
    fechaFin: "2023-02-02",
  },
  {   
    proceso: "Ensamblaje",
    tiempo: 60,
    estado: "completado",
    fechaInicio: "2023-03-01",
    fechaFin: "2023-03-02",
  },
  {
    proceso: "Prueba",
    tiempo: 20,
    estado: "retrasado",
    fechaInicio: "2023-04-01",
    fechaFin: "2023-04-02",

  },
  {
    proceso: "Empaque",
    tiempo: 15,
    estado: "pendiente",
    fechaInicio: "2023-05-01",
    fechaFin: "2023-05-02",
  },
  {
    proceso: "Almacen",
    tiempo: 10,
    estado: "pendiente",
    fechaInicio: "2023-06-01",
    fechaFin: "2023-06-02",

  }



  // Agrega más procesos según sea necesario
];

const PROCESS_COLORS = {
  Corte: "bg-blue-500",
  Pintura: "bg-green-500",
  Ensamblaje: "bg-yellow-500",
  Prueba: "bg-red-500",
  Empaque: "bg-purple-500",
  Almacen: "bg-indigo-500",
  // Agrega más colores según sea necesario
};

const STATUS_MAPPING = {
  pendiente: { label: "Pendiente", color: "bg-yellow-500" },
  "en-progreso": { label: "En Progreso", color: "bg-blue-500" },
  completado: { label: "Completado", color: "bg-green-500" },
  retrasado: { label: "Retrasado", color: "bg-red-500" },
};

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export function ProcessTimeline() {
  const [processes, setProcesses] = useState(PROCESSES);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {processes.map((process, index) => (
          <ProcessCard
            key={index}
            process={process}
            canEdit={true} // Ajusta esta lógica según sea necesario
          />
        ))}
      </div>

      {processes.length === 0 && (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">No hay procesos disponibles</h3>
          <p className="text-sm text-muted-foreground mt-2">
            No tienes acceso a ningún proceso con tu cargo actual.
          </p>
        </div>
      )}
    </div>
  );
}

function ProcessCard({ process, canEdit }) {
  const [status, setStatus] = useState(process.estado);

  const handleStatusChange = (newStatus) => {
    if (canEdit) {
      setStatus(newStatus);
      // Aquí se podría implementar la lógica para guardar el cambio en la base de datos
    }
  };

  return (
    <Card>
      <CardHeader className={`${PROCESS_COLORS[process.proceso]} text-white`}>
        <CardTitle className="capitalize">{process.proceso}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{process.tiempo} minutos</span>
            </div>
            <Badge className={`${STATUS_MAPPING[status].color} px-2 py-0.5 semibold text-white`}>
              {STATUS_MAPPING[status].label}
            </Badge>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                Inicio: {formatDate(process.fechaInicio)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                Fin: {formatDate(process.fechaFin)}
              </span>
            </div>
          </div>

          {canEdit && (
            <div className="space-y-2 pt-2">
              <p className="text-sm font-medium">Cambiar estado:</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant={status === "pendiente" ? "default" : "outline"}
                  onClick={() => handleStatusChange("pendiente")}
                  className={`p-2 ${status === "pendiente" ? "text-white semibold" : ""}`}
                >
                  Pendiente
                </Button>
                <Button
                  size="sm"
                  variant={status === "en-progreso" ? "default" : "outline"}
                  onClick={() => handleStatusChange("en-progreso")}
                  className={`py-2 px-3 ${status === "en-progreso" ? "text-white semibold" : ""}`}
                >
                  En Progreso
                </Button>
                <Button
                  size="sm"
                  variant={status === "completado" ? "default" : "outline"}
                  onClick={() => handleStatusChange("completado")}
                  className={`p-2 ${status === "completado" ? "text-white semibold" : ""}`}
                >
                  Completado
                </Button>
                <Button
                  size="sm"
                  variant={status === "retrasado" ? "default" : "outline"}
                  onClick={() => handleStatusChange("retrasado")}
                  className={`p-2 ${status === "retrasado" ? "text-white semibold" : ""}`}
                >
                  Retrasado
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
