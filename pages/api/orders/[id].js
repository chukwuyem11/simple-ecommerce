export default function handler(req, res) {
  const { pid } = req.query
  res.json(`Post: ${pid}`)
}