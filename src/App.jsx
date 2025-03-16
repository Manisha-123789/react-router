import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import RootLayout from "./Layout/RootLayout"
import ContactLayout from "./Layout/ContactLayout"
import ContactForm from "./Navbar/ContactForm"
import ContactInfo from "./Navbar/ContactInfo"
import NotFount from "./Layout/NotFount"
import JobsLayout from "./Layout/JobsLayout"
import Jobs, { jobsData } from "./pages/Jobs"
import JobDetails, { jobDetailsThroughId } from "./pages/JobDetails"
import ErrorLayout from "./Layout/ErrorLayout"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="header" element={<Header />} />
      <Route path="footer" element={<Footer />} />
      <Route path="contact" element={<ContactLayout />} >
        <Route path="form" element={<ContactForm />} />
        <Route path="info" element={<ContactInfo />} />
      </Route>
      <Route path="jobs" element={<JobsLayout/>} errorElement={<ErrorLayout/>} > 
          <Route index element={<Jobs/>} loader={jobsData}  />
          <Route path=":id" element={<JobDetails/>} loader={jobDetailsThroughId}/>
      </Route>
      <Route path="*" element={<NotFount />} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
      </Routes> */}
    </>
  )
}

export default App
