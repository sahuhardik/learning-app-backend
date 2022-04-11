import { Injectable, Inject } from '@nestjs/common';
import { Model, FilterQuery } from 'mongoose';
import { Podcast } from './podcast.schema';
import { CreatePodcastInput } from './dto/create-podcast.input';
import { UpdatePodcastInput } from './dto/update-podcast.input';

@Injectable()
export class PodcastService {
  constructor(
    @Inject('PODCAST_MODEL')
    private podcastModel: Model<Podcast>,
  ) {}

  async create(createPodcastInput: CreatePodcastInput): Promise<Podcast> {
    const createdPodcast = await this.podcastModel.create(createPodcastInput);
    return createdPodcast;
  }

  async findAll(): Promise<Podcast[]> {
    return this.podcastModel.find().exec();
  }

  async findOne(id: String): Promise<Podcast> {
    return this.podcastModel.findOne({ _id: id }).exec();
  }

  async update(
    id: String,
    updatePodcastInput: UpdatePodcastInput,
  ): Promise<Podcast> {
    return this.podcastModel
      .findOneAndUpdate({ _id: id }, updatePodcastInput, {
        upsert: false,
        new: true,
      })
      .exec();
  }

  async remove(id: String) {
    const deletedCat = await this.podcastModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}
