"use client";

import { useState } from "react";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import ToggleField from "@/components/ToggleField";
import InputSelect from "@/components/InputSelect";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import { Plan } from "@/types";

interface CreatePlanFormProps {
  onSubmit: (plan: Omit<Plan, "id">) => void;
  onCancel: () => void;
}

export default function CreatePlanForm({
  onSubmit,
  onCancel,
}: CreatePlanFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "Active" as "Active" | "Inactive",
    price: 0,
    currency: "USD",
    cycle: "Fijo" as "Fijo" | "Variable",
    periodicity: "Mensual" as "Diario" | "Mensual" | "Anual",
    userLimit: "",
    familyMembersIncluded: false,
    discountEnabled: false,
    discountPercentage: 15,
    enrollmentFee: 50,
    enrollmentFeeCurrency: "USD",
    allowedCenters: "Todos los centros",
    accessToFacilities: "Gimnasio, Piscina, Sauna, Clases grupales",
    allCentersHaveSameSchedule: true,
    schedule: {
      Lun: { start: "00:00", end: "00:00" },
      Mar: { start: "00:00", end: "00:00" },
      Mié: { start: "00:00", end: "00:00" },
      Jue: { start: "00:00", end: "00:00" },
      Vie: { start: "00:00", end: "00:00" },
      Sáb: { start: "00:00", end: "00:00" },
      Dom: { start: "00:00", end: "00:00" },
    },
    benefits: {
      trainingPlans: true,
      nutritionPlans: false,
      guestInvitations: false,
    },
    guestInvitations: "",
    centerAccessValue: 0,
    centerAccessPeriod: "Periodo",
    events: [
      { type: "AO", name: "Spinning", count: 3, access: "Semana/Mes/Periodo" },
      {
        type: "ER",
        name: "Entrenamiento",
        count: 1,
        access: "Semana/Mes/Periodo",
      },
      { type: "ER", name: "Tenis", count: 0, access: "Semana/Mes/Periodo" },
    ],
    internalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const planData: Omit<Plan, "id"> = {
      ...formData,
      userLimit: formData.userLimit ? parseInt(formData.userLimit) : undefined,
      allowedCenters: [formData.allowedCenters],
      accessToFacilities: formData.accessToFacilities.split(", "),
    };

    onSubmit(planData);
  };

  const CollapsibleSection = ({
    title,
    children,
    defaultOpen = true,
  }: {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
  }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 px-2 -mx-2 rounded-lg transition-colors"
        >
          <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
            {title}
          </h3>
          <span
            className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </button>
        {isOpen && <div className="pb-6 space-y-4">{children}</div>}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Datos Generales */}
      <Card>
        <CollapsibleSection title="Datos generales">
          <Input
            label="Nombre del plan*"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Nombre"
            required
          />

          <Textarea
            label="Descripción*"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Descripción"
            className="h-20"
            required
          />

          <ToggleField
            label="Estado"
            checked={formData.status === "Active"}
            onChange={(checked) =>
              setFormData({
                ...formData,
                status: checked ? "Active" : "Inactive",
              })
            }
            activeText="Activo"
            inactiveText="Inactivo"
          />
        </CollapsibleSection>
      </Card>

      {/* Precio y Condiciones */}
      <Card>
        <CollapsibleSection title="Precio y condiciones">
          <InputSelect
            label="Precio base"
            type="number"
            step="0.01"
            value={formData.price}
            selectValue={formData.currency}
            onValueChange={(value) =>
              setFormData({ ...formData, price: value as number })
            }
            onSelectChange={(currency) =>
              setFormData({ ...formData, currency })
            }
            placeholder="98.00"
            options={[
              { value: "USD", label: "USD" },
              { value: "EUR", label: "EUR" },
            ]}
          />

          <div className="grid grid-cols-2 gap-4">
            <Select
              label="Ciclo"
              value={formData.cycle}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  cycle: e.target.value as "Fijo" | "Variable",
                })
              }
            >
              <option value="Fijo">Fijo</option>
              <option value="Variable">Variable</option>
            </Select>
            <Select
              label="Periodicidad"
              value={formData.periodicity}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  periodicity: e.target.value as "Diario" | "Mensual" | "Anual",
                })
              }
            >
              <option value="Mensual">Mensual</option>
              <option value="Diario">Diario</option>
              <option value="Anual">Anual</option>
            </Select>
          </div>

          <Input
            label="Límite de usuarios o familiares dependientes"
            value={formData.userLimit}
            onChange={(e) =>
              setFormData({ ...formData, userLimit: e.target.value })
            }
            type="number"
            placeholder="Sin límite"
          />

          <ToggleField
            label="Permite prorrateo en alta"
            checked={formData.familyMembersIncluded}
            onChange={(checked) =>
              setFormData({
                ...formData,
                familyMembersIncluded: checked,
              })
            }
          />

          <div className="grid grid-cols-2 gap-4">
            <Select label="Duración del descuento (períodos)">
              <option>3</option>
            </Select>
            <Input
              label="Descuento"
              type="number"
              value={formData.discountPercentage}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  discountPercentage: parseInt(e.target.value) || 0,
                })
              }
              suffix="%"
            />
          </div>

          <InputSelect
            label="Matrícula por defecto"
            type="number"
            step="0.01"
            value={formData.enrollmentFee}
            selectValue={formData.enrollmentFeeCurrency}
            onValueChange={(value) =>
              setFormData({ ...formData, enrollmentFee: value as number })
            }
            onSelectChange={(currency) =>
              setFormData({ ...formData, enrollmentFeeCurrency: currency })
            }
            options={[
              { value: "USD", label: "USD" },
              { value: "EUR", label: "EUR" },
            ]}
          />
        </CollapsibleSection>
      </Card>

      {/* Accesos y Beneficios */}
      <Card>
        <CollapsibleSection title="Accesos y beneficios">
          <Select
            label="Centros permitidos"
            value={formData.allowedCenters}
            onChange={(e) =>
              setFormData({ ...formData, allowedCenters: e.target.value })
            }
          >
            <option value="Todos los centros">Todos los centros</option>
            <option value="Centro Principal">Centro Principal</option>
            <option value="Centro Norte">Centro Norte</option>
          </Select>

          <Input
            label="Acceso a instalaciones"
            value={formData.accessToFacilities}
            onChange={(e) =>
              setFormData({ ...formData, accessToFacilities: e.target.value })
            }
            placeholder="Gimnasio, Piscina, Sauna, Clases grupales"
          />

          <ToggleField
            label="Todos los centros e instalaciones tienen los mismos horarios"
            checked={formData.allCentersHaveSameSchedule}
            onChange={(checked) =>
              setFormData({
                ...formData,
                allCentersHaveSameSchedule: checked,
              })
            }
          />

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700">Días</span>
              <div className="flex space-x-4">
                <span className="text-sm font-semibold text-gray-700 text-center">
                  Hora de inicio
                </span>
                <span className="text-sm font-semibold text-gray-700 text-center">
                  Hora de fin
                </span>
              </div>
            </div>

            {Object.entries(formData.schedule).map(([day, times]) => (
              <div key={day} className="flex items-center justify-between">
                <div className="w-14 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {day}
                </div>
                <div className="flex space-x-4">
                  <input
                    type="time"
                    value={times.start}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        schedule: {
                          ...formData.schedule,
                          [day]: { ...times, start: e.target.value },
                        },
                      })
                    }
                    className="px-3 py-1 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />

                  <input
                    type="time"
                    value={times.end}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        schedule: {
                          ...formData.schedule,
                          [day]: { ...times, end: e.target.value },
                        },
                      })
                    }
                    className="px-3 py-1 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-700">
              Beneficios incluidos
            </h4>
            <div className="space-y-4">
              <ToggleField
                label="Planes de entrenamiento"
                checked={formData.benefits.trainingPlans}
                onChange={(checked) =>
                  setFormData({
                    ...formData,
                    benefits: {
                      ...formData.benefits,
                      trainingPlans: checked,
                    },
                  })
                }
              />
              <ToggleField
                label="Planes de nutrición"
                checked={formData.benefits.nutritionPlans}
                onChange={(checked) =>
                  setFormData({
                    ...formData,
                    benefits: {
                      ...formData.benefits,
                      nutritionPlans: checked,
                    },
                  })
                }
              />
            </div>
          </div>

          <Input
            label="Invitaciones a terceros"
            value={formData.guestInvitations}
            onChange={(e) =>
              setFormData({ ...formData, guestInvitations: e.target.value })
            }
            placeholder="Número de invitaciones"
          />

          <InputSelect
            label="Acceso al centro"
            type="number"
            value={formData.centerAccessValue}
            selectValue={formData.centerAccessPeriod}
            onValueChange={(value) =>
              setFormData({ ...formData, centerAccessValue: value as number })
            }
            onSelectChange={(period) =>
              setFormData({ ...formData, centerAccessPeriod: period })
            }
            placeholder="Número de accesos"
            options={[
              { value: "Semana", label: "Semana" },
              { value: "Mes", label: "Mes" },
              { value: "Periodo", label: "Periodo" },
            ]}
          />

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-700">
              Acceso a eventos
            </h4>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 border-b border-gray-100 text-gray-600 font-medium">
                    <tr>
                      <th className="px-6 py-4 text-left">Tipo de evento</th>
                      <th className="px-6 py-4">Evento</th>
                      <th className="px-6 py-4">Acceso permitido</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {formData.events.map((event, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50/50 transition-colors duration-150"
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {event.type}
                        </td>
                        <td className="px-6 py-4 text-gray-900">
                          {event.name}
                        </td>

                        <td className="px-6 py-4">
                          <select
                            value={event.access}
                            onChange={(e) => {
                              const newEvents = [...formData.events];
                              newEvents[index] = {
                                ...event,
                                access: e.target.value,
                              };
                              setFormData({ ...formData, events: newEvents });
                            }}
                            className="min-w-48 w-full px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all sm:text-sm text-gray-900"
                          >
                            <option value="Semana">Semana</option>
                            <option value="Mes">Mes</option>
                            <option value="Periodo">Periodo</option>
                            <option value="Semana/Mes/Periodo">
                              Semana/Mes/Periodo
                            </option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CollapsibleSection>
      </Card>

      {/* Observaciones Internas */}
      <Card>
        <CollapsibleSection title="Observaciones internas">
          <Textarea
            label="Notas visibles solo para administración"
            value={formData.internalNotes}
            onChange={(e) =>
              setFormData({ ...formData, internalNotes: e.target.value })
            }
            placeholder="Notas internas sobre el plan..."
            className="h-20"
          />
        </CollapsibleSection>
      </Card>

      {/* Botones */}
      <div className="flex justify-end space-x-3 pt-6 border-t border-gray-100">
        <Button type="button" variant="ghost" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit">Crear plan</Button>
      </div>
    </form>
  );
}
