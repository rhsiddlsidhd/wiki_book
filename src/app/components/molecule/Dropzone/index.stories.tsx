import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useEffect } from "react";
import Dropzone from "./index";

import Button from "../../atoms/Button";
import Box from "../../layout/Box";

const meta = {
  title: "Molecules/Dropzone",
  component: Dropzone,
  tags: ["autodocs"],
  argTypes: {
    height: {
      control: { type: "number" },
      description: "세로폭",
      table: { type: { summary: "number" } },
    },
    width: {
      control: { type: "text" },
      description: "가로폭",
      table: { type: { summary: "number | string" } },
    },
    hasError: {
      control: { type: "boolean" },
      description: "변형 에러 플래그",
      table: { type: { summary: "boolean" } },
    },
    acceptedFileTypes: {
      description: "받은 파일 타입",
      table: { type: { summary: "string[]" } },
    },
    onDrop: {
      description: "파일이 드롭 입력되었을 때의 이벤트 핸들러",
      table: { type: { summary: "(files: File[]) => void" } },
    },
    onChange: {
      description: "파일이 입력되었을 때의 이벤트 핸들러",
      table: { type: { summary: "(files: File[]) => void" } },
    },
  },
} as Meta<typeof Dropzone>;

export default meta;

type Story = StoryObj<typeof Dropzone>;

const DropzoneDemo = (args: React.ComponentProps<typeof Dropzone>) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (droppedFiles: File[]) => {
    setFiles(droppedFiles);
    args.onDrop?.(droppedFiles);
  };

  const fetchData = async () => {
    const res = await fetch("../images/sample/1.jpg");
    const blob = await res.blob();
    const file = new File([blob], "1.png", { type: blob.type });
    setFiles((prev) => [...prev, file]);
  };

  const clearImages = () => {
    setFiles([]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box marginBottom={1}>
        <Dropzone {...args} value={files} onDrop={handleDrop} />
      </Box>
      <Box marginBottom={1}>
        <Button variant="primary" onClick={fetchData}>
          이미지를 추가
        </Button>
      </Box>
      <Box marginBottom={2}>
        <Button variant="secondary" onClick={clearImages}>
          모든 이미지를 클리어
        </Button>
      </Box>
      <Box>
        {files.map((f, i) => (
          <img
            key={i}
            src={URL.createObjectURL(f)}
            width="100px"
            alt={`sample-${i}`}
          />
        ))}
      </Box>
    </>
  );
};

export const WithControl: Story = {
  args: {
    height: 200,
    width: "100%",
    acceptedFileTypes: ["image/png", "image/jpeg", "image/jpg", "image/gif"],
    hasError: false,
  },
  render: (args) => <DropzoneDemo {...args} />,
};
