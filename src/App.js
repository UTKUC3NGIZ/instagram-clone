import { useEffect, useRef } from "react";

function App() {
  const ref = useRef();

  useEffect(() => {
  },[ref])

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity"
            src="https://static.cdninstagram.com/images/instagram/xig/homepage/screenshots/screenshot1.png?__d=www"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity"
            src="https://static.cdninstagram.com/images/instagram/xig/homepage/screenshots/screenshot2.png?__d=www"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity"
            src="https://static.cdninstagram.com/images/instagram/xig/homepage/screenshots/screenshot3.png?__d=www"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity"
            src="https://static.cdninstagram.com/images/instagram/xig/homepage/screenshots/screenshot4.png?__d=www"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
