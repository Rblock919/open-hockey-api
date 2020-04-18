import { Injectable } from '@nestjs/common';

@Injectable()
export class RosterService {
  async getAllRosters(): Promise<any[]> {
    return null;
    // return this.RosterRepository.find();
  }

  async getRosterById(id: string): Promise<any> {
    return null;
    // return this.RosterRepository.findOne(id);
  }
}
