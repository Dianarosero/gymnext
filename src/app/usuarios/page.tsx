"use client";
import { useState } from "react";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { mockUsuarios } from "@/mocks";
import { Usuario } from "@/types";

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>(mockUsuarios);
  const [selectedUser, setSelectedUser] = useState<Usuario | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userAvatarPath =
    "/images/users/9afc3775cbcaeff76145c718b12a727f124ef7e9";

  const openUserProfile = (user: Usuario) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const toggleUserStatus = () => {
    if (selectedUser) {
      const newStatus =
        selectedUser.status === "Active" ? "Inactive" : "Active";

      const updatedUsuarios = usuarios.map((user) =>
        user.id === selectedUser.id
          ? { ...user, status: newStatus as "Active" | "Inactive" }
          : user,
      );

      setUsuarios(updatedUsuarios);
      setSelectedUser({ ...selectedUser, status: newStatus });
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Usuarios</h1>
        </div>
        <Button>+ Nuevo Usuario</Button>
      </div>

      {/* Tabla de usuarios */}
      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-100 text-gray-600 font-medium">
              <tr>
                <th className="px-6 py-4 text-left">Nombre</th>

                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4">Registro</th>
                <th className="px-6 py-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {usuarios.map((usuario) => (
                <tr
                  key={usuario.id}
                  className="hover:bg-gray-50/50 transition-colors duration-150"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {usuario.name}
                  </td>
                  <td className="px-6 py-4">
                    <Badge
                      variant={
                        usuario.status === "Active" ? "success" : "default"
                      }
                    >
                      {usuario.status === "Active" ? "Activo" : "Inactivo"}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-xs">
                    {usuario.registered}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Button
                      variant="ghost"
                      className="text-xs px-3 py-1"
                      onClick={() => openUserProfile(usuario)}
                    >
                      Ver Perfil
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Modal de perfil de usuario */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Perfil de Usuario"
      >
        {selectedUser && (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                  <img
                    src={userAvatarPath}
                    alt={`Avatar de ${selectedUser.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Toggle de estado*/}
                <div className="flex items-center space-x-4">
                  <span
                    className={`text-sm font-medium ${selectedUser.status === "Active" ? "text-green-600" : "text-gray-500"}`}
                  >
                    {selectedUser.status === "Active" ? "Activo" : "Inactivo"}
                  </span>
                  <button
                    onClick={toggleUserStatus}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      selectedUser.status === "Active"
                        ? "bg-purple-600"
                        : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        selectedUser.status === "Active"
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            <Card>
              <div className="text-left mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {selectedUser.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">
                    Filial/centro habitual
                  </span>
                </div>
                <div className="text-gray-900 text-right">
                  {selectedUser.branch || "-"}
                </div>

                <div>
                  <span className="font-medium text-gray-700">E-mail</span>
                </div>
                <div className="text-gray-900 text-right">
                  {selectedUser.email}
                </div>

                <div>
                  <span className="font-medium text-gray-700">Teléfono</span>
                </div>
                <div className="text-gray-900 text-right">
                  {selectedUser.phone}
                </div>

                <div>
                  <span className="font-medium text-gray-700">Registrado</span>
                </div>
                <div className="text-gray-900 text-right">
                  {selectedUser.registered}
                </div>

                <div>
                  <span className="font-medium text-gray-700">
                    Fecha de nacimiento
                  </span>
                </div>
                <div className="text-gray-900 text-right">
                  {selectedUser.birthDate || "-"}
                </div>

                <div>
                  <span className="font-medium text-gray-700">Sexo</span>
                </div>
                <div className="text-gray-900 text-right">
                  {selectedUser.gender || "-"}
                </div>

                <div>
                  <span className="font-medium text-gray-700">Objetivo</span>
                </div>
                <div className="text-gray-900 text-right">
                  {selectedUser.objective || "-"}
                </div>
              </div>
            </Card>

            {/* Sección de etiquetas */}
            <Card>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Etiquetas
              </h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cliente
                </label>
                <div className="relative">
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all sm:text-sm text-gray-900 appearance-none">
                    {selectedUser.tags?.map((tag, index) => (
                      <option key={index} value={tag}>
                        {tag}
                      </option>
                    ))}
                    {!selectedUser.tags?.length && (
                      <option value="">Sin etiquetas</option>
                    )}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </Modal>
    </div>
  );
}
