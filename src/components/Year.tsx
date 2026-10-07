"use client";

import { useSyncExternalStore } from "react";

/* Reads the year only on the client so the static prerender stays stable. */
const subscribe = () => () => {};

function getClientSnapshot() {
  return new Date().getFullYear().toString();
}

function getServerSnapshot() {
  return "";
}

export default function Year() {
  const year = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  return <>{year}</>;
}
