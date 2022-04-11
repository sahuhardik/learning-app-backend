import { Injectable, Inject } from '@nestjs/common';
import { Model, FilterQuery } from 'mongoose';
import { CaseStudy } from './case-study.schema';
import { CreateCaseStudyInput } from './dto/create-case-study.input';
import { UpdateCaseStudyInput } from './dto/update-case-study.input';

@Injectable()
export class CaseStudyService {
  constructor(
    @Inject('CASESTUDY_MODEL')
    private caseStudyModel: Model<CaseStudy>,
  ) {}

  async create(createCaseStudyInput: CreateCaseStudyInput): Promise<CaseStudy> {
    const createdCaseStudy = await this.caseStudyModel.create(
      createCaseStudyInput,
    );
    return createdCaseStudy;
  }

  async findAll(): Promise<CaseStudy[]> {
    return this.caseStudyModel.find().exec();
  }

  async findOne(id: String): Promise<CaseStudy> {
    return this.caseStudyModel.findOne({ _id: id }).exec();
  }

  async update(
    id: String,
    updateCaseStudyInput: UpdateCaseStudyInput,
  ): Promise<CaseStudy> {
    return this.caseStudyModel
      .findOneAndUpdate({ _id: id }, updateCaseStudyInput, {
        upsert: false,
        new: true,
      })
      .exec();
  }

  async remove(id: String) {
    const deletedCat = await this.caseStudyModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}
