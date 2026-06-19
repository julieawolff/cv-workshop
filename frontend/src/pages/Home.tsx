import styles from "./Home.module.css";
import { useUsers } from "../hooks/useUsers";
import { ProfileHero } from "../components/profile/ProfileHero";
import { SkillChips } from "../components/profile/SkillChips";

const KNUT_ID = "11111111-1111-1111-1111-111111111111";

export default function Home() {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) {
    return <div className={styles.state}>Laster profil…</div>;
  }

  if (error) {
    return <div className={styles.state}>Kunne ikke laste profil.</div>;
  }

  const user = users?.find((u) => u.id === KNUT_ID) ?? users?.[0];

  if (!user) {
    return <div className={styles.state}>Fant ingen profil.</div>;
  }

  return (
    <div className={styles.container}>
      <ProfileHero user={user} />
      <p className={styles.description}>{user.description}</p>
      <SkillChips skills={user.skills} />
    </div>
  );
}
