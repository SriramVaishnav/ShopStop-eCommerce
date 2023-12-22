import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: 
    "skAa3QYugjanUzAnTgyBlOcp32YwguBlnXlJy5r2GUs7e9zKxIbSw6q66fQp2u1xwuCLCC3cFPHtiYGX4RlV5022Q9vA2on3oMlalSS7t8ni4omyu5VyXVAtqBuDe2iT1u8LiF7XKhUI4y73PVQ2ox9Vku2QFjKDfpE7sBPRF9mlo49xIZhA",
})
