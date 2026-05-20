const SCALE = 1.35;

export function scale(value: number): number {
  return Math.round(value * SCALE);
}

export default SCALE;
