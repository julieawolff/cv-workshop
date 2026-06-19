import { useState } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string | null;
  name: string;
}

function initialsFromName(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

export function Avatar({ src, name }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={styles.fallback} role="img" aria-label={name}>
        {initialsFromName(name)}
      </div>
    );
  }

  return (
    <img
      className={styles.image}
      src={src}
      alt={name}
      onError={() => setFailed(true)}
    />
  );
}
