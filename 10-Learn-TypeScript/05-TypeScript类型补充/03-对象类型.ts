// point:x/y ---> 对象类型
// {x:number,y:number}
function printPoint(point: { x: number; y: number; z?: number }) {
  console.log(point.x);
  console.log(point.y);
}
printPoint({ x: 123, y: 321 });
