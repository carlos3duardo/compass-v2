import crypto from 'crypto';
import Redis from 'ioredis';

// Configurando a conexão com Redis
const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

// Gera um identificador seguro
export const generateTokenId = () => crypto.randomBytes(32).toString('hex');

// Salva o token no Redis com tempo de expiração
export const saveToken = async (
  tokenId: string,
  token: string,
  expiresIn: number,
) => {
  await redis.set(tokenId, token, 'EX', expiresIn); // Expiração automática
};

// Recupera o token do Redis
export const getToken = async (tokenId: string): Promise<string | null> => {
  return await redis.get(tokenId);
};

// Remove o token do Redis
export const deleteToken = async (tokenId: string) => {
  await redis.del(tokenId);
};

export default redis;
