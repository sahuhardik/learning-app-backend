import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CaseStudyService } from './case-study.service';
import { CaseStudy } from './case-study.schema';
import { CreateCaseStudyInput } from './dto/create-case-study.input';
import { UpdateCaseStudyInput } from './dto/update-case-study.input';

@Resolver(() => CaseStudy)
export class CaseStudyResolver {
  constructor(private readonly caseStudyService: CaseStudyService) {}

  @Mutation(() => CaseStudy)
  createCaseStudy(
    @Args('createCaseStudyInput') createCaseStudyInput: CreateCaseStudyInput,
  ) {
    return this.caseStudyService.create(createCaseStudyInput);
  }

  @Query(() => [CaseStudy], { name: 'caseStudyList' })
  findAll() {
    return this.caseStudyService.findAll();
  }

  @Query(() => CaseStudy, { name: 'caseStudy' })
  findOne(@Args('id', { type: () => String }) id: String) {
    return this.caseStudyService.findOne(id);
  }

  @Mutation(() => CaseStudy)
  updateCaseStudy(
    @Args('updateCaseStudyInput') updateCaseStudyInput: UpdateCaseStudyInput,
  ) {
    return this.caseStudyService.update(
      updateCaseStudyInput.id,
      updateCaseStudyInput,
    );
  }

  @Mutation(() => CaseStudy)
  removeCaseStudy(@Args('id', { type: () => String }) id: String) {
    return this.caseStudyService.remove(id);
  }
}
