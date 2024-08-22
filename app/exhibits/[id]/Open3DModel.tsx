"use client";

import React from "react";

import Scene from "./Scene";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Open3DModel({
  data,
}: {
  data: {
    attributes: {
      url: string;
    }
  } | null;
}) {
  if (data === null) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={data.attributes.url.length === 0}
          className="w-fit px-3"
        >
          3D
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[80vh] max-w-7xl md:w-[80vw] !rounded-3xl">
        <Scene fileSrc={data.attributes.url} environmentPreset="warehouse" />
      </DialogContent>
    </Dialog>
  );
}
