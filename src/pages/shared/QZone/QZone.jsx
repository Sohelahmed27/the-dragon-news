// eslint-disable-next-line no-unused-vars
import React from "react";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
const QZone = () => {
  return (
    <div className="text-center rounded text-light bg-secondary my-4 py-3">
      <h4>QZone</h4>
      <img src={qzone1} />
      <img src={qzone2} />
      <img src={qzone3} />
    </div>
  );
};

export default QZone;
