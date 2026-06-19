import { CxIcon } from "@computas/designsystem/icon/react";
import { User } from "../../types/types";
import { Avatar } from "./Avatar";
import styles from "./ProfileHero.module.css";

interface ProfileHeroProps {
  user: User;
}

function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

export function ProfileHero({ user }: ProfileHeroProps) {
  return (
    <div className={styles.hero}>
      <Avatar src={user.imageUrl} name={user.name} />
      <h1 className={styles.name}>{user.name}</h1>
      <p className={styles.tagline}>{user.university}</p>

      <div className={styles.contact}>
        <span className={styles.contactItem}>
          <CxIcon name="location" size="4" /> {user.address}
        </span>
        <span className={styles.contactItem}>
          <CxIcon name="phone" size="4" /> {user.phone}
        </span>
        <span className={styles.contactItem}>
          <CxIcon name="calendar" size="4" /> {calculateAge(user.birthDate)} år
        </span>
      </div>

      {user.linkedInUrl && (
        <a
          className={`cx-button cx-button--secondary ${styles.linkedin}`}
          href={user.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CxIcon name="external" size="4" /> LinkedIn
        </a>
      )}
    </div>
  );
}
