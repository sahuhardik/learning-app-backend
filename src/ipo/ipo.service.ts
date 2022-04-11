import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Ipo } from './ipo.schema';
import { CreateIpoInput } from './dto/create-ipo.input';
import { UpdateIpoInput } from './dto/update-ipo.input';

@Injectable()
export class IpoService {
  constructor(
    @Inject('IPO_MODEL')
    private IpoModel: Model<Ipo>,
  ) {}

  async create(createIpoInput: CreateIpoInput): Promise<Ipo> {
    const createdIpo = await this.IpoModel.create(createIpoInput);
    return createdIpo;
  }

  async findAll(): Promise<Ipo[]> {
    return this.IpoModel.find().exec();
  }

  async findOne(id: String): Promise<Ipo> {
    return this.IpoModel.findOne({ _id: id }).exec();
  }

  async update(id: String, updateIpoInput: UpdateIpoInput): Promise<Ipo> {
    return this.IpoModel.findOneAndUpdate({ _id: id }, updateIpoInput, {
      upsert: false,
      new: true,
    }).exec();
  }

  async remove(id: String) {
    const deletedCat = await this.IpoModel.findByIdAndRemove({
      _id: id,
    }).exec();
    return deletedCat;
  }
}
