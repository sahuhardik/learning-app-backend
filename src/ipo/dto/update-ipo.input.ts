import { CreateIpoInput } from './create-ipo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIpoInput extends PartialType(CreateIpoInput) {
  @Field()
  id: String;
}
