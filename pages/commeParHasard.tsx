import Image from "next/image";
import { useState } from "react";

const CommeParhasard = () => {
  const [display, setDisplay] = useState(true);

  const changeImage = () => {
    setDisplay(false);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "scroll" }}>
      {display && (
        <div style={{ position: "relative", width: 7283, height: 2190 }}>
          <Image src="/tienstienstiens-sijmattendais.png" alt="test" fill />
          <div
            style={{
              position: "absolute",
              top: 918,
              left: 4041,
              width: 484,
              height: 484,
              zIndex: 1000,
            }}
            onClick={changeImage}
          ></div>
        </div>
      )}
      {!display && <Image src="/test.png" alt="test" width={720} height={720} />}
    </div>
  );
};

export default CommeParhasard;
