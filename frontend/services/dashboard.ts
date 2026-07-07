import { api } from "@/lib/auth";
import type { DashboardStats, AIRecommendation, Ward } from "@/types";

export async function getDashboardStats() {
    const { data } = await api.get<DashboardStats>("/dashboard/stats");
    return data;
}

export async function getAIRecommendations(limit = 5) {
    const { data } = await api.get<AIRecommendation[]>("/recommendations", {
        params: { limit },
    });
    return data;
}

export async function getWardPerformance() {
    const { data } = await api.get<Ward[]>("/wards/performance");
    return data;
}

export async function getPriorityScores(wardId?: number) {
    const { data } = await api.get("/priority-scores", {
        params: wardId ? { ward_id: wardId } : {},
    });
    return data;
}
