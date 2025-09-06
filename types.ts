export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type ApiPhase = 'Phase 1' | 'Phase 2' | 'Phase 3';
export type FilterPhase = ApiPhase | 'All';

export interface ApiEndpoint {
  method: HttpMethod;
  path: string;
  description: string;
}

export interface ApiCategory {
  title: string;
  icon: React.ReactNode;
  phase: ApiPhase;
  endpoints: ApiEndpoint[];
}
