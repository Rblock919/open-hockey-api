import { Resolver, Query, Args, ID } from '@nestjs/graphql';

import { Assist } from './models/dto/assist.dto';
import { AssistService } from './assist.service';

@Resolver(of => Assist)
export class AssistResolver {
  constructor(private assistService: AssistService) {}

  @Query(returns => [Assist], { name: 'assists' })
  async getAllAssists(): Promise<any[]> {
    return this.assistService.getAllAssists();
  }

  @Query(returns => Assist, { name: 'assist' })
  async getAssistById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<any> {
    return this.assistService.getAssistById(id);
  }
}
