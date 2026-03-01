export interface Greeting {
  id: string;
  message: string;        // 10-100字符，过滤后的内容
  senderName?: string;    // 可选，最大20字符
  timestamp: Date | string; // Date对象或ISO字符串（JSON序列化后）
  ipHash: string;         // IP哈希，仅用于速率限制
}

export interface GreetingForm {
  message: string;
  senderName?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface RateLimit {
  count: number;
  resetTime: number;
}
