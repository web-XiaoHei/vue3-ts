//message? --> undefined | string
function printMessageLength(message?: string) {
  //   if (message) {
  //     console.log(message.length);
  //   }
  //   console.log((message as string).length);
  console.log(message!.length);
}

printMessageLength("aaa");
// printMessageLength();

export {};
