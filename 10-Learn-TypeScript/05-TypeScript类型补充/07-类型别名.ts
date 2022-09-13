// type用于定义类型别名（type alias）
type UnionType = string | number | boolean;
type PointType = {
  x: number;
  y: number;
  z?: number;
};

function printID(id: UnionType) {}

function printPoint(point: PointType) {}

export {};
