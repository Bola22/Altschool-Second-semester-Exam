import React from 'react'

function Pagination({ data, totalUsers, usersPerPage, paginated, }) {
    const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {pageNumber.map((number) => (

<button
onClick={() => paginated(number)}
key={number}
style={{
  display: "flex",
  padding: "10px 15px ",
  borderRadius: "5px",
  border: "none",
  backgroundColor:"hsl(0, 0%, 22%)",
  color: "#ffff"
}}
>
{number}
</button>

      ))}
    </div>
  )
}

export default Pagination
