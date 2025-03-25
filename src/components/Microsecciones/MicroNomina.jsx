import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Input } from "@/src/components/ui/input";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/src/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import {
  Filter,
  Lock,
  MoreHorizontal,
  Plus,
  Search,
  Trash2,
  Unlock,
  UserCog,
} from "lucide-react";
import { useState } from "react";

export default function SistemaNomina() {
  const empleadosData = [
    {
      id: 1,
      nombre: "Hernando Vergara",
      cédula: "1.006.579.226",
      fechaIngreso: "18/03/2022",
      cargo: "Operario",
      salario: 1800000,
      HorasExtras: 0.0,
      imss: 110000,
      percepciones: 1800000,
      deducciones: 110000,
      netoDepositar: 1690000,
    },
    {
      id: 2,
      nombre: "Maria Gonzalez",
      cédula: "1.045.985.265",
      fechaIngreso: "21/03/2022",
      cargo: "Supervisor",
      salario: 1950000,
      HorasExtras: 50000,
      imss: 120000,
      percepciones: 2000000,
      deducciones: 120000,
      netoDepositar: 1880000,
    },
    {
      id: 3,
      nombre: "Isabella Lopez",
      cédula: "1.086.579.246",
      fechaIngreso: "19/03/2022",
      cargo: "Contador",
      salario: 3000000,
      HorasExtras: 0.0,
      imss: 180000,
      percepciones: 3000000,
      deducciones: 180000,
      netoDepositar: 2820000,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmpleados, setFilteredEmpleados] = useState(empleadosData);
  const [activeTab, setActiveTab] = useState("nomina");

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredEmpleados(
      empleadosData.filter((empleado) =>
        empleado.nombre.toLowerCase().includes(value)
      )
    );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto mb-8 xl:h-[400px] lg:h-[400px] md:h-auto sm:h-auto smd:h-auto bg-zinc-100 rounded-lg px-8 py-2 overflow-auto">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full h-full"
      >
        <div className="flex xl:flex-row lg:flex-row md:flex-row smd:flex-col sm:flex-col items-start justify-between mb-6 p-4">
          <div>
            <h1 className="xl:text-3xl lg:text-2xl md:text-xl smd:text-xl sm:text-lg font-bold tracking-tight mb-2">
              Sistema de Nómina
            </h1>
            <p className="text-muted-foreground xl:mt-0 lg:mt-0 md:mt-0 smd:mt-2 sm:mt-2 xl:text-base lg:text-base md:text-sm smd:text-xs sm:text-xs">
              Gestiona la nómina de los empleados
            </p>
          </div>
          <TabsList className="xl:mt-0 lg:mt-0 md:mt-0 smd:mt-2 sm:mt-2 space-x-2">
            <TabsTrigger
              value="nomina"
              className={`${
                activeTab === "nomina"
                  ? "bg-white shadow-lg text-black"
                  : "text-gray-400"
              }`}
            >
              Nómina
            </TabsTrigger>
            {/* <TabsTrigger
              value="stats"
              className={`${
                activeTab === "stats"
                  ? "bg-white shadow-lg text-black"
                  : "text-gray-400"
              }`}
            >
              Nomina
            </TabsTrigger> */}
          </TabsList>
        </div>

        <TabsContent value="nomina" className="space-y-4 h-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar empleados..."
                  className="w-full pl-8 bg-white"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filtrar</span>
              </Button>
            </div>
            <Button className="text-white flex items-center gap-2">
              <Plus className="mr-2 h-4 w-4 text-white " />
              Nuevo Empleado
            </Button>
          </div>

          <div className="rounded-md border overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow className="text-start">
                  <TableHead className="w-[30px] text-zinc-400">ID</TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Nombre
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Cédula
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Fecha Ingreso
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Cargo
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Salario COP
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Horas Extras
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Seguridad Social
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Percepciones
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Deducciones
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Neto a Depositar
                  </TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmpleados.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={12} className="h-24 text-center">
                      No se encontraron empleados
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredEmpleados.map((empleado) => (
                    <TableRow className="text-start" key={empleado.id}>
                      <TableCell className="font-medium">
                        {empleado.id}
                      </TableCell>
                      <TableCell>{empleado.nombre}</TableCell>
                      <TableCell>{empleado.cédula}</TableCell>
                      <TableCell>{empleado.fechaIngreso}</TableCell>
                      <TableCell>{empleado.cargo}</TableCell>
                      <TableCell>{empleado.salario}</TableCell>
                      <TableCell>{empleado.HorasExtras}</TableCell>
                      <TableCell>{empleado.imss}</TableCell>
                      <TableCell>{empleado.percepciones}</TableCell>
                      <TableCell>{empleado.deducciones}</TableCell>
                      <TableCell>{empleado.netoDepositar}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Abrir menú</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            className="hover:cursor-pointer bg-white"
                            align="end"
                          >
                            <DropdownMenuItem className="hover:cursor-pointer">
                              <UserCog className=" mr-2 h-4 w-4" />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:cursor-pointer">
                              {empleado.estado === "Inactivo" ? (
                                <>
                                  <Unlock className="mr-2 h-4 w-4" />
                                  Activar
                                </>
                              ) : (
                                <>
                                  <Lock className="mr-2 h-4 w-4" />
                                  Desactivar
                                </>
                              )}
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text- focus:text-destructive hover:cursor-pointer">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Eliminar
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
