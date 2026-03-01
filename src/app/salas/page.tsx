"use client";
import { useState } from "react";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { mockSalas } from "@/mocks";

const mockItemsBySalaId: Record<
  string,
  Array<{
    item: string;
    category: string;
    status: "OK" | "Error";
    lastPm: string;
  }>
> = {
  "1": [
    {
      item: "Cinta 03",
      category: "Fitness Machines",
      status: "Error",
      lastPm: "12/09/2025",
    },
    {
      item: "Aire 02",
      category: "HVAC",
      status: "OK",
      lastPm: "12/09/2025",
    },
  ],
  "2": [
    {
      item: "Colchoneta 07",
      category: "Yoga",
      status: "OK",
      lastPm: "09/09/2025",
    },
  ],
  "3": [
    {
      item: "Bomba 01",
      category: "Piscina",
      status: "OK",
      lastPm: "05/09/2025",
    },
  ],
  "4": [
    {
      item: "Banco 04",
      category: "Pesas",
      status: "Error",
      lastPm: "11/09/2025",
    },
  ],
};

export default function SalasPage() {
  const [selectedSalaId, setSelectedSalaId] = useState<string | null>(null);
  const [collapsedSections, setCollapsedSections] = useState<{
    salaDetails: boolean;
    itemsList: boolean;
  }>({
    salaDetails: false,
    itemsList: false,
  });

  const toggleSection = (section: "salaDetails" | "itemsList") => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const selectedSala =
    mockSalas.find((sala) => sala.id === selectedSalaId) ?? null;
  const selectedSalaItems = selectedSala
    ? (mockItemsBySalaId[selectedSala.id] ?? [])
    : [];

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "OK":
        return "success";
      case "Maintenance":
        return "warning";
      case "Error":
        return "danger";
      default:
        return "default";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "OK":
        return "Operativa";
      case "Maintenance":
        return "Mantenimiento";
      case "Error":
        return "Fuera de Servicio";
      default:
        return status;
    }
  };

  const getItemStatusText = (status: "OK" | "Error") => {
    switch (status) {
      case "OK":
        return "OK";
      case "Error":
        return "Falla";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Salas</h1>
        </div>
        <Button>+ Registrar Nueva Sala</Button>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-100 text-gray-600 font-medium">
              <tr>
                <th className="px-6 py-4">QR</th>
                <th className="px-6 py-4">Nombre de la Sala</th>
                <th className="px-6 py-4">Ubicación</th>
                <th className="px-6 py-4 text-center">Estado Operativo</th>
                <th className="px-6 py-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockSalas.map((sala) => (
                <tr
                  key={sala.id}
                  className="hover:bg-gray-50/50 transition-colors duration-150 group"
                >
                  <td className="px-6 py-4 font-mono text-xs font-semibold text-purple-700 bg-purple-50 rounded-md mx-2 my-1 inline-block">
                    {sala.qr}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {sala.name}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{sala.floor}</td>
                  <td className="px-6 py-4 text-center">
                    <Badge variant={getStatusBadgeVariant(sala.status)}>
                      {getStatusText(sala.status)}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex gap-2 justify-center">
                      <Button
                        variant="ghost"
                        className="text-xs px-3 py-1"
                        onClick={() => setSelectedSalaId(sala.id)}
                      >
                        Ver Detalles
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Modal
        isOpen={Boolean(selectedSala)}
        onClose={() => setSelectedSalaId(null)}
        title="Detalle de la sala"
      >
        {selectedSala && (
          <div className="space-y-6">
            <Card className="p-4 space-y-3">
              <button
                type="button"
                onClick={() => toggleSection("salaDetails")}
                className="w-full flex items-center justify-between"
              >
                <h3 className="text-xl font-bold text-gray-700">
                  {selectedSala.name}
                </h3>
                <span
                  className={`transform transition-transform ${
                    collapsedSections.salaDetails ? "" : "rotate-180"
                  }`}
                >
                  ▼
                </span>
              </button>

              {!collapsedSections.salaDetails && (
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="font-semibold text-gray-700">Planta</span>
                    <span className="text-gray-500">{selectedSala.floor}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="font-semibold text-gray-700">QR</span>
                    <span className="text-gray-500">{selectedSala.qr}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Estado</span>
                    <Badge variant={getStatusBadgeVariant(selectedSala.status)}>
                      {selectedSala.status === "Maintenance"
                        ? "En revisión"
                        : getStatusText(selectedSala.status)}
                    </Badge>
                  </div>
                </div>
              )}
            </Card>

            <Card className="p-4">
              <div className="w-full flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-gray-700">
                  Listado de ítems en la sala
                </h4>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => e.stopPropagation()}
                    className="w-6 h-6 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 hover:border-purple-500 hover:text-purple-600 transition-colors text-base font-bold leading-none pb-px"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleSection("itemsList")}
                    className="flex items-center"
                  >
                    <span
                      className={`transform transition-transform ${
                        collapsedSections.itemsList ? "" : "rotate-180"
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                </div>
              </div>

              {!collapsedSections.itemsList && (
                <div className="overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
                  <table className="min-w-full text-xs">
                    <thead className="border-b border-gray-100 text-gray-700">
                      <tr>
                        <th className="text-left py-2">Ítem</th>
                        <th className="text-left py-2">Categoría</th>
                        <th className="text-left py-2">Estado</th>
                        <th className="text-left py-2">Último PM</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {selectedSalaItems.map((itemRow) => (
                        <tr key={`${selectedSala.id}-${itemRow.item}`}>
                          <td className="py-2 text-gray-600">{itemRow.item}</td>
                          <td className="py-2 text-gray-500">
                            {itemRow.category}
                          </td>
                          <td className="py-2">
                            <Badge
                              variant={getStatusBadgeVariant(itemRow.status)}
                            >
                              {getItemStatusText(itemRow.status)}
                            </Badge>
                          </td>
                          <td className="py-2 text-gray-500">
                            {itemRow.lastPm}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Button variant="outline" className="flex-1">
                  + Añadir ítem
                </Button>
                <Button className="flex-1">Crear incidencia</Button>
              </div>
            </Card>
          </div>
        )}
      </Modal>
    </div>
  );
}
