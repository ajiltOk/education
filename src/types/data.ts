export interface IFetchData {
  data: ICards[],
  teachers: ITeachers[]
}

interface ICards {
  subjectName: string,
  course: number,
  semestr: number,
  studentsNumber: number,
  groupName: string,
  lecturesHours: number,
  laboratoryHours: number,
  practicHours: number,
  seminarHours: number,
  exam:false,
  offset:true,
  additionalInfo: string,
  countPodgroups: number,
  uniqueId: string,
  podgroups?:[
    {countStudents: number,
      laboratoryTeacher: string,
      lectureTeacher: string,
      practiceTeacher: string,
      seminarTeacher: string,
      examTeacher: string,
      offsetTeacher: string
    },
    {countStudents: number,
      laboratoryTeacher: string,
      lectureTeacher: string,
      practiceTeacher: string,
      seminarTeacher: string,
      examTeacher: string,
      offsetTeacher: string
    }
  ]
}

interface ITeachers {
  id: number,
  name: string
}