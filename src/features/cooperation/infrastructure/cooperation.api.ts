export async function sendCooperationApi(values: unknown) {
  await new Promise((r) => setTimeout(r, 900));
  console.log("Cooperation lead:", values);
}
