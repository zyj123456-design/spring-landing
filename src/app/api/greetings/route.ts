import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { getAllGreetings, addGreeting } from '@/lib/storage';
import { sanitizeMessage, isValidMessage, isValidName, containsForbiddenWords, isRateLimited, hashIP } from '@/lib/security';
import { Greeting } from '@/types/greeting';

// GET /api/greetings - 获取所有拜年信息
export async function GET() {
  try {
    const greetings = getAllGreetings();
    return NextResponse.json({
      success: true,
      greetings
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: '获取拜年信息失败' },
      { status: 500 }
    );
  }
}

// POST /api/greetings - 发送新拜年信息
export async function POST(request: NextRequest) {
  try {
    const { message, senderName } = await request.json();

    // 验证必填字段
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { success: false, error: '拜年信息不能为空' },
        { status: 400 }
      );
    }

    // 验证消息长度
    if (!isValidMessage(message)) {
      return NextResponse.json(
        { success: false, error: '拜年信息长度必须在10-100字符之间' },
        { status: 400 }
      );
    }

    // 验证姓名长度（如果提供）
    if (senderName && !isValidName(senderName)) {
      return NextResponse.json(
        { success: false, error: '发送者姓名不能超过20字符' },
        { status: 400 }
      );
    }

    // 内容过滤
    if (containsForbiddenWords(message) || (senderName && containsForbiddenWords(senderName))) {
      return NextResponse.json(
        { success: false, error: '包含不当内容，请重新编辑' },
        { status: 400 }
      );
    }

    // 获取客户端IP（用于速率限制）
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = (forwardedFor?.split(',')[0] || realIp || '127.0.0.1').trim();
    const ipHash = hashIP(clientIp);

    // 速率限制检查
    if (isRateLimited(ipHash)) {
      return NextResponse.json(
        { success: false, error: '发送过于频繁，请稍后再试' },
        { status: 429 }
      );
    }

    // 创建拜年信息
    const greeting: Greeting = {
      id: nanoid(),
      message: sanitizeMessage(message),
      senderName: senderName ? sanitizeMessage(senderName) : undefined,
      timestamp: new Date(),
      ipHash
    };

    // 保存到存储
    addGreeting(greeting);

    return NextResponse.json({
      success: true,
      greeting
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: '发送拜年信息失败' },
      { status: 500 }
    );
  }
}
