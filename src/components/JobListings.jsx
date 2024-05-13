import React, { useEffect, useState } from "react";
import JobsList from "./JobsList";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false, findJobSearchInput = "" }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const fetchJobs = async () => {
    const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
    try {
      const result = await fetch(apiUrl);
      const data = await result.json();
      setJobs(data);
    } catch (error) {
      console.log("Error in fetching Jobs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    const findJob = () => {
      let filterJobs = jobs.filter((job) =>
        job.title.includes(findJobSearchInput)
      );
      findJobSearchInput ? setFilteredJobs(filterJobs) : setFilteredJobs(jobs);
    };
    findJob();
  }, [findJobSearchInput]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredJobs.length
              ? filteredJobs.map((job) => <JobsList key={job.id} job={job} />)
              : jobs.map((job) => <JobsList key={job.id} job={job} />)}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;

// import React, { useEffect, useState } from "react";
// import JobsList from "./JobsList";
// import Spinner from "./Spinner";
// import { useLocation } from "react-router-dom";

// const JobListings = ({ isHome = false, findJobSearchInput = "" }) => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filteredJobs, setFilteredJobs] = useState([]);

//   const fetchJobs = async () => {
//     const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
//     try {
//       const result = await fetch(apiUrl);
//       const data = await result.json();
//       setJobs(data);
//       setFilteredJobs(data);
//     } catch (error) {
//       console.log("Error in fetching Jobs", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   useEffect(() => {
//     const filterJobs = () => {
//       let filterJobs = jobs.filter((job) =>
//         job.title.includes(findJobSearchInput)
//       );
//       findJobSearchInput ? setFilteredJobs(filterJobs) : setFilteredJobs(jobs);
//     };
//     filterJobs();
//   }, [findJobSearchInput]);

//   return (
//     <section className="bg-blue-50 px-4 py-10">
//       <div className="container-xl lg:container m-auto">
//         <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
//           {isHome ? "Recent Jobs" : "Browse Jobs"}
//         </h2>
//         {loading ? (
//           <Spinner loading={loading} />
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {filteredJobs.map((job) => (
//               <JobsList key={job.id} job={job} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default JobListings;
