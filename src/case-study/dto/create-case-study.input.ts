import { InputType, Field } from '@nestjs/graphql';
import { CaseStudyStatus } from '../case-study.enum';

@InputType()
export class CreateCaseStudyInput {
  @Field((type) => CaseStudyStatus)
  status: CaseStudyStatus;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field()
  link: string;
}
