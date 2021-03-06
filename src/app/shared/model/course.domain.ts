import { CourseType } from './course.enum';


export interface Course {
    courseId?: string;
    courseName?: string;
    courseType: CourseType;
    price?: number;
}

export class OnlineCourse implements Course {
    courseType = CourseType.ONLINE;
    courseId?: string;
    courseName?: string;
    price?: number;
    url: string;
}

export interface FaceToFaceCourse extends Course {
    address: string;
}
