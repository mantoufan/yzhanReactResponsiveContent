import React from "react";
import ResponsiveContent from "yzhan-react-responsive-content";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>ResponsiveContent Example</h1>
      <ResponsiveContent
        set={[
          [
            <div
              style={{
                backgroundColor: "red",
                color: "white",
                lineHeight: "80vh",
                height: "80vh",
                textAlign: "center",
                fontSize: 30,
              }}
            >
              Content for mobile (up to 767px)
            </div>,
            768,
          ],
          [
            <div
              style={{
                backgroundColor: "green",
                color: "white",
                lineHeight: "80vh",
                height: "80vh",
                textAlign: "center",
                fontSize: 30,
              }}
            >
              Content for tablet (768px to 1023px)
            </div>,
            1024,
          ],
          [
            <div
              style={{
                backgroundColor: "blue",
                color: "white",
                lineHeight: "80vh",
                height: "80vh",
                textAlign: "center",
                fontSize: 30,
              }}
            >
              Content for desktop (1024px and above)
            </div>,
          ],
        ]}
      />
    </div>
  );
}

export default App;
