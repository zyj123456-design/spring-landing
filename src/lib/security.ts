import { createHash } from 'crypto';

// 安全过滤和验证
export function sanitizeMessage(message: string): string {
  return message
    .replace(/[<>]/g, '') // 移除HTML标签
    .trim()
    .slice(0, 100); // 限制长度
}

export function isValidMessage(message: string): boolean {
  const trimmed = message.trim();
  return trimmed.length >= 10 && trimmed.length <= 100;
}

export function isValidName(name: string): boolean {
  const trimmed = name.trim();
  return trimmed.length <= 20 && trimmed.length > 0;
}

// IP哈希（仅用于速率限制）
export function hashIP(ip: string): string {
  return createHash('sha256').update(ip).digest('hex');
}

// 内容过滤（简单实现）
const forbiddenWords = [
  '测试', 'test', 'http', 'www', '.com', '脚本', '代码'
];

export function containsForbiddenWords(message: string): boolean {
  const lowerMessage = message.toLowerCase();
  return forbiddenWords.some(word => lowerMessage.includes(word));
}

// 速率限制
const rateLimits = {
  perMinute: 1,
  perHour: 5,
  perDay: 10
};

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function isRateLimited(ipHash: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitStore.get(ipHash);

  if (!userLimit || now > userLimit.resetTime) {
    // 重置限制
    rateLimitStore.set(ipHash, {
      count: 1,
      resetTime: now + 60000 // 1分钟
    });
    return false;
  }

  if (userLimit.count >= rateLimits.perMinute) {
    return true;
  }

  userLimit.count++;
  return false;
}
