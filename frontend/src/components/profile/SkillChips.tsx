import { Skill } from "../../types/types";
import styles from "./SkillChips.module.css";

interface SkillChipsProps {
  skills: Skill[];
}

export function SkillChips({ skills }: SkillChipsProps) {
  if (skills.length === 0) {
    return null;
  }

  return (
    <div className={styles.list}>
      {skills.map((skill) => (
        <span key={skill.technology} className="cx-chip cx-chip__blue">
          {skill.technology}
        </span>
      ))}
    </div>
  );
}
