import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideDrawer from "./components/SideDrawer";
import Courses from "./pages/sidedrawer-pages/Courses";
import MaterialPages from "./pages/header-pages/MaterialPages";
import Anouncements from "./pages/sidedrawer-pages/Anouncements";
import Notifications from "./pages/sidedrawer-pages/Notifications";
import Schedule from "./pages/sidedrawer-pages/Schedule";
import Details from "./pages/header-pages/Details";
import StudentsPages from "./pages/header-pages/StudentsPages";
import StudentsDetails from "./pages/header-pages/StudentsDetails";
import RatingPages from "./pages/header-pages/RatingPages";
import Submitted from "./pages/second-header-page/Submitted";
import Waiting from "./pages/second-header-page/Waiting";
import Late from "./pages/second-header-page/Late";
const DUMMY_MATERIALS = [
  {
    title: "Material name 1",
    id: 1,
  },
  {
    title: "Material name 2",
    id: 2,
  },
];

const DUMMY_STUDENTS_INFO = [
  {
    name: "Kurmanzhan",
    id: 3,
  },
  {
    name: "Naz-Erke",
    id: 4,
  },
];
function App() {
  return (
    <div className="App">
      <SideDrawer />

      <Routes>
        <Route path="/courses" element={<Courses />}>
          <Route
            path="materials"
            element={<MaterialPages materials={DUMMY_MATERIALS} />}
          />

          <Route
            path="materials/:id/details/"
            element={<Details materials={DUMMY_MATERIALS} />}
          >
            <Route path="submitted" element={<Submitted />} />
            <Route path="waiting" element={<Waiting />} />
            <Route path="late" element={<Late />} />
          </Route>
          <Route
            path="students"
            element={<StudentsPages studentsInfo={DUMMY_STUDENTS_INFO} />}
          />
          <Route
            path="students/:id/details"
            element={<StudentsDetails studentsInfo={DUMMY_STUDENTS_INFO} />}
          />

          <Route path="ratings" element={<RatingPages />} />
        </Route>

        
        <Route path="/anouncements" element={<Anouncements />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </div>
  );
}
export default App;
