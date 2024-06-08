import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import useCourse from "../../hooks/useCourse";
import CourseDetails from "../Home/TrendingCourse/CourseDetails";
import Loading from "../Shared/Loading";
import { useEffect, useState } from "react";

const Course = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [courses, isLoading] = useCourse();
  const [scroll,setScroll] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  },[scroll]);
  if (isLoading) {
    return <Loading />;
  }
  const approvedCourses = courses?.filter(
    (course) => course?.status === "approved"
  );
  const itemsPerPage = 6;
  const totalPages = Math.ceil(approvedCourses?.length / itemsPerPage);

  const handleClickNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    setScroll(true)
  };

  const handleClickPrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    setScroll(true)
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const slicedData = approvedCourses?.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  return (
    <div className="w-full py-10 px-5 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {slicedData?.map((course, i) => (
          <CourseDetails course={course} key={i + 1} />
        ))}
      </div>
      {approvedCourses?.length > 6 && (
        <div className="flex justify-center items-center  gap-5 py-10">
          <button
            className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1DC1B3] to-green-500 flex justify-center items-center text-white"
            onClick={handleClickPrev}
            disabled={currentPage === 1}
          >
            <HiArrowNarrowLeft></HiArrowNarrowLeft>
          </button>
          <button
            className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1DC1B3] to-green-500 flex justify-center items-center text-white"
            onClick={handleClickNext}
            disabled={currentPage === totalPages}
          >
            <HiArrowNarrowRight></HiArrowNarrowRight>
          </button>
        </div>
      )}
    </div>
  );
};

export default Course;
