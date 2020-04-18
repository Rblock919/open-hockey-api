import { Injectable } from '@nestjs/common';

@Injectable()
export class AssistService {
  async getAllAssists(): Promise<any[]> {
    return null;
    // return this.AssistRepository.find();
  }

  async getAssistById(id: string): Promise<any> {
    return null;
    // return this.AssistRepository.findOne(id);
  }
}
