"use client";
import { useState } from "react";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import FileUpload from "@/components/FileUpload";
import { mockOrdenes } from "@/mocks";

export default function OrdenesPage() {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    basicInfo: true,
    history: true,
    materials: true,
    executionTime: true,
    media: true,
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const selectedOrder = mockOrdenes.find(
    (orden) => orden.id === selectedOrderId,
  );

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilesChange = (files: File[]) => {
    setUploadedFiles(files);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "warning";
      case "Done":
        return "success";
      default:
        return "default";
    }
  };

  const getPriorityVariant = (priority?: string) => {
    switch (priority) {
      case "Critical":
        return "danger";
      case "Medium":
        return "warning";
      case "Low":
        return "success";
      default:
        return "default";
    }
  };

  const getPriorityLabel = (priority?: string) => {
    switch (priority) {
      case "Critical":
        return "Crítica";
      case "Medium":
        return "Media";
      case "Low":
        return "Baja";
      default:
        return "Sin definir";
    }
  };

  const getHistoryResultVariant = (resultType?: string) => {
    switch (resultType) {
      case "success":
        return "success";
      case "warning":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Órdenes de Trabajo
          </h1>
        </div>
        <Button>+ Nueva Orden de Trabajo</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockOrdenes.map((orden) => (
          <Card
            key={orden.id}
            className="flex flex-col gap-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{orden.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{orden.room}</p>
                <p className="text-sm text-gray-500 mt-1">{orden.date}</p>
              </div>
            </div>
            <div className="mt-auto pt-4 flex justify-end gap-2 border-t border-gray-50">
              <Button
                variant="outline"
                className="text-sm"
                onClick={() => setSelectedOrderId(orden.id)}
              >
                Ver Detalles
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {selectedOrder && (
        <Modal
          isOpen={!!selectedOrder}
          onClose={() => setSelectedOrderId(null)}
          title={`ORDEN #${selectedOrder.id}`}
        >
          <div className="space-y-4">
            <Card>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Sala
                  </span>
                  <span className="text-sm text-gray-900">
                    {selectedOrder.room}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Prioridad
                  </span>
                  <Badge variant={getPriorityVariant(selectedOrder.priority)}>
                    {getPriorityLabel(selectedOrder.priority)}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">SLA</span>
                  <Badge variant={getStatusColor(selectedOrder.status)}>
                    {selectedOrder.status === "Pending"
                      ? "En progreso"
                      : "Completada"}
                  </Badge>
                </div>
              </div>
            </Card>

            <Card>
              <button
                onClick={() => toggleSection("basicInfo")}
                className="w-full flex justify-between items-center py-2 text-left"
              >
                <span className="font-medium text-gray-700 uppercase text-sm tracking-wider">
                  Información básica
                </span>
                <span
                  className={`transform transition-transform ${expandedSections.basicInfo ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
              {expandedSections.basicInfo && (
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600 font-medium">Título</span>
                    <span className="text-gray-900 text-right">
                      {selectedOrder.title}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600 font-medium">Ítem</span>
                    <span className="text-gray-900 text-right">
                      {selectedOrder.item || "Sin especificar"}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600 font-medium">Sala</span>
                    <span className="text-gray-900 text-right">
                      {selectedOrder.room}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600 font-medium">
                      Creada por
                    </span>
                    <span className="text-gray-900 text-right">
                      {selectedOrder.createdBy
                        ? `${selectedOrder.createdBy} (${selectedOrder.createdByRole || "-"})`
                        : "Sin asignar"}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600 font-medium">
                      Asignado a
                    </span>
                    <span className="text-gray-900 text-right">
                      {selectedOrder.assignedTo
                        ? `${selectedOrder.assignedTo} (${selectedOrder.assignedToRole || "-"})`
                        : "Sin asignar"}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600 font-medium">
                      Fecha de creación
                    </span>
                    <span className="text-gray-900 text-right">
                      {selectedOrder.creationDate || selectedOrder.date}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600 font-medium">
                      Fecha límite (SLA)
                    </span>
                    <span className="text-gray-900 text-right">
                      {selectedOrder.slaDeadline || "Sin definir"}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600 font-medium">
                      Última actualización
                    </span>
                    <span className="text-gray-900 text-right">
                      {selectedOrder.lastUpdate || selectedOrder.date}
                    </span>
                  </div>
                </div>
              )}
            </Card>

            <Card>
              <button
                onClick={() => toggleSection("history")}
                className="w-full flex justify-between items-center py-2 text-left"
              >
                <span className="font-medium text-gray-700 uppercase text-sm tracking-wider">
                  Historial de cambios
                </span>
                <span
                  className={`transform transition-transform ${expandedSections.history ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
              {expandedSections.history && (
                <div className="mt-3 space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left font-medium text-gray-600">
                            Paso
                          </th>
                          <th className="px-3 py-2 text-left font-medium text-gray-600">
                            Descripción
                          </th>
                          <th className="px-3 py-2 text-left font-medium text-gray-600">
                            Resultado
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {(selectedOrder.historySteps || []).map((step) => (
                          <tr key={step.id}>
                            <td className="px-3 py-2 text-gray-600">
                              {step.step}
                            </td>
                            <td className="px-3 py-2 text-gray-900">
                              {step.description}
                            </td>
                            <td className="px-3 py-2">
                              {step.resultType &&
                              step.resultType !== "default" ? (
                                <Badge
                                  variant={getHistoryResultVariant(
                                    step.resultType,
                                  )}
                                >
                                  {step.result}
                                </Badge>
                              ) : (
                                <span className="text-gray-600">
                                  {step.result}
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                        {(selectedOrder.historySteps || []).length === 0 && (
                          <tr>
                            <td className="px-3 py-2 text-gray-500" colSpan={3}>
                              No hay pasos registrados.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">
                      {selectedOrder.createdBy || "Sin autor"}
                    </span>
                    <Button variant="outline" className="text-sm py-1">
                      + Añadir
                    </Button>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Notas adicionales:
                    </p>
                    <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-600">
                      {selectedOrder.additionalNotes ||
                        "Sin notas adicionales."}
                    </div>
                  </div>
                </div>
              )}
            </Card>

            <Card>
              <button
                onClick={() => toggleSection("materials")}
                className="w-full flex justify-between items-center py-2 text-left"
              >
                <span className="font-medium text-gray-700 uppercase text-sm tracking-wider">
                  Materiales usados
                </span>
                <span
                  className={`transform transition-transform ${expandedSections.materials ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
              {expandedSections.materials && (
                <div className="mt-3">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left font-medium text-gray-600">
                            Código
                          </th>
                          <th className="px-3 py-2 text-left font-medium text-gray-600">
                            Descripción
                          </th>
                          <th className="px-3 py-2 text-left font-medium text-gray-600">
                            Cant.
                          </th>
                          <th className="px-3 py-2 text-left font-medium text-gray-600">
                            Unidad.
                          </th>
                          <th className="px-3 py-2 text-left font-medium text-gray-600">
                            Costo
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {(selectedOrder.materials || []).map((material) => (
                          <tr key={material.id}>
                            <td className="px-3 py-2 text-gray-600">
                              {material.code}
                            </td>
                            <td className="px-3 py-2 text-gray-900">
                              {material.description}
                            </td>
                            <td className="px-3 py-2 text-gray-600">
                              {material.quantity}
                            </td>
                            <td className="px-3 py-2 text-gray-600">
                              {material.unit}
                            </td>
                            <td className="px-3 py-2 text-gray-600">
                              {material.cost}
                            </td>
                          </tr>
                        ))}
                        {(selectedOrder.materials || []).length === 0 && (
                          <tr>
                            <td className="px-3 py-2 text-gray-500" colSpan={5}>
                              No hay materiales registrados.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </Card>

            <Card>
              <button
                onClick={() => toggleSection("executionTime")}
                className="w-full flex justify-between items-center py-2 text-left"
              >
                <span className="font-medium text-gray-700 uppercase text-sm tracking-wider">
                  Tiempo de ejecución
                </span>
                <span
                  className={`transform transition-transform ${expandedSections.executionTime ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
              {expandedSections.executionTime && (
                <div className="mt-3 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Inicio</span>
                    <span className="text-gray-900">
                      {selectedOrder.execution?.start || "Sin registrar"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Fin</span>
                    <span className="text-gray-900">
                      {selectedOrder.execution?.end || "Sin registrar"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">
                      Duración total
                    </span>
                    <span className="text-gray-900">
                      {selectedOrder.execution?.duration || "Sin registrar"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Técnico</span>
                    <span className="text-gray-900">
                      {selectedOrder.execution?.technician ||
                        selectedOrder.assignedTo ||
                        "Sin asignar"}
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="primary" className="text-sm">
                      Registrar nuevo tiempo
                    </Button>
                  </div>
                </div>
              )}
            </Card>

            <Card>
              <button
                onClick={() => toggleSection("media")}
                className="w-full flex justify-between items-center py-2 text-left"
              >
                <span className="font-medium text-gray-700 uppercase text-sm tracking-wider">
                  Medios
                </span>
                <span
                  className={`transform transition-transform ${expandedSections.media ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
              {expandedSections.media && (
                <div className="mt-3">
                  <FileUpload
                    uploadedFiles={uploadedFiles}
                    onFilesChange={handleFilesChange}
                    maxFiles={8}
                  />

                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">Vídeo corto</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Subir vídeo (máx. 30s)
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            <Card>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-gray-600 font-medium">
                    Firma del técnico
                  </span>
                  <span className="text-gray-900 text-right">
                    {selectedOrder.technicianSignatureDate || "Sin registrar"}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-gray-600 font-medium">
                    Firma del responsable
                  </span>
                  <span className="text-gray-900 text-right">
                    {selectedOrder.managerSignatureDate || "Sin registrar"}
                  </span>
                </div>
                <div>
                  <p className="text-gray-600 font-medium mb-2">
                    Observaciones finales
                  </p>
                  <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-600">
                    {(selectedOrder.finalObservations || []).length > 0 ? (
                      (selectedOrder.finalObservations || []).map(
                        (observation, index) => (
                          <p key={index}>{`> ${observation}`}</p>
                        ),
                      )
                    ) : (
                      <p>{"> Sin observaciones finales."}</p>
                    )}
                  </div>
                </div>
              </div>
            </Card>

            <div className="pt-2">
              <div className="flex justify-end">
                <Button variant="primary" className="text-sm">
                  Completar y cerrar
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
