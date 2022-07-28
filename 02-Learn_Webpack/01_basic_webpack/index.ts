interface ChildInter {
  id: string;
  label: string;
  children?: ChildInter;
}
[];

interface Objinter<T> {
  id: string;
  label: string;
  children?: T;
}

for (let i = 0; i < 5000; i++) {
  let obj: Objinter<ChildInter> = {
    id: i + "",
    label: "fuName_" + i,
    children: {
      id: i + "1333",
      label: "zassd" + i,
      children: {
        id: "222",
        label: "23e3124",
        children: {
          id: "222",
          label: "2323",
        },
      },
    },
  };
}
