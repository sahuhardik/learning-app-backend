import { CreateCaseStudyInput } from './create-case-study.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCaseStudyInput extends PartialType(CreateCaseStudyInput) {
  @Field(() => String)
  id: String;
}
