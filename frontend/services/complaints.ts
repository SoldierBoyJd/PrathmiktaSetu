import { api } from "@/lib/auth";
import type { APIResponse, Complaint, ComplaintStatus, ComplaintCategory } from "@/types";

export interface GetComplaintsParams {
    page?: number;
    per_page?: number;
    status?: ComplaintStatus | "All";
    category?: ComplaintCategory | "All";
    ward?: string;
    search?: string;
}

export async function getComplaints(params: GetComplaintsParams = {}) {
    const { data } = await api.get<APIResponse<Complaint[]>>("/complaints", { params });
    return data;
}

export async function getComplaintById(id: string) {
    const { data } = await api.get<Complaint>(`/complaints/${id}`);
    return data;
}

export async function createComplaint(payload: Partial<Complaint>) {
    const { data } = await api.post<Complaint>("/complaints", payload);
    return data;
}

export async function updateComplaintStatus(id: string, status: ComplaintStatus) {
    const { data } = await api.patch<Complaint>(`/complaints/${id}/status`, { status });
    return data;
}

export async function upvoteComplaint(id: string) {
    const { data } = await api.post<{ upvotes: number }>(`/complaints/${id}/upvote`);
    return data;
}
