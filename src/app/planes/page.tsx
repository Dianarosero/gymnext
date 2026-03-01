"use client";
import { useState } from "react";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import CreatePlanForm from "./CreatePlanForm";
import { mockPlanes } from "@/mocks";
import { Plan } from "@/types";

export default function PlanesPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [planes, setPlanes] = useState(mockPlanes);

  const activePlans = planes.filter((p) => p.status === "Active").length;

  const handleCreatePlan = (planData: Omit<Plan, "id">) => {
    const newPlan: Plan = {
      ...planData,
      id: String(planes.length + 1),
    };
    setPlanes([...planes, newPlan]);
    setIsCreateModalOpen(false);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Planes</h1>
        </div>
        <Button onClick={() => setIsCreateModalOpen(true)}>+ Crear plan</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planes.map((plan) => (
          <Card key={plan.id} className="relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge variant={plan.status === "Active" ? "success" : "default"}>
                {plan.status}
              </Badge>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mt-2">
              {plan.name}
            </h3>
            <p className="text-3xl font-black text-purple-600 mt-4">
              {plan.price}{" "}
              <span className="text-sm text-gray-500 font-normal">
                /{plan.periodicity.toLowerCase()}
              </span>
            </p>
            <div className="mt-6">
              <Button variant="outline" className="w-full">
                Editar plan
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Crear nuevo plan"
      >
        <CreatePlanForm
          onSubmit={handleCreatePlan}
          onCancel={() => setIsCreateModalOpen(false)}
        />
      </Modal>
    </div>
  );
}
