export interface CreateInfracture {
  id: number;
  name: string;
  type: string;
  capacity: number;
  status: string;
  created_at: string;
  updated_at: string;
  openingHours: string[];
}

export type UpdateInfracture = CreateInfracture;

export interface GetInfracture {
  id: number;
  name: string;
  type: string;
  capacity: number;
  status: InfractureStatus;
  created_at: string;
  updated_at: string;
}

export enum InfractureStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}
