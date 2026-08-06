import { useT } from '../i18n'
import type { ProjectTag } from '../content/projects'

/** Подписи ниш проектов на текущем языке. */
export function useProjectTags(): Record<ProjectTag, string> {
  const { t } = useT()
  return {
    kidsShoes: t.portfolioTagKidsShoes,
    detailing: t.portfolioTagDetailing,
    pillows: t.portfolioTagPillows,
    furniture: t.portfolioTagFurniture,
    books: t.portfolioTagBooks,
    arcade: t.portfolioTagArcade,
    florist: t.portfolioTagFlorist,
  }
}
