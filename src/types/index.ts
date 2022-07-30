export interface ILevelsEntity {
  level: 1 | 2 | 3 | 4 | 5 | 6
  startLevelFunction: (level: string) => void
}
