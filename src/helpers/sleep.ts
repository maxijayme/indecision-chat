export const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
}
// This function is used to create a delay in the code execution.
