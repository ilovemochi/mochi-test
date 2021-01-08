import { ClientAPIResponse, MessageResponse } from '@ilovemochi/types';

export type TGetLanguage = (lang: string) => Promise<ClientAPIResponse<MessageResponse>>;
