// ── User ────────────────────────────────────────────────────────────
export type UserRole = "citizen" | "mp" | "admin";

export interface User {
    id: number;
    email: string;
    full_name: string;
    role: UserRole;
    constituency?: string;
    ward?: string;
    avatar_url?: string;
}

// ── Complaint ────────────────────────────────────────────────────────
export type ComplaintStatus = "Pending" | "In Progress" | "Resolved" | "Escalated";
export type ComplaintPriority = "Low" | "Medium" | "High" | "Critical";
export type ComplaintCategory =
    | "Roads"
    | "Water Supply"
    | "Sanitation"
    | "Electricity"
    | "Healthcare"
    | "Education"
    | "Drainage"
    | "Other";

export interface Complaint {
    id: string;
    title: string;
    description: string;
    category: ComplaintCategory;
    priority: ComplaintPriority;
    status: ComplaintStatus;
    ward: string;
    location: {
        address: string;
        lat: number;
        lng: number;
    };
    media?: { type: "image" | "audio"; url: string }[];
    reporter_id: number;
    assigned_to?: string;
    created_at: string;
    updated_at: string;
    upvotes: number;
    ai_priority_score?: number;
}

// ── Alert ────────────────────────────────────────────────────────────
export type AlertType = "Critical" | "Warning" | "Info";
export type AlertStatus = "Active" | "In Progress" | "Resolved";

export interface EmergencyAlert {
    id: string;
    title: string;
    description: string;
    type: AlertType;
    status: AlertStatus;
    affected_wards: string[];
    created_at: string;
}

// ── Ward ─────────────────────────────────────────────────────────────
export interface Ward {
    id: number;
    name: string;
    constituency: string;
    total_complaints: number;
    resolved_complaints: number;
    resolution_rate: number;
    priority_score: number;
    budget_allocated: number;
    budget_spent: number;
}

// ── Dashboard Stats ──────────────────────────────────────────────────
export interface DashboardStats {
    total_complaints: number;
    pending_complaints: number;
    resolved_complaints: number;
    emergency_alerts: number;
    avg_resolution_days: number;
    satisfaction_score: number;
}

// ── AI Recommendation ────────────────────────────────────────────────
export interface AIRecommendation {
    id: number;
    title: string;
    description: string;
    category: ComplaintCategory;
    ward: string;
    impact_score: number;
    urgency: "High" | "Medium" | "Low";
    estimated_cost: string;
    affected_population: number;
}

// ── API Response wrapper ─────────────────────────────────────────────
export interface APIResponse<T> {
    data: T;
    message?: string;
    total?: number;
    page?: number;
    per_page?: number;
}
