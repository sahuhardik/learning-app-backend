import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SelfLearningService } from './self-learning.service';
import { SelfLearning } from './self-learning.schema';
import { CreateSelfLearningInput } from './dto/create-self-learning.input';
import { UpdateSelfLearningInput } from './dto/update-self-learning.input';

@Resolver(() => SelfLearning)
export class SelfLearningResolver {
  constructor(private readonly selfLearningService: SelfLearningService) {}

  @Mutation(() => SelfLearning)
  createSelfLearning(
    @Args('createSelfLearningInput')
    createSelfLearningInput: CreateSelfLearningInput,
  ) {
    return this.selfLearningService.create(createSelfLearningInput);
  }

  @Query(() => [SelfLearning], { name: 'selfLearningList' })
  findAll() {
    return this.selfLearningService.findAll();
  }

  @Query(() => SelfLearning, { name: 'selfLearning' })
  findOne(@Args('id', { type: () => String }) id: String) {
    return this.selfLearningService.findOne(id);
  }

  @Mutation(() => SelfLearning)
  updateSelfLearning(
    @Args('updateSelfLearningInput')
    updateSelfLearningInput: UpdateSelfLearningInput,
  ) {
    return this.selfLearningService.update(
      updateSelfLearningInput.id,
      updateSelfLearningInput,
    );
  }

  @Mutation(() => SelfLearning)
  removeSelfLearning(@Args('id', { type: () => String }) id: String) {
    return this.selfLearningService.remove(id);
  }
}
