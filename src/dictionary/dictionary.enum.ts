import { registerEnumType } from '@nestjs/graphql';

export enum DictionaryStatus {
  DRAFT = 'DRAFT',
  LIVE = 'LIVE',
}

registerEnumType(DictionaryStatus, {
  name: 'DictionaryStatus',
  description: 'All Dictionary Status',
});
