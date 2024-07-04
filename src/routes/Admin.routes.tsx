import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";


const adminPaths2 = [
    {
        name: 'dashboard',
        path: '/admin/dashboard',
        element: <AdminDashboard></AdminDashboard>
    },
]

export const AdminPaths = [
    {
        path: 'dashboard',
        element: <AdminDashboard></AdminDashboard>
    },
    {
        path: 'create-student',
        element: <CreateStudent></CreateStudent>
    },
    {
        path: 'create-admin',
        element: <CreateAdmin></CreateAdmin>
    },
    {
        path: 'create-faculty',
        element: <CreateFaculty></CreateFaculty>
    }
]