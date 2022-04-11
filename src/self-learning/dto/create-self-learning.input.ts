import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSelfLearningInput {
  @Field()
  topic: string;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field(() => Int)
  videoId: number;

  @Field()
  explanation: string;

  @Field()
  quizId: string;
}
