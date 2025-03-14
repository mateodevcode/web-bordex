"use client";

import React, { createContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner"

export const InventarioContext = createContext();

export const InventarioProvider = ({ children }) => {
  const { data: session } = useSession();
  const [isActivado, setIsActivado] = useState(false)
  const [darkMode, setDarkMode] = useState(false);
  const [modificarProducto, setModificarProducto] = useState(false);
  const [aceptarProducto, setAceptarProducto] = useState(true);
  const [productos, setProductos] = useState([]);
  const [Usuarios, setUsuarios] = useState([]);
  const [usuario, setUsuario] = useState({});
  const [searchTerm, setSearchTerm] = useState("");


  // Cargar los productos
  useEffect(() => {
    const cargarProductos = async () => {
      const res = await fetch("/api/producto", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setProductos(data);
    };
    cargarProductos();
  }, []);


  // Eliminar un producto
  const EliminarProducto = async (id) => {
    const response = await fetch(`/api/producto/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
    if (!response.ok) {
      toast("Ha ocurrido un error", {
        description: "No se ha podido eliminar el producto",
      })
    } else {
      toast("Producto eliminado con éxito", {
        description: "El producto ha sido eliminado correctamente",
      })
    }

  };

  // Cargar los usuarios y el usuario actual
  useEffect(() => {
    const cargarUsuario = async () => {
      const res = await fetch("/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      });
      const data = await res.json();
      setUsuarios(data);
      const usuario = data.find((user) => user.email === session?.user.email);
      setUsuario(usuario);
    };
    cargarUsuario();
  }, [session?.user.email]);


  // Filtrar productos
  const filteredProducts = productos.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
      || product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.area.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <InventarioContext.Provider
      value={{
        productos,
        EliminarProducto,
        modificarProducto,
        setModificarProducto,
        aceptarProducto,
        setAceptarProducto,
        usuario,
        Usuarios,
        searchTerm,
        setSearchTerm,
        filteredProducts,
        isActivado,
        setIsActivado,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </InventarioContext.Provider>
  );
};
