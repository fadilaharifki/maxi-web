"use client";
import { BallTriangle } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="blue"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
