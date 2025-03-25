"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Badge } from "@/src/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

import { useState } from "react";

export function ProcessTable() {
  const PROCESSES = [
    {
      proceso: "ensamblaje",
      tiempo: 30,
      fechaInicio: "2023-10-01",
      fechaFin: "2023-10-02",
      estado: "pendiente",
    },
    {
      proceso: "pintura",
      tiempo: 45,
      fechaInicio: "2023-10-03",
      fechaFin: "2023-10-04",
      estado: "en-progreso",
    },
    {
      proceso: "inspección",
      tiempo: 20,
      fechaInicio: "2023-10-05",
      fechaFin: "2023-10-06",
      estado: "completado",
    },
    {
      proceso: "empaque",
      tiempo: 25,
      fechaInicio: "2023-10-07",
      fechaFin: "2023-10-08",
      estado: "retrasado",
    },
  ];

  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }

  const [processes, setProcesses] = useState(PROCESSES);

  const handleStatusChange = (index, value) => {
    const updatedProcesses = [...processes];
    updatedProcesses[index].estado = value;
    setProcesses(updatedProcesses);
  };

  const STATUS_MAPPING = {
    pendiente: { label: "Pendiente", color: "bg-yellow-500" },
    "en-progreso": { label: "En Progreso", color: "bg-blue-500" },
    completado: { label: "Completado", color: "bg-green-500" },
    retrasado: { label: "Retrasado", color: "bg-red-500" },
  };

  return (
    <div className="border">
      <Table className="xl:w-full lg:w-full md:w-[900px] smd:w-[900px] sm:w-[900px]">
        <TableHeader>
          <TableRow>
            <TableHead>Proceso</TableHead>
            <TableHead>Tiempo (min)</TableHead>
            <TableHead>Fecha Inicio</TableHead>
            <TableHead>Fecha Fin</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {processes.length > 0 ? (
            processes.map((process, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium capitalize">
                  {process.proceso}
                </TableCell>
                <TableCell>{process.tiempo}</TableCell>
                <TableCell>{formatDate(process.fechaInicio)}</TableCell>
                <TableCell>{formatDate(process.fechaFin)}</TableCell>
                <TableCell>
                  <Badge className={`${STATUS_MAPPING[process.estado].color} px-2 w-auto text-center py-0.5 text-white`}>
                    {STATUS_MAPPING[process.estado].label}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Select
                    value={process.estado}
                    onValueChange={(value) => handleStatusChange(index, value)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Cambiar estado" />
                    </SelectTrigger>
                    <SelectContent className="w-[180px] bg-white flex flex-row items-center justify-center">
                      <SelectItem className="hover:cursor-pointer" value="pendiente">Pendiente</SelectItem>
                      <SelectItem className="hover:cursor-pointer" value="en-progreso">En Progreso</SelectItem>
                      <SelectItem className="hover:cursor-pointer" value="completado">Completado</SelectItem>
                      <SelectItem className="hover:cursor-pointer" value="retrasado">Retrasado</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                No hay procesos disponibles.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
