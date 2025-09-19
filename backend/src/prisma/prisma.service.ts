import { Injectable, OnModuleInit } from '@nestjs/common';
// FIX: Using named import for PrismaClient to resolve module issues.
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}