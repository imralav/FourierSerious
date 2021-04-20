class Angle {
  constructor(private value: number, private unit: "DEG" | "RAD" | "GRAD") {}
}

const degrees = (value: number) => new Angle(value, "DEG");

export { degrees };
