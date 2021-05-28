// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { events } = require('./data.json');

export default (req, res) => {
  if (req.method === 'GET'){
    res.status(200).json(events)
  } else {
    // limit which access
    res.setHeader('Allow', ['GET'])
    res.setstatus(405).json({message: `Method ${req.method} is not allowed`})
  }
}
