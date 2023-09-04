
import Navbar from './Navbar/Navbar';
// import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/';
import theme from "../Theme/Theme";
import SignUp from './SignUpPage/SignUpPage';
import SignIn from './SignInPage/signInForm';
import NewCreateBill from '../Container/CreateBill';
import ViewBill from '../Container/ViewBills/ViewBill';
import EditBill from '../Container/EditBill/EditBill';
import Homepage from './HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

console.log(theme);

function App() {
  return (

    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/bills/create" element={<NewCreateBill />} />
          {/* <Route path="/bills/1" element={<ViewBill />} /> */}
          <Route path="/bills/1/edit" element={<EditBill />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/viewBills" element={<ViewBill />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

