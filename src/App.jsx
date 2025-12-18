import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes/RoutesComponent";
import { ToastContainer } from "react-toastify";
import AmityUniversity from "./pages/AmityUniversity";

// const ALLOWED_DOMAINS = ["https://vidyarishi.com"];

function App() {
  // Check if page is in iframe
  // const isIframe = window.self !== window.top;

  // Determine the parent origin
  // const parentOrigin =
  //   window.location.ancestorOrigins?.[0] || document.referrer || "";

  // const isAllowed =
  //   isIframe &&
  //   ALLOWED_DOMAINS.some((domain) => parentOrigin.startsWith(domain));

  // return (
  //   <div
  //     style={{
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       minHeight: "100vh",
  //       backgroundColor: "#f8f9fa",
  //       color: "#333",
  //       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  //       padding: "20px",
  //     }}
  //   >
  //     <div style={{ textAlign: "center", maxWidth: "400px" }}>
  //       <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
  //         Access Restricted
  //       </h1>
  //       <p style={{ marginBottom: "1.5rem", color: "#555" }}>
  //         This page can only be accessed through authorized websites.
  //       </p>
  //       <a
  //         href="https://vidyarishi.com/"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         style={{
  //           display: "inline-block",
  //           padding: "12px 24px",
  //           backgroundColor: "#0056b3",
  //           color: "#fff",
  //           textDecoration: "none",
  //           borderRadius: "6px",
  //           transition: "background-color 0.3s ease",
  //         }}
  //         onMouseOver={(e) =>
  //           (e.currentTarget.style.backgroundColor = "#004494")
  //         }
  //         onMouseOut={(e) =>
  //           (e.currentTarget.style.backgroundColor = "#0056b3")
  //         }
  //       >
  //         Visit Vidyarishi
  //       </a>
  //     </div>
  //   </div>
  // );
  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <AmityUniversity />
      {/* <Router>
        <RoutesComponent />
      </Router> */}
    </>
  );
}
export default App;
