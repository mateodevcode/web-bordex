"use client";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
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
  CheckCircle2,
  Filter,
  Lock,
  MoreHorizontal,
  Plus,
  Search,
  Trash2,
  Unlock,
  UserCog,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function MicroUsuarios() {
  const usersData = [
    {
      id: 1,
      nombre: "Juan Perez",
      cedula: "12345678",
      email: "juan.perez@example.com",
      cargo: "Supervisor",
      rol: "Administrativo",
      area: "Almacen",
      estado: "Activo",
      creado: "05 feb 2025",
    },
    {
      id: 2,
      nombre: "Maria Gomez",
      cedula: "87654321",
      email: "maria.gomez@example.com",
      cargo: "Corte",
      rol: "Operario",
      area: "Area-A",
      estado: "Inactivo",
      creado: "12 feb 2025",
    },
    {
      id: 3,
      nombre: "Carlos Lopez",
      cedula: "11223344",
      email: "carlos.lopez@example.com",
      cargo: "Pintura",
      rol: "Operario",
      area: "Area-B",
      estado: "Activo",
      creado: "14 feb 2025",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(usersData);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredUsers(
      usersData.filter((user) => user.nombre.toLowerCase().includes(value))
    );
  };

  // const formatDate = (date) => new Date(date).toLocaleDateString();
  const uniqueAreas = [...new Set(usersData.map((user) => user.area))];
  const uniqueCargos = [...new Set(usersData.map((user) => user.cargo))];

  const [activeTab, setActiveTab] = useState("users");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto mb-8 xl:h-[400px] lg:h-[400px] md:h-auto sm:h-auto smd:h-auto bg-zinc-100 rounded-lg px-8 py-2 overflow-auto"
    >
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full h-full"
      >
        <div className="flex xl:flex-row lg:flex-row md:flex-row smd:flex-col sm:flex-col items-start justify-between mb-6 p-4">
          <div>
            <h1 className="xl:text-3xl lg:text-2xl md:text-xl smd:text-xl sm:text-lg font-bold tracking-tight mb-2">
              Panel de Usuarios
            </h1>
            <p className="text-muted-foreground xl:mt-0 lg:mt-0 md:mt-0 smd:mt-2 sm:mt-2 xl:text-base lg:text-base md:text-sm smd:text-xs sm:text-xs">
              Gestiona los usuarios del sistema de inventarios
            </p>
          </div>
          <TabsList className="xl:mt-0 lg:mt-0 md:mt-0 smd:mt-2 sm:mt-2 space-x-2">
            <TabsTrigger
              value="users"
              className={`${
                activeTab === "users"
                  ? "bg-white shadow-lg text-black"
                  : "text-gray-400"
              }`}
            >
              Usuarios
            </TabsTrigger>
            <TabsTrigger
              value="stats"
              className={`${
                activeTab === "stats"
                  ? "bg-white shadow-lg text-black"
                  : "text-gray-400"
              }`}
            >
              Estadísticas
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="users" className="space-y-4 h-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar usuarios..."
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
              Nuevo Usuario
            </Button>
          </div>

          <div className="rounded-md border overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow className="text-start">
                  <TableHead className="w-[50px] text-zinc-400">ID</TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Nombre
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Cédula
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Email
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Cargo
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Rol
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Área
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Estado
                  </TableHead>
                  <TableHead className="text-start text-zinc-400">
                    Creado
                  </TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={10} className="h-24 text-center">
                      No se encontraron usuarios
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user) => (
                    <TableRow className="text-start" key={user.id}>
                      <TableCell className="font-medium">{user.id}</TableCell>
                      <TableCell>{user.nombre}</TableCell>
                      <TableCell>{user.cedula}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        {" "}
                        <p className="left-0 border rounded-full text-center font-semibold w-min px-2">
                          {user.cargo}
                        </p>
                      </TableCell>
                      <TableCell>
                        {user.rol === "Administrativo" ? (
                          <p className="bg-black w-min text-white rounded-full px-2">
                            {user.rol}
                          </p>
                        ) : (
                          <p>{user.rol}</p>
                        )}
                      </TableCell>
                      <TableCell className="capitalize">{user.area}</TableCell>
                      <TableCell>
                        {user.estado === "Inactivo" ? (
                          <div className="flex items-center">
                            <XCircle className="mr-2 h-4 w-4 text-destructive" />
                            <span className="text-destructive">Inactivo</span>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                            <span className="text-primary">Activo</span>
                          </div>
                        )}
                      </TableCell>
                      <TableCell>{user.creado}</TableCell>
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
                              <UserCog className="mr-2 h-4 w-4" />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:cursor-pointer">
                              {user.estado === "Inactivo" ? (
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
                            <DropdownMenuItem className="text-destructive focus:text-destructive hover:cursor-pointer">
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

        <TabsContent value="stats" className="space-y-4 h-full">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Usuarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{usersData.length}</div>
                <p className="text-xs text-muted-foreground">
                  Usuarios registrados en el sistema
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Usuarios Activos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {usersData.filter((user) => user.estado === "Activo").length}
                </div>
                <p className="text-xs text-muted-foreground">
                  Usuarios con acceso al sistema
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Distribución por Áreas</CardTitle>
                <CardDescription>
                  Cantidad de usuarios por área de trabajo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {uniqueAreas.map((area) => {
                    const count = usersData.filter(
                      (user) => user.area === area
                    ).length;
                    const percentage = Math.round(
                      (count / usersData.length) * 100
                    );

                    return (
                      <div key={area} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="capitalize">{area}</div>
                          <div className="text-sm text-muted-foreground">
                            {count} usuarios
                          </div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribución por Cargo</CardTitle>
                <CardDescription>
                  Cantidad de usuarios por cargo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {uniqueCargos.map((cargo) => {
                    const count = usersData.filter(
                      (user) => user.cargo === cargo
                    ).length;
                    const percentage = Math.round(
                      (count / usersData.length) * 100
                    );

                    return (
                      <div key={cargo} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="capitalize">{cargo}</div>
                          <div className="text-sm text-muted-foreground">
                            {count} usuarios
                          </div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
