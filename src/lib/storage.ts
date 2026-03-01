import { Greeting } from '@/types/greeting';

// 内存存储（单次使用，无需持久化）
let greetings: Greeting[] = [];

// 初始化一些示例拜年信息
const sampleGreetings: Greeting[] = [
  {
    id: 'sample-1',
    message: '祝大家新春快乐，龙年大吉！技术创新永不停步！',
    senderName: '小明',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2小时前
    ipHash: 'sample'
  },
  {
    id: 'sample-2',
    message: '新年新气象，AI技术引领未来！恭喜发财！',
    senderName: '技术爱好者',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30分钟前
    ipHash: 'sample'
  },
  {
    id: 'sample-3',
    message: '龙年新春，代码无BUG，项目顺利上线！',
    senderName: '程序员',
    timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15分钟前
    ipHash: 'sample'
  },
  {
    id: 'sample-4',
    message: '恭喜发财！AI创新无止境，新年新突破！',
    senderName: '创新者',
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5分钟前
    ipHash: 'sample'
  }
];

// 初始化示例数据
if (greetings.length === 0) {
  greetings.push(...sampleGreetings);
}

export function getAllGreetings(): Greeting[] {
  // 返回最新的50条，按时间倒序
  return greetings
    .sort((a, b) => {
      const timeA = a.timestamp instanceof Date ? a.timestamp.getTime() : new Date(a.timestamp).getTime();
      const timeB = b.timestamp instanceof Date ? b.timestamp.getTime() : new Date(b.timestamp).getTime();
      return timeB - timeA;
    })
    .slice(0, 50);
}

export function addGreeting(greeting: Greeting): void {
  greetings.push(greeting);

  // 限制总数，删除最旧的
  if (greetings.length > 1000) {
    const oldestIndex = greetings.reduce((oldest, current, index) => {
      const currentTime = current.timestamp instanceof Date ? current.timestamp.getTime() : new Date(current.timestamp).getTime();
      const oldestTime = greetings[oldest].timestamp instanceof Date ? greetings[oldest].timestamp.getTime() : new Date(greetings[oldest].timestamp).getTime();
      return currentTime < oldestTime ? index : oldest;
    }, 0);
    greetings.splice(oldestIndex, 1);
  }
}

export function cleanupOldGreetings(): void {
  const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  greetings = greetings.filter(g => {
    const timestamp = g.timestamp instanceof Date ? g.timestamp.getTime() : new Date(g.timestamp).getTime();
    return timestamp > sevenDaysAgo;
  });
}

// 定期清理（每小时）
setInterval(cleanupOldGreetings, 60 * 60 * 1000);
