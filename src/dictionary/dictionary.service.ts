import { Injectable, Inject } from '@nestjs/common';
import { Model, FilterQuery } from 'mongoose';
import { Dictionary } from './dictionary.schema';
import { CreateDictionaryInput } from './dto/create-dictionary.input';
import { UpdateDictionaryInput } from './dto/update-dictionary.input';

@Injectable()
export class DictionaryService {
  constructor(
    @Inject('DICTIONARY_MODEL')
    private dictionaryModel: Model<Dictionary>,
  ) {}

  async create(
    createDictionaryInput: CreateDictionaryInput,
  ): Promise<Dictionary> {
    const createdDictionary = await this.dictionaryModel.create(
      createDictionaryInput,
    );
    return createdDictionary;
  }

  async findAll(): Promise<Dictionary[]> {
    return this.dictionaryModel.find().exec();
  }

  async findOne(id: String): Promise<Dictionary> {
    return this.dictionaryModel.findOne({ _id: id }).exec();
  }

  async update(
    id: String,
    updateDictionaryInput: UpdateDictionaryInput,
  ): Promise<Dictionary> {
    return this.dictionaryModel
      .findOneAndUpdate({ _id: id }, updateDictionaryInput, {
        upsert: false,
        new: true,
      })
      .exec();
  }

  async remove(id: String) {
    const deletedCat = await this.dictionaryModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}
