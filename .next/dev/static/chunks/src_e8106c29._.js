(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Card({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Card.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Badge({ children, variant = "default" }) {
    const variantStyles = {
        default: "bg-gray-100 text-gray-700 border border-gray-200",
        success: "bg-green-50 text-green-700 border border-green-200 shadow-sm",
        danger: "bg-red-50 text-red-700 border border-red-200 shadow-sm",
        warning: "bg-orange-50 text-orange-700 border border-orange-200 shadow-sm"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold transition-colors duration-150 ${variantStyles[variant]}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Badge.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Button({ children, variant = "primary", className = "", ...props }) {
    const baseClasses = "inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    const styleVariants = {
        primary: "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 shadow-sm shadow-purple-200 transform hover:scale-[1.02]",
        outline: "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 focus:ring-gray-200 shadow-sm",
        ghost: "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-200"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${baseClasses} ${styleVariants[variant]} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Button.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Modal({ isOpen, onClose, title, children }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            if (isOpen) setMounted(true);
            else setTimeout({
                "Modal.useEffect": ()=>setMounted(false)
            }["Modal.useEffect"], 200);
        }
    }["Modal.useEffect"], [
        isOpen
    ]);
    if (!mounted && !isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 z-50 flex justify-end bg-gray-900/20 backdrop-blur-sm transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-full max-w-md bg-white h-full shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-sm font-bold text-gray-500 uppercase tracking-wider",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors leading-none",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modal.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/Modal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modal.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Modal.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Modal, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/mocks/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockIncidencias",
    ()=>mockIncidencias,
    "mockOrdenes",
    ()=>mockOrdenes,
    "mockPlanes",
    ()=>mockPlanes,
    "mockSalas",
    ()=>mockSalas,
    "mockUsuarios",
    ()=>mockUsuarios
]);
const mockSalas = [
    {
        id: "1",
        name: "Sala Cardio Principal",
        floor: "1",
        status: "Maintenance",
        qr: "GYM-001"
    },
    {
        id: "2",
        name: "Sala Yoga & Pilates",
        floor: "2",
        status: "OK",
        qr: "GYM-002"
    },
    {
        id: "3",
        name: "Piscina Olímpica",
        floor: "Baja",
        status: "OK",
        qr: "POOL-001"
    },
    {
        id: "4",
        name: "Sala Pesas Libres",
        floor: "1",
        status: "Error",
        qr: "GYM-003"
    }
];
const mockIncidencias = [
    {
        id: "INC-310",
        title: "Cinta 03 hace ruido extraño",
        room: "Sala Fitness",
        status: "In progress",
        priority: "Critical",
        date: "15/02/2026",
        description: "El monitor reporta que la cinta NordicTrack 03 no funciona desde ayer. Al encender, muestra un pitido y pantalla negra. Posible fallo eléctrico o fusible interno.",
        assignedTo: "Juan Pérez",
        assignedToRole: "Técnico mantenimiento",
        creationDate: "10/10/2025 - 09:43",
        slaDeadline: "11/10/2025 - 17:00",
        lastUpdate: "11/10/2025 - 10:15",
        comments: [
            {
                id: "1",
                author: "Marta Gómez",
                role: "Recepción",
                date: "10/10/2025",
                time: "09:45",
                message: "Reporto incidencia tras ver que la cinta no responde."
            },
            {
                id: "2",
                author: "Juan Pérez",
                role: "Técnico",
                date: "10/10/2025",
                time: "11:00",
                message: "Comprobando alimentación y fusible. Solicito repuesto motor interno."
            },
            {
                id: "3",
                author: "Marta Gómez",
                role: "",
                date: "10/10/2025",
                time: "11:15",
                message: "Gracias Juan, deja aviso si necesitas cortar el suministro."
            }
        ],
        changeHistory: [
            {
                id: "1",
                date: "10/10/2025",
                time: "09:43",
                action: "Creación de incidencia",
                user: "Marta Gómez",
                role: "..."
            },
            {
                id: "2",
                date: "10/10/2025",
                time: "09:43",
                action: "Asignada a Juan Pérez",
                user: "Sistema",
                role: "..."
            },
            {
                id: "3",
                date: "10/10/2025",
                time: "09:43",
                action: "Estado -> En progreso",
                user: "Juan Pérez",
                role: "..."
            },
            {
                id: "4",
                date: "10/10/2025",
                time: "09:43",
                action: "Comentario añadido",
                user: "Sistema",
                role: "..."
            }
        ]
    },
    {
        id: "INC-2024-0311",
        title: "AC gotea en esquina derecha",
        room: "Sala Yoga & Pilates",
        status: "Open",
        priority: "Medium",
        date: "16/02/2026"
    },
    {
        id: "INC-2024-0312",
        title: "Problema con sistema de sonido",
        room: "Sala Pesas Libres",
        status: "Open",
        priority: "Low",
        date: "18/02/2026"
    }
];
const mockOrdenes = [
    {
        id: "OT-2026-204",
        title: "Revisión motor cinta 03 - urgente",
        room: "Sala Cardio Principal",
        priority: "Critical",
        status: "Pending",
        date: "15/02/2026",
        item: "Cinta de correr NordicTrack 03",
        createdBy: "Marta Gómez",
        createdByRole: "Recepción",
        assignedTo: "Juan Pérez",
        assignedToRole: "Técnico mantenimiento",
        creationDate: "15/02/2026 - 09:43",
        slaDeadline: "16/02/2026 - 17:00",
        lastUpdate: "15/02/2026 - 12:15",
        historySteps: [
            {
                id: "1",
                step: "□",
                description: "Desconectar equipo y verificar alimentación",
                result: "Correcto",
                resultType: "success"
            },
            {
                id: "2",
                step: "□",
                description: "Medir voltaje del motor principal",
                result: "230V",
                resultType: "default"
            },
            {
                id: "3",
                step: "□",
                description: "Sustituir fusible principal",
                result: "Hecho",
                resultType: "success"
            },
            {
                id: "4",
                step: "□",
                description: "Verificar velocidad tras encendido",
                result: "Pendiente",
                resultType: "warning"
            }
        ],
        materials: [
            {
                id: "1",
                code: "REP-045",
                description: "Fusible principal 15A",
                quantity: 1,
                unit: "ud",
                cost: "3.50 EUR"
            },
            {
                id: "2",
                code: "CAB-102",
                description: "Cableado interno aislamiento reforzado",
                quantity: 2,
                unit: "m",
                cost: "7.00 EUR"
            }
        ],
        execution: {
            start: "15/02/2026 - 10:15",
            end: "15/02/2026 - 12:10",
            duration: "1h 55m",
            technician: "Juan Pérez"
        },
        additionalNotes: "El motor respondía intermitentemente; se recomienda revisar conectores internos.",
        technicianSignatureDate: "15/02/2026 - 12:10",
        managerSignatureDate: "15/02/2026 - 12:20",
        finalObservations: [
            "Equipo probado y en funcionamiento normal.",
            "Se recomienda mantenimiento preventivo en 30 días."
        ]
    },
    {
        id: "OT-2026-205",
        title: "Mantenimiento filtros climatización",
        room: "Sala Yoga & Pilates",
        priority: "Medium",
        status: "Done",
        date: "12/02/2026",
        item: "Sistema HVAC zona 2",
        createdBy: "Laura Ortega",
        createdByRole: "Operaciones",
        assignedTo: "Sergio Rivas",
        assignedToRole: "Técnico climatización",
        creationDate: "11/02/2026 - 08:20",
        slaDeadline: "12/02/2026 - 18:00",
        lastUpdate: "12/02/2026 - 16:40",
        historySteps: [
            {
                id: "1",
                step: "□",
                description: "Inspección de filtros y rejillas",
                result: "Correcto",
                resultType: "success"
            },
            {
                id: "2",
                step: "□",
                description: "Sustitución de filtro HEPA principal",
                result: "Hecho",
                resultType: "success"
            }
        ],
        materials: [
            {
                id: "1",
                code: "HVA-011",
                description: "Filtro HEPA H13",
                quantity: 1,
                unit: "ud",
                cost: "24.00 EUR"
            }
        ],
        execution: {
            start: "12/02/2026 - 14:00",
            end: "12/02/2026 - 16:35",
            duration: "2h 35m",
            technician: "Sergio Rivas"
        },
        additionalNotes: "Trabajo completado sin incidencias.",
        technicianSignatureDate: "12/02/2026 - 16:35",
        managerSignatureDate: "12/02/2026 - 16:40",
        finalObservations: [
            "Sistema de climatización operando dentro de parámetros."
        ]
    },
    {
        id: "OT-2026-206",
        title: "Cambio altavoces sala pesas",
        room: "Sala Pesas Libres",
        priority: "Low",
        status: "Pending",
        date: "18/02/2026",
        item: "Altavoces ambientales zona pesas",
        createdBy: "David Navas",
        createdByRole: "Coordinador sala",
        assignedTo: "Ana Beltrán",
        assignedToRole: "Técnica sonido",
        creationDate: "18/02/2026 - 09:10",
        slaDeadline: "20/02/2026 - 17:00",
        lastUpdate: "18/02/2026 - 11:25",
        historySteps: [
            {
                id: "1",
                step: "□",
                description: "Revisión de cableado actual",
                result: "Pendiente",
                resultType: "warning"
            }
        ],
        materials: [
            {
                id: "1",
                code: "AUD-220",
                description: "Altavoz 8'' montaje mural",
                quantity: 2,
                unit: "ud",
                cost: "89.00 EUR"
            }
        ],
        execution: {
            start: "18/02/2026 - 10:00",
            end: "-",
            duration: "En curso",
            technician: "Ana Beltrán"
        },
        additionalNotes: "Se espera aprobación de material adicional.",
        technicianSignatureDate: "-",
        managerSignatureDate: "-",
        finalObservations: [
            "Orden en ejecución."
        ]
    }
];
const mockPlanes = [
    {
        id: "1",
        name: "Plan Básico",
        price: 35.9,
        status: "Active",
        periodicity: "Mensual"
    },
    {
        id: "2",
        name: "Plan Premium",
        price: 65.9,
        status: "Active",
        periodicity: "Mensual"
    },
    {
        id: "3",
        name: "Pase Día",
        price: 12.5,
        status: "Active",
        periodicity: "Diario"
    },
    {
        id: "4",
        name: "Plan Estudiante",
        price: 28.9,
        status: "Inactive",
        periodicity: "Mensual"
    }
];
const mockUsuarios = [
    {
        id: "1",
        name: "Carlos Mendoza",
        email: "carlos.mendoza@gmail.com",
        phone: "+34 655 234 567",
        status: "Active",
        registered: "15-01-2024",
        birthDate: "12-05-1990",
        gender: "Masculino",
        objective: "Pérdida de peso",
        branch: "Centro",
        tags: [
            "VIP",
            "Entrenamiento Personal"
        ]
    },
    {
        id: "2",
        name: "Ana Rodríguez",
        email: "ana.rodriguez@outlook.com",
        phone: "+34 678 987 321",
        status: "Active",
        registered: "28-11-2024",
        birthDate: "18-08-1988",
        gender: "Femenino",
        objective: "Tonificación muscular",
        branch: "Norte",
        tags: [
            "Cliente"
        ]
    },
    {
        id: "3",
        name: "Miguel Fernández",
        email: "mfernandez@empresa.com",
        phone: "+34 612 445 789",
        status: "Inactive",
        registered: "03-09-2024",
        birthDate: "25-11-1985",
        gender: "Masculino",
        objective: "Mantenimiento físico",
        branch: "Sur",
        tags: [
            "Cliente"
        ]
    },
    {
        id: "4",
        name: "Pablo Victor",
        email: "usuariodeprueba@gmail.com",
        phone: "123",
        status: "Active",
        registered: "04-10-2024",
        birthDate: "21-07-2004",
        gender: "Masculino",
        objective: "Incremento de masa muscular",
        branch: "Reparto",
        tags: [
            "Prueba"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/salas/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SalasPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mocks/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const mockItemsBySalaId = {
    "1": [
        {
            item: "Cinta 03",
            category: "Fitness Machines",
            status: "Error",
            lastPm: "12/09/2025"
        },
        {
            item: "Aire 02",
            category: "HVAC",
            status: "OK",
            lastPm: "12/09/2025"
        }
    ],
    "2": [
        {
            item: "Colchoneta 07",
            category: "Yoga",
            status: "OK",
            lastPm: "09/09/2025"
        }
    ],
    "3": [
        {
            item: "Bomba 01",
            category: "Piscina",
            status: "OK",
            lastPm: "05/09/2025"
        }
    ],
    "4": [
        {
            item: "Banco 04",
            category: "Pesas",
            status: "Error",
            lastPm: "11/09/2025"
        }
    ]
};
function SalasPage() {
    _s();
    const [selectedSalaId, setSelectedSalaId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [collapsedSections, setCollapsedSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        salaDetails: false,
        itemsList: false
    });
    const toggleSection = (section)=>{
        setCollapsedSections((prev)=>({
                ...prev,
                [section]: !prev[section]
            }));
    };
    const selectedSala = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockSalas"].find((sala)=>sala.id === selectedSalaId) ?? null;
    const selectedSalaItems = selectedSala ? mockItemsBySalaId[selectedSala.id] ?? [] : [];
    const getStatusBadgeVariant = (status)=>{
        switch(status){
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
    const getStatusText = (status)=>{
        switch(status){
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
    const getItemStatusText = (status)=>{
        switch(status){
            case "OK":
                return "OK";
            case "Error":
                return "Falla";
            default:
                return status;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 max-w-6xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-900",
                            children: "Salas"
                        }, void 0, false, {
                            fileName: "[project]/src/app/salas/page.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/salas/page.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: "+ Registrar Nueva Sala"
                    }, void 0, false, {
                        fileName: "[project]/src/app/salas/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/salas/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "p-0 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "min-w-full text-left text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "bg-gray-50 border-b border-gray-100 text-gray-600 font-medium",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-4",
                                            children: "QR"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/salas/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-4",
                                            children: "Nombre de la Sala"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/salas/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-4",
                                            children: "Ubicación"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/salas/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-4 text-center",
                                            children: "Estado Operativo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/salas/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-4 text-center",
                                            children: "Acciones"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/salas/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/salas/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/salas/page.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "divide-y divide-gray-100",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockSalas"].map((sala)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-gray-50/50 transition-colors duration-150 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 font-mono text-xs font-semibold text-purple-700 bg-purple-50 rounded-md mx-2 my-1 inline-block",
                                                children: sala.qr
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/salas/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 font-medium text-gray-900",
                                                children: sala.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/salas/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 text-gray-500",
                                                children: sala.floor
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/salas/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    variant: getStatusBadgeVariant(sala.status),
                                                    children: getStatusText(sala.status)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/salas/page.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/salas/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        variant: "ghost",
                                                        className: "text-xs px-3 py-1",
                                                        onClick: ()=>setSelectedSalaId(sala.id),
                                                        children: "Ver Detalles"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/salas/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/salas/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/salas/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, sala.id, true, {
                                        fileName: "[project]/src/app/salas/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/salas/page.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/salas/page.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/salas/page.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/salas/page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: Boolean(selectedSala),
                onClose: ()=>setSelectedSalaId(null),
                title: "Detalle de la sala",
                children: selectedSala && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "p-4 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>toggleSection("salaDetails"),
                                    className: "w-full flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-gray-700",
                                            children: selectedSala.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/salas/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `transform transition-transform ${collapsedSections.salaDetails ? "" : "rotate-180"}`,
                                            children: "▼"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/salas/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/salas/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this),
                                !collapsedSections.salaDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between border-b border-gray-100 pb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-gray-700",
                                                    children: "Planta"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/salas/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500",
                                                    children: selectedSala.floor
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/salas/page.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/salas/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between border-b border-gray-100 pb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-gray-700",
                                                    children: "QR"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/salas/page.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500",
                                                    children: selectedSala.qr
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/salas/page.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/salas/page.tsx",
                                            lineNumber: 206,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-gray-700",
                                                    children: "Estado"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/salas/page.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    variant: getStatusBadgeVariant(selectedSala.status),
                                                    children: selectedSala.status === "Maintenance" ? "En revisión" : getStatusText(selectedSala.status)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/salas/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/salas/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/salas/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/salas/page.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-lg font-bold text-gray-700",
                                            children: "Listado de ítems en la sala"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/salas/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: (e)=>e.stopPropagation(),
                                                    className: "w-6 h-6 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 hover:border-purple-500 hover:text-purple-600 transition-colors text-base font-bold leading-none pb-px",
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/salas/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>toggleSection("itemsList"),
                                                    className: "flex items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `transform transition-transform ${collapsedSections.itemsList ? "" : "rotate-180"}`,
                                                        children: "▼"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/salas/page.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/salas/page.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/salas/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/salas/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this),
                                !collapsedSections.itemsList && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "min-w-full text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "border-b border-gray-100 text-gray-700",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left py-2",
                                                            children: "Ítem"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/salas/page.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left py-2",
                                                            children: "Categoría"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/salas/page.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left py-2",
                                                            children: "Estado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/salas/page.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left py-2",
                                                            children: "Último PM"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/salas/page.tsx",
                                                            lineNumber: 259,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/salas/page.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/salas/page.tsx",
                                                lineNumber: 254,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-gray-100",
                                                children: selectedSalaItems.map((itemRow)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-2 text-gray-600",
                                                                children: itemRow.item
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/salas/page.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-2 text-gray-500",
                                                                children: itemRow.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/salas/page.tsx",
                                                                lineNumber: 266,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    variant: getStatusBadgeVariant(itemRow.status),
                                                                    children: getItemStatusText(itemRow.status)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/salas/page.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/salas/page.tsx",
                                                                lineNumber: 269,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-2 text-gray-500",
                                                                children: itemRow.lastPm
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/salas/page.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, `${selectedSala.id}-${itemRow.item}`, true, {
                                                        fileName: "[project]/src/app/salas/page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/salas/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/salas/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/salas/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/salas/page.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "outline",
                                        className: "flex-1",
                                        children: "+ Añadir ítem"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/salas/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "flex-1",
                                        children: "Crear incidencia"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/salas/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/salas/page.tsx",
                                lineNumber: 288,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/salas/page.tsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/salas/page.tsx",
                    lineNumber: 181,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/salas/page.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/salas/page.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(SalasPage, "Ze1eaIxy3sjc+X/IOU3n13vNzc4=");
_c = SalasPage;
var _c;
__turbopack_context__.k.register(_c, "SalasPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e8106c29._.js.map