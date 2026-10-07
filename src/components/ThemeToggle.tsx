"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { site } from "@/content/profile";

const STORAGE_KEY = "portfolio-theme";
const CHANGE_EVENT = "portfolio-theme-change";

/** Subscribes to theme changes made anywhere (including other tabs). */
function subscribe(onStoreChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot() {
  return site.defaultTheme === "light" ? "light" : "dark";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    /* Read the DOM directly so rapid toggles never act on stale state. */
    const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage may be unavailable — the theme still applies for this visit */
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
