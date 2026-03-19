// export interface ResourceRecord {
//   id: string;
//   name?: string;
//   status: 'available' | 'reserved' | 'meeting' | 'unavailable' | string;
//   meta?: Record<string, unknown>;
// }

// export interface ResourceRepository {
//   listAll(): Promise<ResourceRecord[]>;
//   findById(id: string): Promise<ResourceRecord | null>;
//   updateStatus(id: string, status: ResourceRecord['status']): Promise<ResourceRecord>;
// }
