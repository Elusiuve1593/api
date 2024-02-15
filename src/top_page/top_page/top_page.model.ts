export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Items,
}

interface HeadhunterInterface {
  count: number;
  juniorSal: number;
  middleSal: number;
  seniorSal: number;
}

interface AdvantagesInterface {
  title: string;
  description: string;
}

export class TopPageModel {
  _id: string;
  firstCategory: TopLevelCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: HeadhunterInterface[];
  advantages: AdvantagesInterface[];
  seoText: string;
  tagsTitle: string;
  tags: string;
}
