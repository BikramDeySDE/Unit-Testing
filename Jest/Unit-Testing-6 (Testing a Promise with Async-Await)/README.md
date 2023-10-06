## Testing a Promise with Async-Await

Code Template : 
```
test("----name of the test case----", async ()=> {
  const data = await ----the Promise function which we want to test----();
  expect(data).toBe(----expected value returned by the Promise function----);
})
```
