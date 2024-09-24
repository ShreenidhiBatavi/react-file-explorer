import React, { useState } from "react";

const FileExplorer = ({ data, left = 0 }) => {
  const [open, setOpen] = useState([]);
  const handleClick = (id) => {
    setOpen(open.includes(id) ? open.filter((i) => i !== id) : [...open, id]);
  };
  return (
    <div style={{ marginLeft: left }}>
      {data.map((el) =>
        !el.children ? (
          <div
            style={{
              width: "150px",
              padding: "7px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            {el.children ? "📂" : "📄"}
            {el.name}
          </div>
        ) : (
          <>
            <div
              onClick={() => handleClick(el.id)}
              style={{
                width: "150px",
                padding: "7px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              {el.children ? "📂" : "📄"}
              {el.name}
            </div>
            {open.includes(el.id) ? (
              <FileExplorer data={el?.children} left={"20px"} />
            ) : null}
          </>
        )
      )}
    </div>
  );
};

export default FileExplorer;
