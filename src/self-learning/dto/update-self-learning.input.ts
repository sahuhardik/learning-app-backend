import { CreateSelfLearningInput } from './create-self-learning.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSelfLearningInput extends PartialType(
  CreateSelfLearningInput,
) {
  @Field(() => String)
  id: String;
}
