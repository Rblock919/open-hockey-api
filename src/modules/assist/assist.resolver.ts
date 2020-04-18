import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';

import { Assist } from './models/dto/assist.dto';
import { AssistService } from './assist.service';
import { AssistEntity } from './models/entities/assist.entity';
import { CreateAssistInput } from './models/inputs/assist.input';

@Resolver(of => Assist)
export class AssistResolver {
  constructor(private assistService: AssistService) {}

  @Query(returns => [Assist], { name: 'assists' })
  async getAllAssists(): Promise<AssistEntity[]> {
    return this.assistService.getAllAssists();
  }

  @Query(returns => Assist, { name: 'assist' })
  async getAssistById(
    @Args('id', { type: () => ID }) id: string
  ): Promise<AssistEntity> {
    return this.assistService.getAssistById(id);
  }

  @Mutation(returns => Assist, { name: 'createAssist' })
  async submitAssist(
    @Args('data') data: CreateAssistInput
  ): Promise<AssistEntity> {
    return this.assistService.createAssist(data);
  }
}
