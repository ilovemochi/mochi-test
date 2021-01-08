export type Method = 'POST' | 'GET' | 'PUT' | 'HEAD' | 'DELETE' | 'TRACE' | 'PATCH';

export interface FetchItData {
  method: Method;
  url: string;
  data: unknown;
  extraHeaders: Record<string, string | number>;
  endpoint: string;
}

export type FetchIt = (data: FetchItData) => Promise<Response>;
