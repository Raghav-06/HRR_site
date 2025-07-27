import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onMouseOver={() => setIsOpen(2)}
      onMouseOut={() => {
        if (isOpen === 2) setIsOpen(0);
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "6px",
          color: isOpen !== 0 ? "white" : "lightgrey",
          textDecoration: isOpen !== 0 ? "underline" : "none",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen(1)}
      >
        <h5 style={{ margin: 0 }}>options</h5>
        {isOpen === 0 ? (
          <ChevronDown size={16} color="lightgrey" />
        ) : (
          <ChevronUp size={16} color="white" />
        )}
      </div>

      {/* Dropdown list */}
      {isOpen !== 0 && (
        <div
          style={{
            marginTop: "6px",
            backgroundColor: "#333",
            color: "white",
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>p</li>
            <li>r</li>
            <li>t</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
