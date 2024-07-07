import StudentDashboard from "../pages/student/StudentDashboard";
import StudentOfferedCourse from "../pages/student/StudentOfferedCourse";

export const studentPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <StudentDashboard></StudentDashboard>
    },
    {
        name: 'Offered Course',
        path: 'offered-course',
        element: <StudentOfferedCourse></StudentOfferedCourse>
    },
]