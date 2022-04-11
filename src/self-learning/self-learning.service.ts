import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { SelfLearning } from './self-learning.schema';
import { CreateSelfLearningInput } from './dto/create-self-learning.input';
import { UpdateSelfLearningInput } from './dto/update-self-learning.input';

@Injectable()
export class SelfLearningService {
  constructor(
    @Inject('SELFLEARNING_MODEL')
    private selfLearningModel: Model<SelfLearning>,
  ) {}

  async create(
    createSelfLearningInput: CreateSelfLearningInput,
  ): Promise<SelfLearning> {
    const createdSelfLearning = await this.selfLearningModel.create(
      createSelfLearningInput,
    );
    return createdSelfLearning;
  }

  async findAll(): Promise<SelfLearning[]> {
    return this.selfLearningModel.find().exec();
  }

  async findOne(id: String): Promise<SelfLearning> {
    return this.selfLearningModel.findOne({ _id: id }).exec();
  }

  async update(
    id: String,
    updateSelfLearningInput: UpdateSelfLearningInput,
  ): Promise<SelfLearning> {
    return this.selfLearningModel
      .findOneAndUpdate({ _id: id }, updateSelfLearningInput, {
        upsert: false,
        new: true,
      })
      .exec();
  }

  async remove(id: String) {
    const deletedCat = await this.selfLearningModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}
