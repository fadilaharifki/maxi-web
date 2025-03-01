"use client";
import { BallTriangle } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#00568F"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
