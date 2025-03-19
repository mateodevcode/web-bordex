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
      rfc: "AAET8107099EZ",
      fechaIngreso: "17/03/2022",
      estatus: "PRE-NÓMINA",
      salario: 2500.05,
      isr: 0.0,
      imss: 62.06,
      percepciones: 2656.44,
      deducciones: 62.06,
      netoDepositar: 2594.38,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmpleados, setFilteredEmpleados] = useState(empleadosData);
  const [activeTab, setActiveTab] = useState("nomina");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newEmpleado, setNewEmpleado] = useState({
    id: "",
    nombre: "",
    rfc: "",
    fechaIngreso: "",
    estatus: "PRE-NÓMINA",
    salario: "",
    isr: 0.0,
    imss: 0.0,
    percepciones: 0.0,
    deducciones: 0.0,
    netoDepositar: 0.0,
  });

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredEmpleados(
      empleadosData.filter((empleado) =>
        empleado.nombre.toLowerCase().includes(value)
      )
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmpleado({ ...newEmpleado, [name]: value });
  };

  const handleAddEmpleado = () => {
    const salario = parseFloat(newEmpleado.salario) || 0;
    const imss = salario * 0.025; // Ejemplo de cálculo
    const percepciones = salario + imss;
    const deducciones = imss;
    const netoDepositar = percepciones - deducciones;

    const empleadoConCalculos = {
      ...newEmpleado,
      id: empleadosData.length + 1,
      salario,
      isr: 0.0,
      imss,
      percepciones,
      deducciones,
      netoDepositar,
    };

    setFilteredEmpleados([...filteredEmpleados, empleadoConCalculos]);
    setIsFormOpen(false);
    setNewEmpleado({
      id: "",
      nombre: "",
      rfc: "",
      fechaIngreso: "",
      estatus: "PRE-NÓMINA",
      salario: "",
      isr: 0.0,
      imss: 0.0,
      percepciones: 0.0,
      deducciones: 0.0,
      netoDepositar: 0.0,
    });
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
              Pre-Nómina
            </TabsTrigger>
            <TabsTrigger
              value="stats"
              className={`${
                activeTab === "stats"
                  ? "bg-white shadow-lg text-black"
                  : "text-gray-400"
              }`}
            >
              Nomina
            </TabsTrigger>
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
            <Button
              className="text-white flex items-center gap-2"
              onClick={() => setIsFormOpen(true)}
            >
              <Plus className="mr-2 h-4 w-4 text-white " />
              Nuevo Empleado
            </Button>
          </div>

          {isFormOpen && (
            <div className="p-4 bg-white rounded-md shadow-md">
              <h2 className="text-lg font-bold mb-4">Agregar Nuevo Empleado</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  name="nombre"
                  placeholder="Nombre"
                  value={newEmpleado.nombre}
                  onChange={handleInputChange}
                />
                <Input
                  name="rfc"
                  placeholder="RFC"
                  value={newEmpleado.rfc}
                  onChange={handleInputChange}
                />
                <Input
                  name="fechaIngreso"
                  type="date"
                  placeholder="Fecha de Ingreso"
                  value={newEmpleado.fechaIngreso}
                  onChange={handleInputChange}
                />
                <Input
                  name="salario"
                  type="number"
                  placeholder="Salario"
                  value={newEmpleado.salario}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end mt-4">
                <Button
                  variant="outline"
                  className="mr-2"
                  onClick={() => setIsFormOpen(false)}
                >
                  Cancelar
                </Button>
                <Button onClick={handleAddEmpleado}>Guardar</Button>
              </div>
            </div>
          )}

          <div className="rounded-md border overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow className="text-start">
                  <TableHead className="w-[50px] text-zinc-400">ID</TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Nombre
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    RFC
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Fecha Ingreso
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Estatus
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Salario
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    ISR
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    IMSS
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
                      <TableCell>{empleado.rfc}</TableCell>
                      <TableCell>{empleado.fechaIngreso}</TableCell>
                      <TableCell>{empleado.estatus}</TableCell>
                      <TableCell>{empleado.salario.toFixed(2)}</TableCell>
                      <TableCell>{empleado.isr.toFixed(2)}</TableCell>
                      <TableCell>{empleado.imss.toFixed(2)}</TableCell>
                      <TableCell>{empleado.percepciones.toFixed(2)}</TableCell>
                      <TableCell>{empleado.deducciones.toFixed(2)}</TableCell>
                      <TableCell>{empleado.netoDepositar.toFixed(2)}</TableCell>
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
                            <DropdownMenuItem>
                              <UserCog className="mr-2 h-4 w-4" />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem>
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
                            <DropdownMenuItem className="text-destructive focus:text-destructive">
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
