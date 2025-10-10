import React, { useState, useEffect } from "react";
import styles from "../PagesStyles/MyProfile.module.css";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import axios from "axios";

// Temporary JSON data (simulate API response)
const tempUserData = {
  firstName: "Hardik",
  lastName: "Sharma",
  gender: "Male",
  email: "hardiksharma111@gmail.com",
  mobile: "+91 9111111111",
  // faqs: [
  //   {
  //     question: "What happens when I update my email address or mobile number?",
  //     answer: "Your login ID and account details will update accordingly. All future communication will go to your new contact info.",
  //   },
  //   {
  //     question: "When will my account be updated?",
  //     answer: "As soon as you verify via the confirmation code sent to your new email or number.",
  //   },
  //   {
  //     question: "Does this affect my supplier account?",
  //     answer: "Any change reflects across your linked Emojja Supplier/Buyer account instantly.",
  //   },
  // ],
};

const MyProfile = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [userData, setUserData] = useState(null);

  // Simulate API call
  useEffect(() => {
    // Replace this with actual API call using fetch/axios
    setTimeout(() => {
      setUserData(tempUserData);
    }, 500);
  }, []);

  const [firstName,setFirstName] = useState(tempUserData.firstName)
  const[lastName,setLastName] = useState(tempUserData.lastName)
  const [gender,setGender] = useState(tempUserData.gender)
  const [email,setEmail] = useState(tempUserData.email)
  const [mobile,setMobile] = useState(tempUserData.mobile)

  const [personalInfoEdit,setPersonalInfoEdit] = useState(false)
  const [onEmailEdit,setOnEmailEdit] = useState(false)
  const [onNumberEdit,setOnNumberEdit] = useState(false)


  if (!userData) return <p className={styles.loading}>Loading...</p>;

  
  const my = async()=>{
      try {
          const res = await axios.get("https://unhortative-mayola-unsavagely.ngrok-free.dev/api/auth/me")
           console.log("User data",res);
      } catch (error) {
          console.error("User data failed",error)
      }
      
  }
  return (
    <div className={styles.profileWrapper}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.userHeader}>
          <FaUserCircle className={styles.avatar} />
          <div>
            <p className={styles.greet}>Hello,</p>
            <h3 className={styles.username}>{`${userData.firstName} ${userData.lastName}`}</h3>
          </div>
        </div>

        <nav className={styles.nav}>
          <div className={styles.navGroup}>
            <h4>MY ORDERS</h4>
            <button>My Orders</button>
          </div>

          <div className={styles.navGroup}>
            <h4>ACCOUNT SETTINGS</h4>
            <button onClick={() => setActiveSection("profile")}>Profile Information</button>
            <button>Manage Addresses</button>
            <button>PAN Card Information</button>
          </div>

          <div className={styles.navGroup}>
            <h4>PAYMENTS</h4>
            <button>Gift Cards</button>
            <button>Saved UPI</button>
            <button>Saved Cards</button>
          </div>

          <div className={styles.navGroup}>
            <h4>MY STUFF</h4>
            <button>My Coupons</button>
            <button>My Reviews & Ratings</button>
            <button>Notifications</button>
            <button>Wishlist</button>
          </div>

          <button className={styles.logoutBtn}>
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Profile Content */}
      <main className={styles.mainContent}>
        {activeSection === "profile" && (
          <div className={styles.profileSection}>

            <h3 onClick={(e)=>{e.preventDefault();my()}}>Get data</h3>
            <h2>
              Personal Information  {personalInfoEdit ? (
                <span onClick={()=>setPersonalInfoEdit((prev)=>!prev)}  className={styles.edit}>cancel</span>
              ):(
                <span onClick={()=>setPersonalInfoEdit((prev)=>!prev)} className={styles.edit}>Edit</span>
              ) }
            </h2>

            <div className={styles.formGroup}>
              <div className={styles.inputRow}>
                <input type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} readOnly={!personalInfoEdit} />
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}  readOnly={!personalInfoEdit} />
                {personalInfoEdit ?
                (<span className={styles.saveEdit}>Save</span> )
                : ""}
              </div>

              <div className={styles.genderRow}>
                <p>Your Gender</p>
                 <br />
                  <br />
                <label>
                  <input type="radio" name="gender" checked={userData.gender === "Male"} readOnly={!setPersonalInfoEdit} /> Male
                </label>
                <label>
                  <input type="radio" name="gender" checked={userData.gender === "Female"} readOnly={!setPersonalInfoEdit} /> Female
                </label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <h3>Email Address {onEmailEdit ? (
                <span onClick={()=>setOnEmailEdit((prev)=>!prev)} className={styles.edit}>Cancel</span>

              ) :(
                <span onClick={()=>setOnEmailEdit((prev)=>!prev)} className={styles.edit}>Edit</span> 
              )}</h3>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} readOnly={!onEmailEdit} />
              {onEmailEdit ? (
                <span className={styles.saveEdit}>Save</span> 

              ):""}
            </div>

            <div className={styles.formGroup}>
              <h3>Mobile Number {onNumberEdit ? (
                <span onClick={()=>setOnNumberEdit((prev)=>!prev)} className={onNumberEdit? styles.edit : styles.edit }>Cancel</span>

              ) :(
                <span onClick={()=>setOnNumberEdit((prev)=>!prev)} className={styles.edit}>Edit</span> 
              )} </h3>
              <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} readOnly={!onNumberEdit} />
              {onNumberEdit ? (
                <span className={styles.saveEdit}>Save</span> 

              ):""}
            </div>

            {/* <div className={styles.faqSection}>
              <h3>FAQs</h3>
              {userData.faqs.map((faq, index) => (
                <p key={index}>
                  <strong>{faq.question}</strong>
                  <br />
                  {faq.answer}
                </p>
              ))}
            </div> */}

            <div className={styles.accountActions}>
              <button className={styles.deactivate}>Deactivate Account</button>
              <button className={styles.delete}>Delete Account</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MyProfile;
