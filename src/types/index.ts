// Tipos principales de la aplicación

export interface Sala {
  id: string;
  name: string;
  floor: string; // Puede ser "Planta 1", "Planta Baja", etc.
  status: "OK" | "Error" | "Maintenance";
  qr: string; // Código QR para identificación rápida
}

export interface Incidencia {
  id: string; // Formato: INC-YYYY-NNNN
  title: string;
  room: string; // Nombre de la sala donde ocurrió
  status: "Open" | "In progress" | "Closed";
  priority: "Low" | "Medium" | "Critical";
  date: string;
  description?: string;
  assignedTo?: string;
  assignedToRole?: string;
  creationDate?: string;
  slaDeadline?: string;
  lastUpdate?: string;
  comments?: {
    id: string;
    author: string;
    role: string;
    date: string;
    time: string;
    message: string;
  }[];
  changeHistory?: {
    id: string;
    date: string;
    time: string;
    action: string;
    user: string;
    role: string;
  }[];
}

// Orden de trabajo/mantenimiento
export interface Orden {
  id: string; // Formato: OT-YYYY-NNN
  title: string;
  room: string;
  priority?: "Low" | "Medium" | "Critical";
  status: "Pending" | "Done";
  date: string;
  item?: string;
  createdBy?: string;
  createdByRole?: string;
  assignedTo?: string;
  assignedToRole?: string;
  creationDate?: string;
  slaDeadline?: string;
  lastUpdate?: string;
  historySteps?: Array<{
    id: string;
    step: string;
    description: string;
    result: string;
    resultType?: "success" | "warning" | "default";
  }>;
  materials?: Array<{
    id: string;
    code: string;
    description: string;
    quantity: number;
    unit: string;
    cost: string;
  }>;
  execution?: {
    start: string;
    end: string;
    duration: string;
    technician: string;
  };
  additionalNotes?: string;
  technicianSignatureDate?: string;
  managerSignatureDate?: string;
  finalObservations?: string[];
}

// Plan de membresía/suscripción
export interface Plan {
  id: string;
  name: string;
  description?: string;
  price: number; // En euros
  status: "Active" | "Inactive";
  periodicity: "Diario" | "Mensual" | "Anual";
  cycle?: "Fijo" | "Variable";
  userLimit?: number;
  familyMembersIncluded?: boolean;
  discountEnabled?: boolean;
  discountPercentage?: number;
  enrollmentFee?: number;
  allowedCenters?: string[];
  accessToFacilities?: string[];
  schedule?: { [key: string]: { start: string; end: string } };
  benefits?: {
    trainingPlans?: boolean;
    nutritionPlans?: boolean;
    guestInvitations?: boolean;
  };
  events?: Array<{
    type: string;
    name: string;
    count: number;
    access: string;
  }>;
  internalNotes?: string;
}

// Usuario del sistema
export interface Usuario {
  id: string;
  name: string; // Nombre completo
  email: string;
  phone: string;
  status: "Active" | "Inactive";
  registered: string; // Fecha de registro
  birthDate?: string; // Fecha de nacimiento
  gender?: "Masculino" | "Femenino" | "Otro";
  objective?: string; // Objetivo del usuario en el gimnasio
  branch?: string; // Filial/centro habitual
  tags?: string[]; // Etiquetas del usuario
}
