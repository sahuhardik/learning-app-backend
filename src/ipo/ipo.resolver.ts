import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IpoService } from './ipo.service';
import { Ipo } from './ipo.schema';
import { CreateIpoInput } from './dto/create-ipo.input';
import { UpdateIpoInput } from './dto/update-ipo.input';

@Resolver(() => Ipo)
export class IpoResolver {
  constructor(private readonly IpoService: IpoService) {}

  @Mutation(() => Ipo)
  createIpo(@Args('createIpoInput') createIpoInput: CreateIpoInput) {
    return this.IpoService.create(createIpoInput);
  }

  @Query(() => [Ipo], { name: 'ipoList' })
  findAll() {
    return this.IpoService.findAll();
  }

  @Query(() => Ipo, { name: 'ipo' })
  findOne(@Args('id', { type: () => String }) id: String) {
    return this.IpoService.findOne(id);
  }

  @Mutation(() => Ipo)
  updateIpo(@Args('updateIpoInput') updateIpoInput: UpdateIpoInput) {
    return this.IpoService.update(updateIpoInput.id, updateIpoInput);
  }

  @Mutation(() => Ipo)
  removeIpo(@Args('id', { type: () => String }) id: String) {
    return this.IpoService.remove(id);
  }
}
