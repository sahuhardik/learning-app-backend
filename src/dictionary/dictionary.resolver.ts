import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DictionaryService } from './dictionary.service';
import { Dictionary } from './dictionary.schema';
import { CreateDictionaryInput } from './dto/create-dictionary.input';
import { UpdateDictionaryInput } from './dto/update-dictionary.input';

@Resolver(() => Dictionary)
export class DictionaryResolver {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Mutation(() => Dictionary)
  createDictionary(
    @Args('createDictionaryInput') createDictionaryInput: CreateDictionaryInput,
  ) {
    return this.dictionaryService.create(createDictionaryInput);
  }

  @Query(() => [Dictionary], { name: 'dictionaryList' })
  findAll() {
    return this.dictionaryService.findAll();
  }

  @Query(() => Dictionary, { name: 'dictionary' })
  findOne(@Args('id', { type: () => String }) id: String) {
    return this.dictionaryService.findOne(id);
  }

  @Mutation(() => Dictionary)
  updateDictionary(
    @Args('updateDictionaryInput') updateDictionaryInput: UpdateDictionaryInput,
  ) {
    return this.dictionaryService.update(
      updateDictionaryInput.id,
      updateDictionaryInput,
    );
  }

  @Mutation(() => Dictionary)
  removeDictionary(@Args('id', { type: () => String }) id: String) {
    return this.dictionaryService.remove(id);
  }
}
