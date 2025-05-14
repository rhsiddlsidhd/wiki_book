"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { IContentLoaderProps } from "react-content-loader";

const ContentLoader = dynamic(() => import("react-content-loader"), {
  ssr: false,
});

interface RectLoaderProps extends IContentLoaderProps {
  width: number;
  height: number;
}

/**
 * RectLoader
 */
const RectLoader = ({ width, height, ...rest }: RectLoaderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...rest}
    >
      <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
    </ContentLoader>
  );
};

export default RectLoader;
