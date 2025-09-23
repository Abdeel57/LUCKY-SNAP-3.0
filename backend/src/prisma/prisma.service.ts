import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // FIX: Explicitly call super() to ensure the PrismaClient constructor is run.
    // This is essential for the class to be initialized correctly as a PrismaClient instance.
    super();
  }

  async onModuleInit() {
    // FIX: Connect to the database when the module is initialized.
    // The error "Property '$connect' does not exist" indicates a fundamental type issue.
    // A correctly structured class extending PrismaClient will always have this method.
    await this.$connect();
  }
}
