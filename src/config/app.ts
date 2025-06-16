const apiBaseUrl = 'https://api.francavenda.com.br/v1';

export const app = {
  name: 'Bússola da Gestão',
  description: 'Ferramentas para auxiliar na gestão dos clientes.',
  version: '1.0.0',
  apiUrl: process.env.API_URL || apiBaseUrl,
  clientId: process.env.API_CLIENT_ID || null,
  clientSecret: process.env.API_CLIENT_SECRET || null,
};
