import { registerEnumType } from '@nestjs/graphql';

export enum CaseStudyStatus {
  DRAFT = 'DRAFT',
  LIVE = 'LIVE',
}

registerEnumType(CaseStudyStatus, {
  name: 'CaseStudyStatus',
  description: 'All Case Study Status',
});
