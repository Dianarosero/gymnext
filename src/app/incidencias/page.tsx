"use client";
import { useState } from "react";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Textarea from "@/components/Textarea";
import FileUpload from "@/components/FileUpload";
import { mockIncidencias } from "@/mocks";

export default function IncidenciasPage() {
  const [selectedIncidentId, setSelectedIncidentId] = useState<string | null>(
    null,
  );
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    description: true,
    responsible: false,
    comments: false,
    media: false,
    history: false,
  });
  const [newComment, setNewComment] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const selectedIncident = mockIncidencias.find(
    (inc) => inc.id === selectedIncidentId,
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "danger";
      case "Medium":
        return "warning";
      case "Low":
        return "default";
      default:
        return "default";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "danger";
      case "In progress":
        return "warning";
      case "Closed":
        return "success";
      default:
        return "default";
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Gestión de Incidencias
          </h1>
        </div>
        <Button>+ Reportar Nueva Incidencia</Button>
      </div>

      {/* Lista de incidencias */}
      <div className="grid gap-4">
        {mockIncidencias.map((incidencia) => (
          <div
            key={incidencia.id}
            className="hover:shadow-md transition-all duration-200 cursor-pointer"
            onClick={() => setSelectedIncidentId(incidencia.id)}
          >
            <Card className="h-full">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {incidencia.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>{incidencia.room}</span>
                    <span>{incidencia.date}</span>
                    <span>QR: {incidencia.id}</span>
                  </div>
                </div>
                <Badge variant={getStatusColor(incidencia.status)}>
                  {incidencia.status === "Open"
                    ? "Abierta"
                    : incidencia.status === "In progress"
                      ? "En Proceso"
                      : "Cerrada"}
                </Badge>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal de detalles */}
      {selectedIncident && (
        <Modal
          isOpen={!!selectedIncident}
          onClose={() => setSelectedIncidentId(null)}
          title={`INCIDENCIA #${selectedIncident.id}`}
        >
          <div className="space-y-4">
            {/* Información básica */}
            <Card>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Sala
                  </span>
                  <span className="text-sm text-gray-900">
                    {selectedIncident.room}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Técnico
                  </span>
                  <Badge variant={getPriorityColor(selectedIncident.priority)}>
                    {selectedIncident.priority === "Critical"
                      ? "Crítico"
                      : selectedIncident.priority === "Medium"
                        ? "Medio"
                        : "Bajo"}
                  </Badge>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">SLA</span>
                  <Badge variant={getStatusColor(selectedIncident.status)}>
                    {selectedIncident.status === "In progress"
                      ? "En progreso"
                      : selectedIncident.status === "Open"
                        ? "Abierta"
                        : "Cerrada"}
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Sección Descripción */}
            <Card>
              <button
                onClick={() => toggleSection("description")}
                className="w-full flex justify-between items-center py-2 text-left"
              >
                <span className="font-medium text-gray-700 uppercase text-sm tracking-wider">
                  Descripción
                </span>
                <span
                  className={`transform transition-transform ${expandedSections.description ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
              {expandedSections.description && (
                <div className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {selectedIncident.description}
                </div>
              )}
            </Card>

            {/* Sección Responsable */}
            <Card>
              <button
                onClick={() => toggleSection("responsible")}
                className="w-full flex justify-between items-center py-2 text-left"
              >
                <span className="font-medium text-gray-700 uppercase text-sm tracking-wider">
                  RESPONSABLE
                </span>
                <span
                  className={`transform transition-transform ${expandedSections.responsible ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
              {expandedSections.responsible && selectedIncident.assignedTo && (
                <div className="mt-3 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Asignado a</span>
                    <span className="text-gray-900">
                      {selectedIncident.assignedTo} (
                      {selectedIncident.assignedToRole})
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fecha de creación</span>
                    <span className="text-gray-900">
                      {selectedIncident.creationDate}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Fecha límite según SLA
                    </span>
                    <span className="text-gray-900">
                      {selectedIncident.slaDeadline}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Última actualización</span>
                    <span className="text-gray-900">
                      {selectedIncident.lastUpdate}
                    </span>
                  </div>
                </div>
              )}
            </Card>

            {/* Sección Comentarios */}
            <Card>
              <button
                onClick={() => toggleSection("comments")}
                className="w-full flex justify-between items-center py-2 text-left"
              >
                <span className="font-medium text-gray-700 uppercase text-sm tracking-wider">
                  Comentarios
                </span>
                <span
                  className={`transform transition-transform ${expandedSections.comments ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
              {expandedSections.comments && (
                <div className="mt-3 space-y-4">
                  {selectedIncident.comments?.map((comment) => (
                    <div
                      key={comment.id}
                      className="border-b border-gray-50 pb-3 last:border-b-0"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-gray-900 text-sm">
                          {comment.author} {comment.role && `(${comment.role})`}
                        </span>
                        <span className="text-xs text-gray-500">
                          {comment.date} - {comment.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        "{comment.message}"
                      </p>
                    </div>
                  ))}

                  <div className="mt-4">
                    <Textarea
                      label=""
                      placeholder="Escribe un comentario..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      rows={3}
                    />
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

            {/* Sección Historial de cambios */}
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
              {expandedSections.history && selectedIncident.changeHistory && (
                <div className="mt-3">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left font-medium text-gray-600">
                            Fecha
                          </th>
                          <th className="px-3 py-2 text-left font-medium text-gray-600">
                            Acción
                          </th>
                          <th className="px-3 py-2 text-left font-medium text-gray-600">
                            Usuario
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {selectedIncident.changeHistory.map((change) => (
                          <tr key={change.id}>
                            <td className="px-3 py-2 text-gray-600">
                              {change.date} {change.time}
                            </td>
                            <td className="px-3 py-2 text-gray-900">
                              {change.action}
                            </td>
                            <td className="px-3 py-2 text-gray-600">
                              {change.user}
                            </td>
                            <td>...</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </Card>

            {/* Botones de acción */}
            <div className="pt-2">
              <div className="flex gap-3">
                <Button variant="outline" className="text-sm">
                  Cambiar estado
                </Button>
                <Button variant="outline" className="text-sm">
                  Reasignar
                </Button>
                <Button variant="primary" className="text-sm">
                  Cerrar Incidencia
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
