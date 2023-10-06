#### Testing a Promise

Code template :

```
test("----name of the test case----", ()=>{
  return ----promise function which we wan to test----().then((data)=>{
    expect(data).toBe(----expected value----);
  })
}
```
