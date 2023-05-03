class Vec3 {
  constructor(public x: f64 = 0, public y: f64 = 0, public z: f64 = 0) {}
}
describe("example", () => {
  it("should be 42", () => {
    expect<i32>(19 + 23).toBe(42, "19 + 23 is 42");
  });

  it("should be the same reference", () => {
    let ref = new Vec3();
    expect<Vec3>(ref).toBe(ref, "Reference Equality");
  });

  it("should perform a memory comparison", () => {
    let a = new Vec3(1, 2, 3);
    let b = new Vec3(1, 2, 3);

    expect<Vec3>(a).toStrictEqual(
      b,
      "a and b have the same values, (discluding child references)",
    );
  });

  it("should compare strings", () => {
    expect<string>("a=" + "200").toBe("a=200", "both strings are equal");
  });

  it("should compare values", () => {
    expect<i32>(10).toBeLessThan(200);
    expect<i32>(1000).toBeGreaterThan(200);
    expect<i32>(1000).toBeGreaterThanOrEqual(1000);
    expect<i32>(1000).toBeLessThanOrEqual(1000);
  });

  it("can log some values to the console", () => {
    // log<string>("Hello world!"); // strings!
    // log<f64>(3.1415); // floats!
    // log<u8>(244); // integers!
    // log<u64>(0xffffffff); // long values!
    // log<ArrayBuffer>(new ArrayBuffer(50)); // bytes!
    const data = [121,1242,121,1212,4,54,5,26,565,4,54,545]
    const a8 = new Uint8Array(data.length)
    for (let i = 0; i < data.length; i++) {
      a8[i] = data[i];
      
    }

    log(a8)
    // log<ArrayBuffer>(new ArrayBuffer(data)); // bytes!
  });
});
