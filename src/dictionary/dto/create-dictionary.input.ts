import { InputType, Int, Field } from '@nestjs/graphql';
import { DictionaryStatus } from '../dictionary.enum';

@InputType()
export class CreateDictionaryInput {
  @Field((type) => DictionaryStatus)
  status: DictionaryStatus;

  @Field()
  keyword: string;

  @Field()
  definition: string;

  @Field()
  image: string;

  @Field()
  explanation: string;
}
