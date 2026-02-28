import Card from "@/components/Card";
import { mockIncidencias, mockUsuarios, mockSalas } from "@/mocks";

export default function Dashboard() {
  const salasOperativas = mockSalas.filter((s) => s.status === "OK").length;
  const totalIncidencias = mockIncidencias.length;
  const usuariosActivos = mockUsuarios.filter(
    (u) => u.status === "Active",
  ).length;

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard General</h1>
      </div>

      {/* Cards principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Incidencias Activas
          </h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {totalIncidencias}
          </p>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Salas Operativas
          </h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {salasOperativas} / {mockSalas.length}
          </p>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Usuarios Activos
          </h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {usuariosActivos}
          </p>
        </Card>
      </div>
    </div>
  );
}
