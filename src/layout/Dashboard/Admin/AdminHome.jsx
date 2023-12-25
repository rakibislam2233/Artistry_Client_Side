import useInstructors from "../../../hooks/useInstructors"
import useUsers from "../../../hooks/useUsers"

const AdminHome = () => {
  const [instructors] = useInstructors()
  const [users] = useUsers()
  return (
    <div className="w-full h-full p-10">
      <h3 className="text-3xl font-semibold">Admin Home</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5 text-center">
        <div className="w-full p-10 rounded border border-gray-700 space-y-2">
          <h3 className="text-3xl font-semibold">{users?.length}</h3>
          <h1 className="text-2xl">Total Student</h1>
        </div>
        <div className="w-full p-10 rounded border border-gray-700 space-y-2">
          <h3 className="text-3xl font-semibold">{instructors?.length}</h3>
          <h1 className="text-2xl">Total Instructors</h1>
        </div>
        <div className="w-full p-10 rounded border border-gray-700 space-y-2">
        <h3 className="text-3xl font-semibold">{instructors?.length}</h3>
          <h1 className="text-2xl">Enrolled Course</h1>
        </div>
      </div>
    </div>
  )
}

export default AdminHome
