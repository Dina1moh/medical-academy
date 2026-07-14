import courses from "@/courses.json";

export type Course = {
  title: string;
  description: string;
  modules: string[];
  referenceBooks: string[];
  previewVideoLink: string;
  price: string;
  status: string;
  image: string;
};

export const allCourses = courses as Course[];

export function getPrimaryCourse() {
  return allCourses[0];
}
