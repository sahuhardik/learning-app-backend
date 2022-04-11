import { CreateDictionaryInput } from './create-dictionary.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDictionaryInput extends PartialType(CreateDictionaryInput) {
  @Field(() => String)
  id: String;
}
