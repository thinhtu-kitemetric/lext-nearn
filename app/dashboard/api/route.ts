export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  console.log("param: ", searchParams)
  const res = await fetch('https://randomuser.me/api')
  const data = await res.json()
 console.log("get", data.results[0].email)
  return Response.json({ data })
}