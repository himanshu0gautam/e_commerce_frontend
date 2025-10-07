import React, { useState, useEffect } from "react";
import styles from "../PagesStyles/AdminUsers.module.css";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import axios from "axios";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const res = await fetch("https://unhortative-mayola-unsavagely.ngrok-free.dev/api/auth/allusers", {
  //       method: "GET",
  //       withcredentials: "include",
  //       headers: { "Content-Type": "application/json" },
  //       });
        
  //       // if (!response.ok) throw new Error("Network response was not ok");



  //       console.log("res",res);
        
  //       const data = await res.json();
  //       console.log("Fetched Data:", data);  // 👈 Check this in console
  //       // console.log("Users Array:", data.users); 

  //       // setUsers(data.users || []); 
  //     } catch (err) {
  //       console.error("Error fetching users:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUsers();
  // }, []); 

//   useEffect(() => {
//   const fetchUsers = async () => {
//     try {
//       const res = await fetch(
//         "https://unhortative-mayola-unsavagely.ngrok-free.dev/api/auth/allusers",
//         {
//           method: "GET",
//           // credentials: "include", // ✅ must be include, NOT withcredentials
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // 🧠 Check what exactly you’re getting
//       const text = await res.text();
//       console.log("Raw Response:", text);

//       // Try parsing JSON only if it’s valid
//       try {
//         const data = JSON.parse(text);
//         console.log("Parsed JSON:", data);
//         // setUsers(data.users || []);
//       } catch {
//         console.error("Response is not JSON — possibly an HTML redirect.");
//       }
//     } catch (err) {
//       console.error("Error fetching users:", err);
//     }
//   };

//   fetchUsers();
// }, []);


 useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "https://unhortative-mayola-unsavagely.ngrok-free.dev/api/auth/allusers",
        {
          withCredentials: true, // ✅ must match backend
        }
      );

      console.log("Axios Response:", res);
      setUsers(res.data.users || []);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, []);

  console.log(users.users);
  //show loading message while fetching
  if (loading) return <p className={styles.loading}>Loading users...</p>;

  //  filter only if users exist
 const filteredUsers = users.filter(
  (u) =>
    u.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.phone?.includes(searchTerm)
);
  
  
  return (
    <div className={styles.adminWrapper}>
      <h2>Registered Users</h2>
      <br />
      <div className={styles.searchBar}>
        <FaSearch />
        <input
          type="text"
          placeholder="Search by name, email, or mobile..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {/* <th>Gender</th> */}
            <th>Email</th>
            <th>Mobile</th>
            {/* <th>Role</th> */}
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              {/* <td>{user.gender}</td> */}
              <td>{user.email}</td>
              <td>{user.phone}</td>
              {/* <td>{user.role}</td> */}
              <td>
                <span className={`${styles.status} ${user.is_active === "Active" ? styles.active : styles.inactive}`}>
                  {user.is_active}
                </span>
              </td>
              <td className={styles.actions}>
                <button title="Edit"><FaEdit /></button>
                <button title="Delete"><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
